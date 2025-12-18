import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Agilidade para Força de Vendas',
    image: '/img/icone-cronometro.png',
    description: (
      <>
        Agilize e simplifique processos, entregando melhores resultados em menos tempo com a mesma equipe.
      </>
    ),
  },
  {
    title: 'Lucratividade',
    image: '/img/icone-grafico.png',
    description: (
      <>
        Aumente os lucros através de processos simples, mapeados e estruturados, com custos reduzidos e desperdícios eliminados.
      </>
    ),
  },
  {
    title: 'Gestão de Vendas',
    image: '/img/icone-prancheta.png',
    description: (
      <>
        Tenha uma gestão organizada, sem imprevistos, totalmente integrada e com análise de desempenho de toda a equipe.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <motion.div
      className={clsx('col col--4')}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
