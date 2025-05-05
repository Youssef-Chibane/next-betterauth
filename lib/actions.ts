"use server";

import { redirect } from "next/navigation";
import { auth } from "./auth/auth";
import { APIError } from "better-auth/api";

interface State {
  errorMessage?: string | null;
}

export async function signUp(prevState: State, formdata: FormData) {
  const rawFormData = {
    email: formdata.get("email") as string,
    password: formdata.get("pwd") as string,
    firstName: formdata.get("firstsname") as string,
    lastName: formdata.get("lastname") as string,
  };

  const { email, password, firstName, lastName } = rawFormData;

  try {
    await auth.api.signUpEmail({
      body: {
        name: `${firstName} ${lastName}`,
        email,
        password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNPROCESSABLE_ENTITY":
          return { errorMessage: "User already exists." };
        case "BAD_REQUEST":
          return { errorMessage: "Invalid email." };
        default:
          return { errorMessage: "Something went wrong." };
      }
    }
    console.error("sign up with email and password has not worked", error);
  }
  redirect("/dashboard");
}
