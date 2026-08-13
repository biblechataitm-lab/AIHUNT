const isServer = typeof window === 'undefined';

export interface SiteConfig {
  name: string;
  description: string;
  status: 'live' | 'maintenance' | 'disabled';
  statusMessage?: string;
  slots: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  techStack: string[];
  maker: string;
  upvoteCount: number;
  launchDate: string;
  link: string;
  logoUrl: string;
}

export interface Ad {
  id: string;
  slot: string;
  sponsoredLabel: string;
  clickUrl: string;
  text: string;
  imageUrl?: string;
  headline?: string;
}

const mockConfig: SiteConfig = {
  name: 'AIHunt',
  description: 'The premier product launch directory for AI products.',
  status: 'live',
  slots: ['sidebar-1', 'sidebar-2', 'product-1']
};

const mockProducts: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `product-${i + 1}`,
  name: `AI Tool ${i + 1}`,
  tagline: `An amazing AI tool to revolutionize workflow ${i + 1}`,
  description: `## This is a rich text description\n\nIt features **bold** text and lists:\n- Feature 1\n- Feature 2\n\n### Usage\n\nJust install and run.`,
  category: i % 3 === 0 ? 'productivity' : (i % 2 === 0 ? 'developer-tools' : 'design'),
  tags: ['ai', 'automation'],
  techStack: ['Next.js', 'OpenAI', 'Vercel'],
  maker: `Maker ${i + 1}`,
  upvoteCount: 100 + (i * 10),
  launchDate: new Date().toISOString(),
  link: 'https://example.com',
  logoUrl: 'https://picsum.photos/100?random=' + i
}));

const getMockState = () => process.env.PEERLIST_ADS_MOCK;

function guardClient() {
  if (!isServer) {
    throw new Error('Data functions cannot be called in Client Components.');
  }
}

export async function getSiteConfig(): Promise<SiteConfig | null> {
  guardClient();
  const state = getMockState();
  if (state === 'empty') return null;
  if (state === '1') return mockConfig;
  return null;
}

export async function getProducts(options?: { category?: string, sort?: string, q?: string, since?: string }): Promise<Product[]> {
  guardClient();
  const state = getMockState();
  if (state === 'empty') return [];
  if (state === '1') {
    let list = [...mockProducts];
    if (options?.category) {
      list = list.filter(p => p.category === options.category);
    }
    if (options?.q) {
      list = list.filter(p => p.name.toLowerCase().includes(options.q!.toLowerCase()));
    }
    return list;
  }
  return [];
}

export async function getProduct(id: string): Promise<Product | null> {
  guardClient();
  const state = getMockState();
  if (state === 'empty') return null;
  if (state === '1') {
    return mockProducts.find(p => p.id === id) || null;
  }
  return null;
}

export async function getAd({ slot }: { slot: string }): Promise<Ad | null> {
  guardClient();
  const state = getMockState();
  if (state === 'empty') return null;
  if (state === '1') {
    return {
      id: `ad-${slot}`,
      slot,
      sponsoredLabel: 'Sponsored by Peerlist',
      clickUrl: 'https://peerlist.io',
      headline: 'Level up your professional profile',
      text: 'Showcase your work, find jobs, and hire top talent on Peerlist.'
    };
  }
  return null;
}
