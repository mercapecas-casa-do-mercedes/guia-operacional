import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const FlowDiagramContext = createContext({
  expandedNodes: new Set(),
  toggleNode: () => {},
  expandAll: () => {},
  collapseAll: () => {},
  allExpanded: false,
  allCollapsed: true,
  isOpen: true,
  toggleDiagram: () => {},
});

export function FlowDiagramProvider({ children, nodeIds = [], defaultOpen = true }) {
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleNode = useCallback((nodeId) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setExpandedNodes(new Set(nodeIds));
  }, [nodeIds]);

  const collapseAll = useCallback(() => {
    setExpandedNodes(new Set());
  }, []);

  const toggleDiagram = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const allExpanded = nodeIds.length > 0 && nodeIds.every((id) => expandedNodes.has(id));
  const allCollapsed = expandedNodes.size === 0;

  const value = useMemo(
    () => ({
      expandedNodes,
      toggleNode,
      expandAll,
      collapseAll,
      allExpanded,
      allCollapsed,
      isOpen,
      toggleDiagram,
    }),
    [expandedNodes, toggleNode, expandAll, collapseAll, allExpanded, allCollapsed, isOpen, toggleDiagram]
  );

  return (
    <FlowDiagramContext.Provider value={value}>
      {children}
    </FlowDiagramContext.Provider>
  );
}

export function useFlowDiagramContext() {
  const context = useContext(FlowDiagramContext);
  if (!context) {
    throw new Error('useFlowDiagramContext deve ser utilizado dentro de um FlowDiagramProvider');
  }
  return context;
}
