import React, { useEffect } from 'react';

/**
 * SEO component to dynamically manage HTML head meta tags for title, description,
 * keywords, and social/WhatsApp Open Graph preview tags.
 */
const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // Helper to update existing meta tags or create them if missing
    const updateMetaTag = (attributeName, attributeValue, contentValue) => {
      if (!contentValue) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (element) {
        element.setAttribute('content', contentValue);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        element.setAttribute('content', contentValue);
        document.head.appendChild(element);
      }
    };

    // 2. Update Primary SEO Metadata
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // 3. Update Open Graph / WhatsApp Preview Metadata
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);

    // 4. Update Twitter Card Metadata
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);

  }, [title, description, keywords]);

  return null; // Head operations only; no visual UI rendering.
};

export default SEO;
