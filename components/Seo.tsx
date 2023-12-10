// components/Seo.tsx
import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  url: string;
  ogImage: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords, author, url, ogImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <link rel="icon" href="/images/logo.svg" />
      <link rel="apple-touch-icon" href="/images/ux-ai-logo.svg" />
    </Head>
  );
};

export default Seo;
