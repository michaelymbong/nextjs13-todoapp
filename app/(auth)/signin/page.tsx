import AuthForm from "@/components/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Next.js 13.2 playaround",
};

export default function Signin() {
  return (
    <div>
      <AuthForm mode="signin" />
    </div>
  );
}
