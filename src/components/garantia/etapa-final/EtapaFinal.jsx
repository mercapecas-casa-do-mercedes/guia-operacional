import React from 'react';
import DocAccordion from '@site/src/components/DocAccordion/DocAccordion';

export default function EtapaFinal() {
  return (
    <>
      <p>
        Após a conclusão das tratativas do Passo 3 em qualquer perfil, todos os
        processos de garantia seguem para a tramitação junto ao fornecedor:
      </p>

      <DocAccordion title="4. Emissão de NFe para Envio ao Fornecedor" stepNumber="04" id="gar-etapa-4">
        <ul>
          <li><strong>Responsável</strong>: Setor de Garantia.</li>
          <li><strong>Procedimento</strong>: O setor de garantia vai emitir uma nova NFe para o fornecedor para encaminhar a peça em garantia.</li>
        </ul>
      </DocAccordion>

      <DocAccordion title="5. Análise e Resposta do Fornecedor" stepNumber="05" id="gar-etapa-5">
        <ul>
          <li><strong>Responsável</strong>: Fornecedor.</li>
          <li><strong>Procedimento</strong>: Se o fornecedor aprovar: ele vai fornecer um crédito, ou uma nova peça.</li>
        </ul>
      </DocAccordion>

      <DocAccordion title="6. Emissão da Devolução de Simples Remessa e Entrega da Peça" stepNumber="06" id="gar-etapa-6">
        <ul>
          <li><strong>Responsável</strong>: Atendimento.</li>
          <li><strong>Procedimento</strong>: Nosso atendimento deverá emitir uma devolução da simples remessa ao cliente junto com uma peça nova.</li>
          <li><strong>Observação de Exceção</strong>: Caso o cliente já esteja com uma nova peça e não queira receber a nova peça que veio do fornecedor, entregamos assim mesmo a peça ao cliente, e seguiremos com o processo de devolução para a peça extra que está nas mãos do cliente.</li>
        </ul>
      </DocAccordion>
    </>
  );
}
