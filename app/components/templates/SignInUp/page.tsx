
"use client";
import { useSignInSignUp } from "../../modules/useSignIUp";

export default function SignInUp() {
  
  const { isFlipped, flipToSignUp, flipToSignIn, signInForm, signUpForm } = useSignInSignUp()
  
  return (
    <div className="flex min-h-screen content-center flex-wrap justify-center  bg-bg px-4">
      <h1 className="text-neutral-900 dark:text-white w-full text-center mb-2 text-4xl font-bold  ">Welcome to AIchat</h1>
      <div className="relative w-full max-w-sm" style={{ perspective: "1200px" }}>
        <div
          className="relative w-full transition-transform duration-700 *:min-h-max"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ---------- SIGN IN (front) ---------- */}
          <div
            className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-bg p-6 shadow-sm"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
              Sign In
            </h3>

            <form onSubmit={signInForm.handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signInForm.values.email}
                  onChange={signInForm.handleChange}
                  onBlur={signInForm.handleBlur}
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
                {signInForm.touched.email && signInForm.errors.email && (
                  <p className="mt-1 text-xs text-red-500">{signInForm.errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signInForm.values.password}
                  onChange={signInForm.handleChange}
                  onBlur={signInForm.handleBlur}
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
                {signInForm.touched.password && signInForm.errors.password && (
                  <p className="mt-1 text-xs text-red-500">{signInForm.errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-white hover:bg-primary-hover"
              >
                Sign In
              </button>

              <p className="text-center text-sm text-neutral-500">
                Want to create an account?{" "}
                <button
                  type="button"
                  onClick={flipToSignUp}
                  className="text-primary hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>

          {/* ---------- SIGN UP (back) ---------- */}
          <div
            className="absolute inset-0 w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-bg p-6 shadow-sm"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
              Create Account
            </h3>

            <form onSubmit={signUpForm.handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={signUpForm.values.username}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
                {signUpForm.touched.username && signUpForm.errors.username && (
                  <p className="mt-1 text-xs text-red-500">{signUpForm.errors.username}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signUpForm.values.email}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
                {signUpForm.touched.email && signUpForm.errors.email && (
                  <p className="mt-1 text-xs text-red-500">{signUpForm.errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signUpForm.values.password}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
                {signUpForm.touched.password && signUpForm.errors.password && (
                  <p className="mt-1 text-xs text-red-500">{signUpForm.errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-white hover:bg-primary-hover"
              >
                Sign Up
              </button>

              <p className="text-center text-sm text-neutral-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={flipToSignIn}
                  className="text-primary hover:underline"
                >
                  Sign In
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}