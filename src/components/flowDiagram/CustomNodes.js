import React from 'react';
import { Handle, Position } from 'reactflow';
import { useFlowDiagramContext } from './FlowDiagramContext';
import styles from './styles.module.css';

export function DecisionNode({ id, data }) {
  const { expandedNodes, toggleNode } = useFlowDiagramContext();
  const isExpanded = expandedNodes.has(id);

  return (
    <div
      className={`${styles.nodeBase} ${styles.decisionNode}`}
      onClick={() => toggleNode(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleNode(id);
        }
      }}
      aria-expanded={isExpanded}
    >
      <Handle type="target" position={Position.Top} style={{ background: '#2542c2', width: 8, height: 8 }} />

      <div className={styles.nodeHeader}>
        <span className={`${styles.nodeTypeBadge} ${styles.decisionBadge}`}>Condição</span>
        <span className={styles.nodeExpandHint}>{isExpanded ? '▲ Fechar' : '▼ Detalhes'}</span>
      </div>

      <div className={styles.nodeLabel}>{data.label}</div>

      {isExpanded && data.details && (
        <div className={styles.nodeDetails}>
          {data.details}
        </div>
      )}

      <Handle id="sim" type="source" position={Position.Right} style={{ background: '#059669', width: 8, height: 8 }} />
      <Handle id="nao" type="source" position={Position.Bottom} style={{ background: '#dc2626', width: 8, height: 8 }} />
    </div>
  );
}

export function ResultNode({ id, data }) {
  const { expandedNodes, toggleNode } = useFlowDiagramContext();
  const isExpanded = expandedNodes.has(id);

  const statusClass =
    data.status === 'success'
      ? styles.resultNodeSuccess
      : data.status === 'info'
      ? styles.resultNodeInfo
      : styles.resultNodeWarning;

  const badgeClass =
    data.status === 'success'
      ? styles.resultBadgeSuccess
      : data.status === 'info'
      ? styles.resultBadgeInfo
      : styles.resultBadgeWarning;

  return (
    <div
      className={`${styles.nodeBase} ${statusClass}`}
      onClick={() => toggleNode(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleNode(id);
        }
      }}
      aria-expanded={isExpanded}
    >
      <Handle type="target" position={Position.Top} style={{ background: '#475569', width: 8, height: 8 }} />

      <div className={styles.nodeHeader}>
        <span className={`${styles.nodeTypeBadge} ${badgeClass}`}>Ação / Resultado</span>
        <span className={styles.nodeExpandHint}>{isExpanded ? '▲ Fechar' : '▼ Detalhes'}</span>
      </div>

      <div className={styles.nodeLabel}>{data.label}</div>

      {isExpanded && data.details && (
        <div className={styles.nodeDetails}>
          {data.details}
        </div>
      )}
    </div>
  );
}
