export const stFlowData = {
  title: 'Fluxo de Emissão de Guia de Recolhimento ST',
  nodes: [
    {
      id: 'conv',
      type: 'decision',
      data: {
        label: 'Convênio entre os estados?',
        details: 'Verifique se existe convênio ou protocolo ICMS formal entre o estado de origem da mercadoria e o estado de destino.',
        yesTarget: 'dest',
        noTarget: 'resp1',
      },
    },
    {
      id: 'resp1',
      type: 'result',
      data: {
        label: 'Nossa responsabilidade (Recolhimento ICMS/ST)',
        details: 'Não havendo convênio, a responsabilidade pela retenção e recolhimento antecipado do ICMS/ST é da Mercapeças.',
        status: 'warning',
      },
    },
    {
      id: 'dest',
      type: 'decision',
      data: {
        label: 'Houve destaque do imposto?',
        details: 'Verifique na NF-e se a Base de Cálculo e o Valor do ICMS-ST foram devidamente calculados e destacados pelo fornecedor/remetente.',
        yesTarget: 'subs',
        noTarget: 'resp2',
      },
    },
    {
      id: 'resp2',
      type: 'result',
      data: {
        label: 'Nossa responsabilidade (Recolhimento ICMS/ST)',
        details: 'Embora haja convênio, a ausência de destaque na nota transfere a obrigação do recolhimento para a nossa entrada.',
        status: 'warning',
      },
    },
    {
      id: 'subs',
      type: 'decision',
      data: {
        label: 'Remetente é Substituto Tributário?',
        details: 'Verifique se o remetente possui Inscrição Estadual especial como Substituto Tributário (IE de Substituto) no estado de destino.',
        yesTarget: 'sem_guia',
        noTarget: 'copia',
      },
    },
    {
      id: 'copia',
      type: 'result',
      data: {
        label: 'Cópia (Solicitamos guia paga)',
        details: 'Como o remetente não é substituto homologado, ele deve emitir a GNRE/guia estadual avulsa. Solicitamos cópia autenticada da guia quitada antes da circulação.',
        status: 'info',
      },
    },
    {
      id: 'sem_guia',
      type: 'result',
      data: {
        label: 'Sem guia (Apuração mensal do Substituto)',
        details: 'O remetente credenciado recolhe o ST por apuração periódica mensal. A mercadoria transita livremente sem necessidade de guia individual anexa.',
        status: 'success',
      },
    },
  ],
};
