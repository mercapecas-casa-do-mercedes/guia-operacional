import React, { useEffect, useId, useRef } from 'react';
import { useAccordionContext } from '../AccordionContext';
import styles from './DocAccordionInner.module.css';

export default function DocAccordionInner({
  title,
  stepNumber,
  defaultOpen = false,
  id: customId,
  children,
}) {
  const autoId = useId();
  const accordionId = customId || `accordion-inner-${autoId.replace(/:/g, '')}`;
  const contentId = `${accordionId}-content`;
  const { openMap, registerAccordion, unregisterAccordion, toggleAccordion, setAccordionState } = useAccordionContext();
  const accordionRef = useRef(null);

  useEffect(() => {
    registerAccordion(accordionId, defaultOpen);
    return () => unregisterAccordion(accordionId);
  }, [accordionId, defaultOpen, registerAccordion, unregisterAccordion]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash === accordionId) {
        setAccordionState(accordionId, true);
        setTimeout(() => {
          accordionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [accordionId, setAccordionState]);

  const isOpen = !!openMap[accordionId];

  return (
    <div
      ref={accordionRef}
      id={accordionId}
      className={`${styles.accordionContainer} ${isOpen ? styles.isOpen : ''}`}
    >
      <button
        type="button"
        className={styles.accordionHeader}
        onClick={() => toggleAccordion(accordionId)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={`${accordionId}-header`}
      >
        <div className={styles.headerTitleGroup}>
          {stepNumber && <span className={styles.stepBadge}>{stepNumber}</span>}
          <span className={styles.headerTitle}>{title}</span>
        </div>
        <span className={styles.iconWrapper} aria-hidden="true">
          <svg
            className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={`${accordionId}-header`}
        className={`${styles.accordionBodyWrapper} ${isOpen ? styles.bodyExpanded : styles.bodyCollapsed}`}
      >
        <div className={styles.accordionBodyInner}>{children}</div>
      </div>
    </div>
  );
}
