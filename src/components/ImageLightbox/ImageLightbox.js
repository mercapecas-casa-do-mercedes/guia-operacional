import React, { useState, useEffect } from 'react';
import styles from './ImageLightbox.module.css';

export default function ImageLightbox({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!src) return null;

  return (
    <figure className={styles.figureContainer}>
      <div
        className={styles.imageWrapper}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label={`Ampliar imagem: ${alt || 'Screenshot'}`}
      >
        <img src={src} alt={alt || 'Screenshot do procedimento'} className={styles.thumbnail} />
        <div className={styles.zoomBadge}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          Ampliar
        </div>
      </div>
      {caption && <figcaption className={styles.captionText}>{caption}</figcaption>}

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Fechar visualização"
            >
              ✕
            </button>
            <img src={src} alt={alt || 'Visualização ampliada'} className={styles.fullImage} />
            {caption && <div className={styles.modalCaption}>{caption}</div>}
          </div>
        </div>
      )}
    </figure>
  );
}
