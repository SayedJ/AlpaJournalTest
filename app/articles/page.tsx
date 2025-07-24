"use client";
import AllArticles from "@/components/AllArticles";
import ArticleSearchBar from "@/components/ArticleSearchBar";
import FeaturedArticles from "@/components/FeaturedArticles";
import FilterBar from "@/components/FilterBar";

export default function ArticlesPage() {
  return (
    <section className="flex flex-col gap-y-5 items-center justify-center w-full mb-20">
      <ArticleSearchBar />
      <FilterBar />
      <FeaturedArticles />
      <AllArticles />
    </section>
  );
}
