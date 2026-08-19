import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const AccordionContext = createContext({
  openMap: {},
  registerAccordion: () => {},
  unregisterAccordion: () => {},
  toggleAccordion: () => {},
  setAccordionState: () => {},
  expandAll: () => {},
  collapseAll: () => {},
  allExpanded: false,
  allCollapsed: true,
  hasAccordions: false,
});

export function AccordionProvider({ children }) {
  const [registeredIds, setRegisteredIds] = useState(new Set());
  const [openMap, setOpenMap] = useState({});

  const registerAccordion = useCallback((id, defaultOpen = false) => {
    setRegisteredIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setOpenMap((prev) => {
      if (prev[id] === undefined) {
        return { ...prev, [id]: defaultOpen };
      }
      return prev;
    });
  }, []);

  const unregisterAccordion = useCallback((id) => {
    setRegisteredIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const toggleAccordion = useCallback((id) => {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const setAccordionState = useCallback((id, isOpen) => {
    setOpenMap((prev) => ({ ...prev, [id]: isOpen }));
  }, []);

  const expandAll = useCallback(() => {
    setOpenMap((prev) => {
      const updated = { ...prev };
      registeredIds.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });
  }, [registeredIds]);

  const collapseAll = useCallback(() => {
    setOpenMap((prev) => {
      const updated = { ...prev };
      registeredIds.forEach((id) => {
        updated[id] = false;
      });
      return updated;
    });
  }, [registeredIds]);

  const idsArray = Array.from(registeredIds);
  const hasAccordions = idsArray.length > 0;
  const allExpanded = hasAccordions && idsArray.every((id) => !!openMap[id]);
  const allCollapsed = hasAccordions && idsArray.every((id) => !openMap[id]);

  const value = useMemo(
    () => ({
      openMap,
      registerAccordion,
      unregisterAccordion,
      toggleAccordion,
      setAccordionState,
      expandAll,
      collapseAll,
      allExpanded,
      allCollapsed,
      hasAccordions,
    }),
    [openMap, registerAccordion, unregisterAccordion, toggleAccordion, setAccordionState, expandAll, collapseAll, allExpanded, allCollapsed, hasAccordions]
  );

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  return useContext(AccordionContext);
}
