import type { MetaFunction } from "@remix-run/node";

import {
  ValidatedForm,
  validationError
} from "remix-validated-form";

import { z } from 'zod';
import { withZod } from "@remix-validated-form/with-zod";

import { FormInput } from "../components/input";
import { SubmitButton } from "../components/submit-button";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


const LoginSchema = withZod(
  z.object({
      email: z.string({
          required_error: "Email is required",
      }).email(),
      password: z.string().min(6, {
          message: "Your password isn't long enough",
      }),
      redirectTo: z.string().default("/admin"),
  }));


export default function Index() {
  return (
    <div>
      <h1 className="text-2xl">Welcome to Remix</h1>
      <ValidatedForm validator={LoginSchema} method="POST">
          <input type="hidden" name="redirectTo" value="/teacher" />
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="Password" />
          <SubmitButton label="Login" />
      </ValidatedForm>

    </div>
  );
}
