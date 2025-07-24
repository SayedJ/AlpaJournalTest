import { createClient } from "@/lib/supabase/client";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Database } from "@/lib/supabase/db";

export type Follower = Database["public"]["Tables"]["followers"]["Row"];
export type FollowerInsert =
  Database["public"]["Tables"]["followers"]["Insert"];
export type FollowerUpdate =
  Database["public"]["Tables"]["followers"]["Update"];

export async function getFollowers(request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase.from("followers").select("*");
  return { data, error };
}

export async function getFollowerById(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("followers")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

export async function createFollower(
  followerData: FollowerInsert,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("followers")
    .insert(followerData)
    .select()
    .single();
  return { data, error };
}

export async function updateFollower(
  id: string,
  followerData: FollowerUpdate,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("followers")
    .update(followerData)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

export async function deleteFollower(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { error } = await supabase.from("followers").delete().eq("id", id);
  return { error };
}
