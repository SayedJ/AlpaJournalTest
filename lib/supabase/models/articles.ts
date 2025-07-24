import { createClient } from "@/lib/supabase/client"; // For client-side operations
import { createServerSupabaseClient } from "@/lib/supabase/server"; // For server-side operations
import { Database } from "@/lib/supabase/db"; // Import database types

// Type for an Article, derived from the 'articles' table Row type in db.ts
export type Article = Database["public"]["Tables"]["articles"]["Row"];
export type ArticleInsert = Database["public"]["Tables"]["articles"]["Insert"];
export type ArticleUpdate = Database["public"]["Tables"]["articles"]["Update"];

export async function getArticles(request?: Request) {
  let supabase;
  if (request) {
    supabase = await createServerSupabaseClient(request);
  } else {
    supabase = createClient();
  }
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });
  return { data, error };
}

/**
 * Fetches a single article by its ID.
 * Can be used on both client and server.
 * @param {string} id - The ID of the article.
 * @param {Request} [request] - Optional request object for server-side client.
 * @returns {Promise<{ data: Article | null; error: Error | null }>}
 */
export async function getArticleById(id: string, request?: Request) {
  let supabase;
  if (request) {
    supabase = await createServerSupabaseClient(request);
  } else {
    supabase = createClient();
  }
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

/**
 * Creates a new article in the database.
 * Typically used on the server or in a client-side function that requires authentication.
 * @param {ArticleInsert} articleData - The data for the new article.
 * @param {Request} [request] - Optional request object for server-side client.
 * @returns {Promise<{ data: Article | null; error: Error | null }>}
 */
export async function createArticle(
  articleData: ArticleInsert,
  request?: Request
) {
  let supabase;
  if (request) {
    supabase = await createServerSupabaseClient(request);
  } else {
    supabase = createClient();
  }
  console.log(articleData, "this is data");
  const { data, error } = await supabase
    .from("articles")
    .insert({
      ...articleData,
      author_id: articleData.author_id, // ✅ enforce RLS consistency
    })
    .select()
    .single();
  return { data, error };
}

/**
 * Updates an existing article in the database.
 * Typically used on the server or in a client-side function that requires authentication.
 * @param {string} id - The ID of the article to update.
 * @param {ArticleUpdate} articleData - The updated data for the article.
 * @param {Request} [request] - Optional request object for server-side client.
 * @returns {Promise<{ data: Article | null; error: Error | null }>}
 */
export async function updateArticle(
  id: string,
  articleData: ArticleUpdate,
  request?: Request
) {
  let supabase;
  if (request) {
    supabase = await createServerSupabaseClient(request);
  } else {
    supabase = createClient();
  }
  const { data, error } = await supabase
    .from("articles")
    .update(articleData)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

/**
 * Deletes an article from the database by its ID.
 * Typically used on the server or in a client-side function that requires authentication.
 * @param {string} id - The ID of the article to delete.
 * @param {Request} [request] - Optional request object for server-side client.
 * @returns {Promise<{ error: Error | null }>}
 */
export async function deleteArticle(id: string, request?: Request) {
  let supabase;
  if (request) {
    supabase = await createServerSupabaseClient(request);
  } else {
    supabase = createClient();
  }
  const { error } = await supabase.from("articles").delete().eq("id", id);
  return { error };
}
