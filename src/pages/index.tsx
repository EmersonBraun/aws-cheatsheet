import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { type ReactElement } from 'react';

import { EbookCta } from '../components/EbookCta';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Your ultimate AWS certification preparation guide with structured service insights
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A comprehensive AWS certification preparation guide with structured service insights">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center padding-horiz--md">
                  <h2>What is this project?</h2>
                  <p style={{ textAlign: 'justify' }}>
                    This AWS Cheatsheet is your comprehensive companion for AWS certification preparation.
                    Each AWS service is presented in a structured format with three key sections: Use Cases,
                    Key Points, and Comparisons. This organization helps you quickly understand when to use
                    each service, what's important to know for the exams, and how services relate to each other.
                  </p>

                  <div className={styles.buttons} style={{ marginBottom: '5rem' }}>
                    <Link
                      className="button button--primary button--lg"
                      to="/docs/getting-started">
                      Explore Services ✨
                    </Link>
                  </div>

                  <h2>Help Improve This Guide</h2>
                  <p style={{ textAlign: 'justify' }}>
                    This project thrives on community contributions. If you're preparing for AWS certifications
                    or working with AWS services, your insights are valuable! You can help by:
                  </p>
                  <ul>
                    <li>Adding new use cases based on your experience</li>
                    <li>Updating key points with the latest AWS features</li>
                    <li>Contributing to service comparisons</li>
                    <li>Fixing outdated information</li>
                    <li>Improving explanations and examples</li>
                  </ul>
                  <p style={{ textAlign: 'justify' }}>
                    Your contributions help keep this guide current and valuable for everyone in the AWS
                    community. Check out our contribution guidelines to get started!
                  </p>

                  <div className={styles.buttons}>
                    <Link
                      className="button button--secondary button--lg"
                      to="/docs/getting-started/contributing">
                      Contribute to the Project 🤝
                    </Link>
                  </div>

                  <EbookCta />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}