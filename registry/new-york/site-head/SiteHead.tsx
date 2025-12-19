export interface SiteHeadProps {
  /**
   * Site name (e.g., "Passlock")
   */
  name: string;
  /**
   * Full site URL with protocol (e.g., "https://passlock.to")
   */
  url: string;
  /**
   * Full page title for SEO
   */
  title: string;
  /**
   * Full description for SEO (longer)
   */
  description: string;
  /**
   * Short description for OG/Twitter cards
   */
  shortDescription?: string;
  /**
   * Theme color for browser chrome
   * @default "#000000"
   */
  themeColor?: string;
  /**
   * Twitter handle (e.g., "@thekitze")
   */
  twitterHandle?: string;
  /**
   * Keywords for SEO
   */
  keywords?: string;
  /**
   * Author name
   */
  author?: string;
  /**
   * DataFast website ID (optional)
   */
  datafastId?: string;
  /**
   * JSON-LD structured data object (optional)
   */
  jsonLd?: Record<string, unknown>;
}

export function SiteHead({
  name,
  url,
  title,
  description,
  shortDescription,
  themeColor = "#000000",
  twitterHandle,
  keywords,
  author,
  datafastId,
  jsonLd,
}: SiteHeadProps) {
  const ogDescription = shortDescription || description;
  const domain = url.replace(/^https?:\/\//, "");

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="apple-mobile-web-app-title" content={name} />

      {/* Theme Colors */}
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content="dark" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* SEO Meta Tags */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="robots" content="index, follow" />

      {/* OpenGraph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${url}/opengraph-image.png`} />
      <meta
        property="og:image:secure_url"
        content={`${url}/opengraph-image.png`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogDescription} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={`${url}/opengraph-image.png`} />
      <meta name="twitter:image:alt" content={ogDescription} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* DataFast Analytics */}
      {datafastId && (
        <script
          defer
          data-website-id={datafastId}
          data-domain={domain}
          src="https://datafa.st/js/script.js"
        />
      )}
    </>
  );
}
