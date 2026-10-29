import React, { useMemo } from 'react';
import ReactFlow, { Background, Controls as FlowControls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

import { FlowDiagramProvider, useFlowDiagramContext } from './FlowDiagramContext';
import { DecisionNode, ResultNode } from './CustomNodes';
import Controls from './Controls';
import { useFlowLayout } from './useFlowLayout';
import styles from './styles.module.css';

const nodeTypes = {
  decision: DecisionNode,
  result: ResultNode,
};

function FlowDiagramInner({ data, title }) {
  const { isOpen, toggleDiagram } = useFlowDiagramContext();
  const { nodes, edges } = useFlowLayout(data);

  return (
    <div className={styles.diagramWrapper}>
      <button
        type="button"
        className={styles.diagramHeader}
        onClick={toggleDiagram}
        aria-expanded={isOpen}
      >
        <div className={styles.headerLeft}>
          <span className={styles.headerBadge}>Fluxograma Interativo</span>
          <h3 className={styles.headerTitle}>{title || data.title || 'Árvore de Decisão'}</h3>
        </div>
        <svg
          className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div className={`${styles.flowContainer} ${isOpen ? styles.isOpen : ''}`}>
        <div className={styles.flowInner}>
          <Controls />
          <div className={styles.canvasContainer}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.2 }}
              minZoom={0.5}
              maxZoom={1.5}
              proOptions={{ hideAttribution: true }}
            >
              <Background color="#cbd5e0" gap={16} size={1} />
              <FlowControls position="bottom-right" />
              <MiniMap
                nodeStrokeColor={(n) => (n.type === 'decision' ? '#2542c2' : '#059669')}
                nodeColor={(n) => (n.type === 'decision' ? '#e0e7ff' : '#dcfce7')}
                maskColor="rgba(241, 245, 249, 0.7)"
              />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FlowDiagram({ data, defaultOpen = true, title }) {
  const nodeIds = useMemo(() => {
    return Array.isArray(data?.nodes) ? data.nodes.map((n) => n.id) : [];
  }, [data]);

  return (
    <FlowDiagramProvider nodeIds={nodeIds} defaultOpen={defaultOpen}>
      <FlowDiagramInner data={data} title={title} />
    </FlowDiagramProvider>
  );
}
