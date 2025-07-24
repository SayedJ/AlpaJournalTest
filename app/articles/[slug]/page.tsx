"use client";
import React from "react";

import { notFound, useSearchParams } from "next/navigation";
import { articles, researchers } from "@/lib/dummyData";
import ArticleInfoBar from "@/components/ArticleInfoBar";

export default function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const searchParams = useSearchParams();
  const authorName = searchParams.get("authorName") ?? "Jalil Hussaini";
  console.log(authorName, "this is author name");
  const article = articles.find((e) => e.slug === slug);

  if (!article) return notFound();

  return (
    <div className="flex flex-col items-center justify-center py-5 w-full">
      <ArticleInfoBar article={article} authorName={authorName} />
    </div>
  );
}
