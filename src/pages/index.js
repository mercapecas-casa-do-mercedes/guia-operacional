import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Central de Documentação Interna"
      description="Manual de Processos Operacionais, Garantia e Devolução da Mercapeças"
    >
      <header className={styles.heroHeader}>
        <div className="container">
          <div className={styles.heroBadge}>DOCUMENTAÇÃO INTERNA OFICIAL</div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link className={`${styles.btnPrimary}`} to="/docs">
              🚀 Acessar Documentação Completa
            </Link>
            <Link className={`${styles.btnSecondary}`} to="/docs/canais-de-comunicacao">
              📞 Canais de Contato
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className="container">
          <h2 className={styles.sectionHeader}>Acesso Rápido aos Procedimentos Operacionais</h2>
          
          <div className={styles.cardGrid}>
            <Link to="/docs/garantia" className={styles.card}>
              <div className={styles.cardIcon}>🛡️</div>
              <h3 className={styles.cardTitle}>Garantia</h3>
              <p className={styles.cardText}>
                Fluxo operacional completo para acionamento de garantia: solicitação, recebimento de peça, emissão de NFe e envio ao fornecedor (Pessoa Física e Jurídica).
              </p>
              <span className={styles.cardLink}>Ver procedimentos →</span>
            </Link>

            <Link to="/docs/devolucao" className={styles.card}>
              <div className={styles.cardIcon}>🔄</div>
              <h3 className={styles.cardTitle}>Devolução</h3>
              <p className={styles.cardText}>
                Instruções passo a passo para processos de devolução, autorização de vendedor e cliente, espelho de NFe e geração de crédito no sistema.
              </p>
              <span className={styles.cardLink}>Ver procedimentos →</span>
            </Link>

            <Link to="/docs/glossario" className={styles.card}>
              <div className={styles.cardIcon}>📖</div>
              <h3 className={styles.cardTitle}>Glossário Operacional</h3>
              <p className={styles.cardText}>
                Dicionário A-Z com as definições oficiais dos termos do sistema (NFe, Espelho, Transmitir, Requisitos para acolhimento, etc.).
              </p>
              <span className={styles.cardLink}>Consultar termos →</span>
            </Link>

            <Link to="/docs/canais-de-comunicacao" className={styles.card}>
              <div className={styles.cardIcon}>📞</div>
              <h3 className={styles.cardTitle}>Canais de Comunicação</h3>
              <p className={styles.cardText}>
                Números oficiais dos canais diretos da empresa: Vendas, Atendimento Geral e Setor de Garantia.
              </p>
              <span className={styles.cardLink}>Ver contatos →</span>
            </Link>
          </div>

          <div className={styles.infoBanner}>
            <div className={styles.infoBannerIcon}>💡</div>
            <div>
              <h4 className={styles.infoBannerTitle}>Como navegar com eficiência</h4>
              <p className={styles.infoBannerText}>
                Utilize a barra de pesquisa na parte superior para encontrar termos específicos como <strong>"NFe"</strong>, <strong>"Espelho"</strong> ou <strong>"Autorização"</strong>.
                Dentro das páginas, utilize os botões <code>[ Expandir todos ]</code> e <code>[ Recolher todos ]</code> para ajustar o nível de detalhamento visual desejado.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
