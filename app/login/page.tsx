"use client";
import AuthForm from "@/components/AuthForm";

import toast from "react-hot-toast";
export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-mono text-center bg-accent-orange">
      <AuthForm />
    </main>
  );
}
