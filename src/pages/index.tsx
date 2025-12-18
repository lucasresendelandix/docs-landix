import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Heading as="h1" className="hero__title">
            Bem-vindo à Landix Sistemas
          </Heading>
        </motion.div>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Potencialize os resultados da sua empresa com automação de vendas. Tenha na palma da mão a solução ideal para performar mais na gestão de equipes de vendas e trade marketing.
        </motion.p>
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Conheça Nossa Base de Conhecimento
          </Link>
        </motion.div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Landix Sistemas - Automação de Vendas"
      description="Potencialize os resultados da sua empresa com soluções de automação de vendas da Landix. Simplifique a gestão de vendas com softwares integrados aos principais ERPs do mercado.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
