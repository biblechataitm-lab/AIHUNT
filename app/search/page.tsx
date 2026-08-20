import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getProducts } from '@/lib/ads';
import { CategoryChips } from '@/components/CategoryChips';
import { ProductListWithPagination } from '@/components/ProductListWithPagination';
import { Sidebar } from '@/components/Sidebar';
import { ProductListSkeleton, SidebarSkeleton } from '@/components/Skeleton';

export const revalidate = 0;

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search results for "${q}" — AIHunt` : 'Search AI Tools & Software — AIHunt',
    description: `Discover AI tools and software matching "${q || ''}".`,
  };
}

async function SearchFeed({ q }: { q?: string }) {
  const { products, nextCursor } = await getProducts({ q });

  return (
    <ProductListWithPagination
      initialProducts={products}
      initialNextCursor={nextCursor}
      fetchOptions={{ q }}
      emptyTitle={`No results for "${q || ''}"`}
      emptyDescription="Try searching for another keyword or browse our categories."
    />
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  return (
    <div className="container main-layout">
      <section>
        <CategoryChips />

        <div className="section-header">
          <div>
            <h1 className="section-title">
              {q ? `Search: "${q}"` : 'All Search Results'}
            </h1>
            <p className="section-subtitle">
              {q ? `Browsing AI products matching "${q}"` : 'Browse all curated directory entries'}
            </p>
          </div>
        </div>

        <Suspense fallback={<ProductListSkeleton count={4} />}>
          <SearchFeed q={q} />
        </Suspense>
      </section>

      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
    </div>
  );
}
