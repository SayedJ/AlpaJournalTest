"use client";

import ArticleCardGallery from "@/components/ArticleCardGallery";
import Banner from "@/components/Banner";
import BrowseByCategory from "@/components/BrowseByCategory";
import StaticsBanner from "@/components/StaticsBanner";

export default function Home() {
  return (
    <main className="h-full w-full flex items-center flex-col bg-white max-w-screen-xl mx-auto">
      <Banner />
      <StaticsBanner />
      <ArticleCardGallery />
      <BrowseByCategory />
    </main>
  );
}
