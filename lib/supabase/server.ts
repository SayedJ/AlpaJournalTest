"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "./db";

export const createServerSupabaseClient = async (request?: Request) => {
  // Made the function async
  const cookieStore = await cookies(); // Await cookies() to ensure it's not a Promise

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // Supabase URL from environment variables
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Supabase anonymous key from environment variables
    {
      cookies: {
        // Define how cookies are managed (get, set, remove)
        get: (name: string) => {
          return cookieStore.get(name)?.value;
        },
        // Make set and remove methods async to match expected signature for newer @supabase/ssr versions
        set: async (
          name: string,
          value: string,
          options: CookieOptions
        ): Promise<void> => {
          cookieStore.set({ name, value, ...options });
        },
        remove: async (name: string, options: CookieOptions): Promise<void> => {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );
};
