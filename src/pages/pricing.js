import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './pricing.module.css';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Manage your tasks on Android for free and connect to popular cloud services.',
    features: [
      'No account or internet required',
      'Unlimited tasks, lists, tags, and reminders',
      'Recurring tasks and notifications',
      'Location-based reminders',
      'Connect to Google Tasks and Microsoft To Do',
    ],
    cta: {
      label: 'Install on Google Play',
      href: 'https://play.google.com/store/apps/details?id=org.tasks',
    },
  },
  {
    name: 'Tasks.org Cloud',
    description: 'Unlock all in-app features and connect to Tasks.org Cloud sync.',
    billingOptions: [
      {id: 'annual', label: 'Annual', price: '$2.49', period: '/month', note: 'Billed annually ($29.99/year)'},
      {id: 'monthly', label: 'Monthly', price: '$2.99', period: '/month', note: 'Billed monthly'},
    ],
    features: [
      'All name-your-price features',
      'Instant sync between Android and desktop',
      'Friends & Family list sharing',
      'Email-to-task with a private inbox',
      'Connect to Apple Reminders on iOS',
    ],
    cta: {
      label: 'Subscribe on Google Play',
      href: 'https://play.google.com/store/apps/details?id=org.tasks',
    },
    secondary: {
      label: 'Or sponsor on GitHub for $3/month',
      href: 'https://github.com/sponsors/abaker',
    },
    featured: true,
    badge: 'Recommended',
  },
  {
    name: 'Name-your-price',
    price: 'From $0.99',
    period: '/year',
    description: 'Choose your own subscription price. Unlocks all in-app features.',
    features: [
      'Custom themes and icons',
      'Self-hosted synchronization with DAVx⁵, CalDAV, and EteSync',
      'Tasks.org for desktop',
      'Support open source software',
    ],
    cta: {
      label: 'Subscribe on Google Play',
      href: 'https://play.google.com/store/apps/details?id=org.tasks',
    },
  },
];

function Tier({tier}) {
  const [billingId, setBillingId] = useState(tier.billingOptions?.[0]?.id);
  const billing = tier.billingOptions?.find((o) => o.id === billingId);
  const price = billing?.price ?? tier.price;
  const period = billing?.period ?? tier.period;
  const priceNote = billing?.note ?? tier.priceNote;

  return (
    <div className={`${styles.tier}${tier.featured ? ` ${styles.tierFeatured}` : ''}`}>
      {tier.badge && <span className={styles.badge}>{tier.badge}</span>}
      <h2 className={styles.tierName}>{tier.name}</h2>
      {tier.billingOptions && (
        <div className={styles.billingToggle} role="group" aria-label="Billing period">
          {tier.billingOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`${styles.billingOption}${billingId === opt.id ? ` ${styles.billingOptionActive}` : ''}`}
              aria-pressed={billingId === opt.id}
              onClick={() => setBillingId(opt.id)}>
              {opt.label}
            </button>
          ))}
        </div>
      )}
      <div className={styles.priceBlock}>
        <div className={styles.priceRow}>
          <span className={styles.priceGroup}>
            <span className={styles.price}>{price}</span>
            {period && <span className={styles.cadence}>{period}</span>}
          </span>
          {tier.cadence && <span className={styles.cadence}>{tier.cadence}</span>}
        </div>
        {priceNote && <p className={styles.priceNote}>{priceNote}</p>}
      </div>
      {tier.description && <p className={styles.description}>{tier.description}</p>}
      <ul className={styles.features}>
        {tier.features.map((f, i) => (
          <li key={i}>
            <span className={styles.icon} aria-hidden="true">✓</span>
            <span className={styles.srOnly}>Included: </span>
            {f}
          </li>
        ))}
        {tier.notIncluded && tier.notIncluded.map((f, i) => (
          <li key={`x-${i}`} className={styles.excluded}>
            <span className={styles.icon} aria-hidden="true">✕</span>
            <span className={styles.srOnly}>Not included: </span>
            {f}
          </li>
        ))}
      </ul>
      <a className={`button button--primary button--block ${styles.cta}`} href={tier.cta.href}>
        {tier.cta.label}
      </a>
      {tier.secondary && (
        <a className={styles.secondary} href={tier.secondary.href}>
          {tier.secondary.label}
        </a>
      )}
    </div>
  );
}

export default function Pricing() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Pricing | ${siteConfig.title}`}
      description="Tasks.org pricing — free to use, or subscribe to unlock additional features and Tasks.org Cloud sync.">
      <header className={`hero hero--primary ${styles.hero}`}>
        <div className="container">
          <h1 className="hero__title">Pricing</h1>
          <p className="hero__subtitle">
            Tasks.org is free and open-source. Subscriptions support development and unlock additional features.
          </p>
        </div>
      </header>
      <main>
        <section className={styles.tiersSection}>
          <div className="container">
            <div className={styles.tiers}>
              {tiers.map((tier) => (
                <Tier key={tier.name} tier={tier} />
              ))}
            </div>
            <p className={styles.footnote}>
              Google Play subscriptions include a 7-day free trial. You can upgrade, downgrade, or cancel at any time.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
