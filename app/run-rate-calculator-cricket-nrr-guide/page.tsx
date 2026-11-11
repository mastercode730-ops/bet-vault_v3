import BlogPostPage, { generateMetadata as baseMetadata } from '../blog/[slug]/page';

const SLUG = 'run-rate-calculator-cricket-nrr-guide';

export async function generateMetadata() {
  return baseMetadata({ params: Promise.resolve({ slug: SLUG }) });
}

export default async function Page() {
  return BlogPostPage({ params: Promise.resolve({ slug: SLUG }) });
}

