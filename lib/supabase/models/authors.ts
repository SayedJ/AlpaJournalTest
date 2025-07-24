import { createClient } from "@/lib/supabase/client";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Database } from "@/lib/supabase/db";

/** --- AUTHORS --- */
export type Author = Database["public"]["Tables"]["authors"]["Row"];
export type AuthorInsert = Database["public"]["Tables"]["authors"]["Insert"];
export type AuthorUpdate = Database["public"]["Tables"]["authors"]["Update"];

export async function getAuthors(request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("authors")
    .select("*")
    .order("name", { ascending: true });
  return { data, error };
}

export async function getAuthorById(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("authors")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

export async function createAuthor(
  authorData: AuthorInsert,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("authors")
    .insert(authorData)
    .select()
    .single();
  return { data, error };
}

export async function updateAuthor(
  id: string,
  authorData: AuthorUpdate,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("authors")
    .update(authorData)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

export async function deleteAuthor(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { error } = await supabase.from("authors").delete().eq("id", id);
  return { error };
}
