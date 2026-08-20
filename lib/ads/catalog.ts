import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'mock-1',
    title: 'Claude Engineer',
    tagline: 'An interactive CLI tool leveraging Anthropic Claude to build software',
    description: 'Autonomous coding agent harness tailored for frontier LLMs with multi-file contextual execution.',
    logo: 'https://placehold.co/96x96/181715/faf9f5?text=CE',
    link: 'https://example.com/claude-engineer',
    category: 'AI',
    tags: ['ai', 'developer-tools', 'automation'],
    techStack: ['TypeScript', 'Python', 'Anthropic API'],
    coverImages: [],
    upvotes: 245,
    launchedAt: new Date(Date.now() - 1 * 86400000).toISOString(),
    maker: { name: 'Dario Amodei', username: 'dario', avatar: 'https://placehold.co/64x64/cc785c/ffffff?text=D' },
  },
  {
    id: 'mock-2',
    title: 'Cognitive Flow',
    tagline: 'Visual reasoning and prompt orchestration workspace for AI engineers',
    description: 'Design, evaluate, and deploy composite multi-agent workflows with stateful memory and inspection tools.',
    logo: 'https://placehold.co/96x96/181715/faf9f5?text=CF',
    link: 'https://example.com/cognitive-flow',
    category: 'AI',
    tags: ['ai', 'agents', 'workflow'],
    techStack: ['Next.js', 'PyTorch', 'Rust'],
    coverImages: [],
    upvotes: 182,
    launchedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    maker: { name: 'Elena Vance', username: 'elena', avatar: 'https://placehold.co/64x64/5db8a6/ffffff?text=E' },
  },
  {
    id: 'mock-3',
    title: 'PromptMatrix',
    tagline: 'Automated test suite and regression harness for production LLM systems',
    description: 'Continuous integration for prompts, system prompts, and semantic evaluations with latency and cost telemetry.',
    logo: 'https://placehold.co/96x96/181715/faf9f5?text=PM',
    link: 'https://example.com/prompt-matrix',
    category: 'Developer Tools',
    tags: ['developer-tools', 'testing', 'llm'],
    techStack: ['Go', 'React', 'ClickHouse'],
    coverImages: [],
    upvotes: 129,
    launchedAt: new Date(Date.now() - 6 * 86400000).toISOString(),
    maker: { name: 'Julian Zhang', username: 'jzhang', avatar: 'https://placehold.co/64x64/e8a55a/ffffff?text=J' },
  },
  {
    id: 'mock-4',
    title: 'LatentSearch',
    tagline: 'Lightning-fast hybrid vector & keyword neural search engine',
    description: 'Embeddings search infrastructure designed to query billions of vectors under 10ms with built-in reranking.',
    logo: 'https://placehold.co/96x96/181715/faf9f5?text=LS',
    link: 'https://example.com/latentsearch',
    category: 'Search & Data',
    tags: ['ai', 'search', 'database'],
    techStack: ['C++', 'Rust', 'Wasm'],
    coverImages: [],
    upvotes: 94,
    launchedAt: new Date(Date.now() - 8 * 86400000).toISOString(),
    maker: null,
  },
];

const MOCK_SITE: SiteConfig = {
  key: 'mock-site',
  name: 'AIHunt',
  domain: 'aihunt.com',
  category: 'ai',
  tags: ['ai', 'machine-learning', 'developer-tools'],
  status: 'live',
  statusMessage: null,
  slots: [
    { key: 'sidebar-1', slotType: 'sidebar', format: 'native' },
    { key: 'sidebar-2', slotType: 'sidebar', format: 'native' }
  ],
};

/**
 * What this site is and whether it is open.
 * Returns null when the backend is unreachable or key is rejected.
 */
export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;

  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? null;
}

/**
 * The products this directory lists.
 */
export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  return data ?? { products: [], nextCursor: null, appliedTags: [] };
}

/** One product, for a directory's detail page. Null when it does not exist. */
export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? null;
}
