import React, { useState } from 'react';
import { UNC_ARQUIVO, UNC_PASTA, ARQUIVO_NOME } from '../../constants/tabelaIcms';
import styles from './TabelaIcmsButton.module.css';

export default function TabelaIcmsButton() {
  const [copiado, setCopiado] = useState(null); // null | 'pasta' | 'arquivo'

  const copiar = async (texto, alvo) => {
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      // Contexto não seguro (HTTP interno) bloqueia a API. Fallback:
      window.prompt('Copie o caminho abaixo:', texto);
    }
    setCopiado(alvo);
    setTimeout(() => setCopiado(null), 2500);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.buttonPrimary}
          onClick={() => copiar(UNC_ARQUIVO, 'arquivo')}
        >
          {copiado === 'arquivo'
            ? '✅ Caminho do arquivo copiado!'
            : '📋 Copiar caminho do arquivo'}
        </button>

        <button
          type="button"
          className={styles.buttonSecondary}
          onClick={() => copiar(UNC_PASTA, 'pasta')}
        >
          {copiado === 'pasta'
            ? '✅ Caminho da pasta copiado!'
            : '📋 Copiar caminho da pasta'}
        </button>
      </div>

      <div className={styles.instructions}>
        <p className={styles.step}>
          <strong>1.</strong> Clique em <em>“Copiar caminho do arquivo”</em>.
        </p>
        <p className={styles.step}>
          <strong>2.</strong> Pressione <kbd>Win</kbd> + <kbd>R</kbd>, cole o
          caminho e pressione <kbd>Enter</kbd> — ou cole diretamente na{' '}
          <strong>barra de endereço do Explorador de Arquivos</strong> do Windows
          (não no campo de URL do navegador).
        </p>
        <p className={styles.step}>
          <strong>3.</strong> O arquivo será aberto automaticamente:
          <code className={styles.filename}>{ARQUIVO_NOME}</code>
        </p>
        <p className={styles.pathHint}>
          Caminho na rede: <code>{UNC_ARQUIVO}</code>
        </p>
      </div>
    </div>
  );
}
