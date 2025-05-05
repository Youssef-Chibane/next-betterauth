"use server";

import { redirect } from "next/navigation";
import { auth } from "./auth/auth";

export async function signup(formdata: FormData) {
  const rawFormData = {
    email: formdata.get("email") as string,
    password: formdata.get("pwd") as string,
    firstsname: formdata.get("firstsname") as string,
    lastname: formdata.get("lastname") as string,
  };

  const { email, password, firstsname, lastname } = rawFormData;

  try {
    await auth.api.signUpEmail({
      body: {
        name: `${firstsname} ${lastname}`,
        email,
        password,
      },
    });
  } catch (error) {
    console.error("sign up with email and password has not worked", error);
  }

  redirect("/dashboard");
}
