// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  garantiaSidebar: [
    {
      type: 'category',
      label: '🛡️ Garantia',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'garantia/index',
          label: 'Visão Geral de Garantia',
        },
        {
          type: 'doc',
          id: 'garantia/pessoa-fisica',
          label: 'Pessoa Física',
        },
        {
          type: 'category',
          label: 'Pessoa Jurídica',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'garantia/pessoa-juridica/consumidor-final',
              label: 'Consumidor Final',
            },
            {
              type: 'doc',
              id: 'garantia/pessoa-juridica/revendedor',
              label: 'Revendedor',
            },
          ],
        },
      ],
    },
  ],
  devolucaoSidebar: [
    {
      type: 'category',
      label: '🔄 Devolução',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'devolucao/index',
          label: 'Visão Geral de Devolução',
        },
        {
          type: 'doc',
          id: 'devolucao/pessoa-fisica',
          label: 'Pessoa Física',
        },
        {
          type: 'category',
          label: 'Pessoa Jurídica',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'devolucao/pessoa-juridica/consumidor-final',
              label: 'Consumidor Final',
            },
            {
              type: 'doc',
              id: 'devolucao/pessoa-juridica/revendedor',
              label: 'Revendedor',
            },
          ],
        },
      ],
    },
  ],
  glossarioSidebar: [
    {
      type: 'doc',
      id: 'glossario/index',
      label: '📖 Glossário (A-Z)',
    },
  ],
  canaisSidebar: [
    {
      type: 'doc',
      id: 'canais-de-comunicacao/index',
      label: '📞 Canais de Comunicação',
    },
  ],
};

export default sidebars;
