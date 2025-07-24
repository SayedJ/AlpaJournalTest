// components/AuthForm.tsx
"use client"; // This is a client component

import { useState } from "react";
import { createClient } from "@/lib/supabase/client"; // Import your client-side Supabase client
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const supabase = createClient();
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`Error signing up: ${error.message}`);
      console.error("Sign up error:", error);
    } else {
      setMessage(
        "Sign up successful! Please check your email to confirm your account."
      );
      // Optionally, redirect after successful sign-up and email confirmation
      // router.push('/dashboard');
    }
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`Error signing in: ${error.message}`);
      console.error("Sign in error:", error);
    } else {
      setMessage("Signed in successfully!");
      router.refresh(); // Refresh to update server components and re-fetch user data
      router.push("/articles"); // Redirect to the articles page
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signOut();

    if (error) {
      setMessage(`Error signing out: ${error.message}`);
      console.error("Sign out error:", error);
    } else {
      setMessage("Signed out successfully!");
      router.refresh(); // Refresh to update server components
      router.push("/"); // Redirect to home or login page
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Authentication
      </h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="flex flex-col space-y-3">
          <button
            type="submit"
            onClick={handleSignIn}
            disabled={loading}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          <button
            type="submit"
            onClick={handleSignUp}
            disabled={loading}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <button
            type="button" // Use type="button" to prevent form submission
            onClick={handleSignOut}
            disabled={loading}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing Out..." : "Sign Out"}
          </button>
        </div>
      </form>
      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.startsWith("Error") ? "text-red-500" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
