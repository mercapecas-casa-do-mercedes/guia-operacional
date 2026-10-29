import React from 'react';
import { useAccordionContext } from './AccordionContext';
import styles from './DocAccordion.module.css';

export default function ExpandAllControls() {
  const { hasAccordions, expandAll, collapseAll, allExpanded, allCollapsed } = useAccordionContext();

  if (!hasAccordions) {
    return null;
  }

  return (
    <div className={styles.controlsBar}>
      <span className={styles.controlsLabel}>Controles de Leitura:</span>
      <div className={styles.controlsButtons}>
        <button
          type="button"
          onClick={expandAll}
          disabled={allExpanded}
          className={`${styles.controlBtn} ${styles.expandBtn}`}
          title="Expandir todas as etapas desta página"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
          </svg>
          Expandir todos
        </button>

        <button
          type="button"
          onClick={collapseAll}
          disabled={allCollapsed}
          className={`${styles.controlBtn} ${styles.collapseBtn}`}
          title="Recolher todas as etapas desta página"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 11 12 6 17 11" />
            <polyline points="7 18 12 13 17 18" />
          </svg>
          Recolher todos
        </button>
      </div>
    </div>
  );
}
