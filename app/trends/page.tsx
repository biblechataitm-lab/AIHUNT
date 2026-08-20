import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getProducts } from '@/lib/ads';
import { CategoryChips } from '@/components/CategoryChips';
import { ProductListWithPagination } from '@/components/ProductListWithPagination';
import { Sidebar } from '@/components/Sidebar';
import { ProductListSkeleton, SidebarSkeleton } from '@/components/Skeleton';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Trending AI Tools & Software — AIHunt',
  description: 'Top upvoted and most popular AI software, developer tools, and agentic workflows.',
};

async function TrendsFeed() {
  const { products, nextCursor } = await getProducts({ sort: 'top' });

  return (
    <ProductListWithPagination
      initialProducts={products}
      initialNextCursor={nextCursor}
      fetchOptions={{ sort: 'top' }}
      emptyTitle="No Trending Products"
      emptyDescription="No trending AI products found yet. Check back soon!"
    />
  );
}

export default function TrendsPage() {
  return (
    <div className="container main-layout">
      <section>
        <CategoryChips />

        <div className="section-header">
          <div>
            <h1 className="section-title">Trending AI Tools</h1>
            <p className="section-subtitle">
              Most popular and highest upvoted AI tools across the community
            </p>
          </div>
        </div>

        <Suspense fallback={<ProductListSkeleton count={4} />}>
          <TrendsFeed />
        </Suspense>
      </section>

      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
    </div>
  );
}
