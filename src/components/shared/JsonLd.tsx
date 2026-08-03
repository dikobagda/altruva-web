import React from 'react';

interface JsonLdProps {
  schema: Record<string, any> | Record<string, any>[];
}

export default function JsonLd({ schema }: JsonLdProps) {
  // When multiple entities are provided, group them under @graph (Google best practice)
  const ld = Array.isArray(schema)
    ? { '@context': 'https://schema.org', '@graph': schema }
    : schema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
