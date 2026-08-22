import { useCheckCredentials } from "./useCheckCredentials";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const signUpSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export function useSignInSignUp() {
  const [isFlipped, setIsFlipped] = useState(false);
    const { checkCredentials, isLoading } = useCheckCredentials();

  const signInForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signInSchema,
    onSubmit: (values) => {
     checkCredentials(values).then((isValid) => {
        if (isValid) {
          toast.success("Signed in successfully");
        } else {
          toast.error("Email or password is incorrect");
        }
      });
      
    },
  });

  const signUpForm = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("Sign Up values:", values);
    },
  });

  return {
    isFlipped,
    flipToSignUp: () => setIsFlipped(true),
    flipToSignIn: () => setIsFlipped(false),
    signInForm,
    signUpForm,
  };
}