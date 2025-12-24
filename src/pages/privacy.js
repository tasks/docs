import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Privacy() {
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
    <Layout title="Privacy Policy">
      <div style={{ padding: '2rem' }}>
        <div
          name="termly-embed"
          data-id="0e532d2f-e6f3-4579-aed9-465563e014c8"
          data-type="iframe"
        />
      </div>
    </Layout>
  );
}
