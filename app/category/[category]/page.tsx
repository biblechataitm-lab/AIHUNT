import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getProducts } from '@/lib/ads';
import { CategoryChips } from '@/components/CategoryChips';
import { ProductListWithPagination } from '@/components/ProductListWithPagination';
import { Sidebar } from '@/components/Sidebar';
import { ProductListSkeleton, SidebarSkeleton } from '@/components/Skeleton';

export const revalidate = 0;

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const readable = category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${readable} AI Tools & Software — AIHunt`,
    description: `Discover premier ${readable} AI tools, products, and developer frameworks.`,
  };
}

async function CategoryFeed({ category }: { category: string }) {
  const { products, nextCursor } = await getProducts({ category });

  return (
    <ProductListWithPagination
      initialProducts={products}
      initialNextCursor={nextCursor}
      fetchOptions={{ category }}
      emptyTitle={`No ${category} Products Yet`}
      emptyDescription="No AI products listed under this category yet. Be the first to launch one!"
    />
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const readable = category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="container main-layout">
      <section>
        <CategoryChips activeCategory={category} />

        <div className="section-header">
          <div>
            <h1 className="section-title">{readable}</h1>
            <p className="section-subtitle">
              Browse top-rated {readable.toLowerCase()} AI tools and platforms
            </p>
          </div>
        </div>

        <Suspense fallback={<ProductListSkeleton count={4} />}>
          <CategoryFeed category={category} />
        </Suspense>
      </section>

      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
    </div>
  );
}
