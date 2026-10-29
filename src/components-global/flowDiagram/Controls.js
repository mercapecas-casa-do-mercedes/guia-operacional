import React from 'react';
import { useFlowDiagramContext } from './FlowDiagramContext';
import styles from './styles.module.css';

export default function Controls() {
  const { expandAll, collapseAll, allExpanded, allCollapsed } = useFlowDiagramContext();

  return (
    <div className={styles.controlsBar}>
      <div className={styles.controlsHelp}>
        <span>💡 Clique nos nós para alternar a explicação detalhada.</span>
      </div>

      <div className={styles.controlsButtons}>
        <button
          type="button"
          onClick={expandAll}
          disabled={allExpanded}
          className={styles.controlBtn}
          title="Expandir detalhes de todos os nós"
        >
          Expandir todos
        </button>
        <button
          type="button"
          onClick={collapseAll}
          disabled={allCollapsed}
          className={styles.controlBtn}
          title="Recolher detalhes de todos os nós"
        >
          Recolher todos
        </button>
      </div>
    </div>
  );
}
