import React from 'react';
import Layout from '@theme/Layout';

export default function Refund() {
  return (
    <Layout title="Refund Policy">
      <div style={{padding: '2rem', maxWidth: '720px', margin: '0 auto'}}>
        <h1>Refund Policy</h1>

        <p>
          Refunds are available for 14 days following your initial purchase or the end of your free
          trial. Subsequent automatic renewals are non-refundable. To request a refund within this
          14-day window, use the appropriate method below.
        </p>

        <h2>Google Play</h2>
        <p>
          <a href="https://support.google.com/googleplay/answer/15574897">
            Request a refund on Google Play
          </a>
          . If it has been more than 48 hours since the charge, contact{' '}
          <a href="mailto:support@tasks.org">support@tasks.org</a>.
        </p>

        <h2>Paddle</h2>
        <p>To request a refund through Paddle, contact Paddle support.</p>
      </div>
    </Layout>
  );
}
