import { createClient } from "@/lib/supabase/client";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Database } from "@/lib/supabase/db";

export type Download = Database["public"]["Tables"]["downloads"]["Row"];
export type DownloadInsert =
  Database["public"]["Tables"]["downloads"]["Insert"];
export type DownloadUpdate =
  Database["public"]["Tables"]["downloads"]["Update"];

export async function getdownloads(request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("downloads")
    .select("*")
    .order("name", { ascending: true });
  return { data, error };
}

export async function getDownloadById(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("downloads")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

export async function createDownload(
  downloadData: DownloadInsert,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("downloads")
    .insert(downloadData)
    .select()
    .single();
  return { data, error };
}

export async function updateDownload(
  id: string,
  downloadData: DownloadUpdate,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("downloads")
    .update(downloadData)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

export async function deleteDownload(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { error } = await supabase.from("downloads").delete().eq("id", id);
  return { error };
}
