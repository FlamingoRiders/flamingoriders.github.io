import React from "react";
import { useSiteMetadata } from "hooks/useSiteMetadata";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
};

export const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  );
};

export default SEO;
