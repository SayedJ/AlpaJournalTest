"use client"; // This directive marks this as a client component

import { useState } from "react";
import { useRouter } from "next/navigation"; // For refreshing the page after data submission
import { createArticle } from "@/lib/supabase/models/articles";
import { createClient } from "@/lib/supabase/client"; // Import the client-side Supabase client

export default function AddDummyArticle() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClient(); // Initialize client-side Supabase client

  const handleAddDummyArticle = async () => {
    setLoading(true);
    setMessage("");

    // First, get the current user's ID
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setMessage(
        "Error: User not authenticated. Please sign in to add articles."
      );
      setLoading(false);
      console.error("Authentication error:", userError);
      return;
    }

    // Generate a simple dummy article
    const dummyArticle = {
      title: `Dummy Article ${Date.now()}`,
      content: `This is a dummy article content created at ${new Date().toLocaleString()}.`,
      author_id: user.id, // Assign the current user as the author
    };

    // Call the createArticle function from your model
    const { data, error } = await createArticle(dummyArticle);

    if (error) {
      setMessage(`Error adding article: ${error.message}`);
      console.error("Error creating article:", error);
    } else {
      setMessage("Dummy article added successfully!");
      // Refresh the server component to show the new article
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <button
        onClick={handleAddDummyArticle}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Adding..." : "Add Dummy Article"}
      </button>
      {message && (
        <p
          className={`mt-3 text-sm ${
            message.startsWith("Error") ? "text-red-500" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
      <p className="mt-2 text-xs text-gray-500">
        Note: You need to be signed in for the dummy article to be associated
        with an author.
      </p>
    </div>
  );
}
