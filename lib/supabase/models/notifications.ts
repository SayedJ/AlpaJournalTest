import { createClient } from "@/lib/supabase/client";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Database } from "@/lib/supabase/db";

export type Notification = Database["public"]["Tables"]["notifications"]["Row"];
export type NotificationInsert =
  Database["public"]["Tables"]["notifications"]["Insert"];
export type NotificationUpdate =
  Database["public"]["Tables"]["notifications"]["Update"];

export async function getNotifications(request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .order("created_at", { ascending: false });
  return { data, error };
}

export async function getNotificationById(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

export async function createNotification(
  notificationData: NotificationInsert,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("notifications")
    .insert(notificationData)
    .select()
    .single();
  return { data, error };
}

export async function updateNotification(
  id: string,
  notificationData: NotificationUpdate,
  request?: Request
) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { data, error } = await supabase
    .from("notifications")
    .update(notificationData)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

export async function deleteNotification(id: string, request?: Request) {
  const supabase = request
    ? await createServerSupabaseClient(request)
    : createClient();
  const { error } = await supabase.from("notifications").delete().eq("id", id);
  return { error };
}
