import { createClient } from "@/lib/supabase/client";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Database } from "@/lib/supabase/db";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type CategoryInsert =
  Database["public"]["Tables"]["categories"]["Insert"];
export type CategoryUpdate =
  Database["public"]["Tables"]["categories"]["Update"];

export async function getCategories(request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name", { ascending: true });
  return { data, error };
}

export async function getCategoryById(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

export async function createCategory(
  categoryData: CategoryInsert,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("categories")
    .insert(categoryData)
    .select()
    .single();
  return { data, error };
}

export async function updateCategory(
  id: string,
  categoryData: CategoryUpdate,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("categories")
    .update(categoryData)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

export async function deleteCategory(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { error } = await supabase.from("categories").delete().eq("id", id);
  return { error };
}
