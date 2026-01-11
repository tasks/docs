import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Terms() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout title="Terms of Service">
      <div style={{ padding: '2rem' }}>
        <div
          name="termly-embed"
          data-id="8fd7784d-60f5-4e4f-b07f-51219f082bf5"
          data-type="iframe"
        />
      </div>
    </Layout>
  );
}
