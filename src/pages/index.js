import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Open source',
    imageUrl: 'img/undraw_version_control_9bpv.svg',
    description: (
      <>
        Tasks is free software, licensed under the GNU GPLv3
      </>
    ),
  },
  {
    title: 'Open protocols',
    imageUrl: 'img/undraw_agreement_aajr.svg',
    description: (
      <>
        Tasks.org is compatible with Outlook, Thunderbird, Apple Reminders, and
        more!
      </>
    ),
  },
  {
    title: 'Powerful and flexible',
    imageUrl: 'img/undraw_Powerful_re_frhr.svg',
    description: (
      <>
        Filters, tags, lists, infinite-depth subtasks, manual
        sorting. Tasks works with nearly any productivity system!
      </>
    ),
  },
  {
    title: 'Customizable',
    imageUrl: 'img/undraw_personal_settings_kihd.svg',
    description: (
      <>
        Extensive options for customizing the look and feel of Tasks
      </>
    ),
  },
  {
    title: 'Multiple sync options',
    imageUrl: 'img/undraw_synchronize_ccxk.svg',
    description: (
      <>
        Synchronize with Tasks.org, Google Tasks, DAVx⁵, CalDAV, EteSync,
        or DecSync CC
      </>
    ),
  },
  {
    title: 'Private',
    imageUrl: 'img/undraw_safe_bnk7.svg',
    description: (
      <>
        Use offline, self-host, or setup EteSync for end-to-end
        encryption.  There are no ads and your data is never shared with
        anyone
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Open-source, privacy-friendly to-do lists & reminders for Android. Supports Google Tasks, DAVx⁵, CalDAV, EteSync, and DecSync CC">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
      <a href='https://play.google.com/store/apps/details?id=org.tasks&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="200"/></a>
      <a href="https://f-droid.org/packages/org.tasks"><img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get it on F-Droid" width="200"/> </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
