# Central de Documentação Interna — Mercapeças

Sistema completo de **documentação interna da empresa utilizando Docusaurus**, desenvolvido para consulta rápida e gerenciamento de procedimentos operacionais de **Garantia** e **Devolução**.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: Docusaurus 3+
- **Linguagem**: JavaScript / React / MDX
- **Estilização**: Vanilla CSS com variáveis customizadas para o Design System Mercapeças (Azul Marinho `#000B58`, Vermelho `#E50914`, Branco `#FFFFFF`)
- **Busca**: Plugin de Busca Local Offline (`@easyops-cn/docusaurus-search-local`)
- **Componentes Customizados**: `DocAccordion`, `ExpandAllControls`, `ImageLightbox`

---

## 🚀 Instalação e Execução

### 1. Pré-requisitos
- **Node.js** v18+ instalado.

### 2. Instalar Dependências
No diretório do projeto, execute:
```bash
npm install
```

### 3. Executar em Modo de Desenvolvimento
Para iniciar a documentação localmente com recarregamento em tempo real:
```bash
npm start
```
Acesse no navegador: `http://localhost:3000`

---

## 📦 Build para Publicação em Servidor Interno

Para gerar os arquivos estáticos de produção prontos para hospedagem interna:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta **`build/`**.

### Servir o Build Localmente para Validação:
```bash
npm run serve
```

---

## 📁 Estrutura de Arquivos e Pastas

```text
/
├── docs/                        # Arquivos de documentação em Markdown / MDX
│   ├── index.md                 # Visão geral da central
│   ├── garantia/                # Manuais de Garantia
│   │   ├── index.md
│   │   ├── pessoa-fisica.md
│   │   └── pessoa-juridica/
│   │       ├── consumidor-final.md
│   │       └── revendedor.md
│   ├── devolucao/               # Manuais de Devolução
│   │   ├── index.md
│   │   ├── pessoa-fisica.md
│   │   └── pessoa-juridica/
│   │       ├── consumidor-final.md
│   │       └── revendedor.md
│   ├── glossario/               # Glossário A-Z
│   └── canais-de-comunicacao/   # Canais oficiais de atendimento
│
├── src/
│   ├── components/
│   │   ├── DocAccordion/        # Componentes e contexto de Accordions
│   │   └── ImageLightbox/       # Modal ampliado de imagens
│   ├── css/
│   │   └── custom.css           # Variáveis visuais e temas
│   ├── pages/                   # Página inicial da central
│   └── theme/                   # Sobrescritas do tema Docusaurus (Swizzles)
│
├── static/
│   └── img/                     # Imagens estáticas (Logos, Screenshots)
│
├── sidebars.js                  # Configuração da barra lateral
├── docusaurus.config.js         # Configurações gerais da aplicação
└── package.json
```

---

## 📝 Guia de Manutenção e Edição

### 1. Onde ficam os documentos?
Todos os documentos pertencem à pasta **`docs/`**. Cada arquivo `.md` representa uma página da documentação.

### 2. Onde ficam as imagens?
As imagens devem ser salvas na pasta **`static/img/`** (ex: `static/img/garantia/tela-solicitacao.png`).

### 3. Como adicionar uma nova página?
1. Crie um novo arquivo `.md` dentro de `docs/` (ex: `docs/garantia/nova-etapa.md`).
2. Adicione o cabeçalho Front Matter no início do arquivo:
   ```markdown
   ---
   id: nova-etapa
   title: Título da Nova Etapa
   sidebar_label: Rótulo da Sidebar
   ---
   ```
3. Adicione a referência da página no arquivo **`sidebars.js`**.

### 4. Como alterar a Sidebar?
Abra o arquivo `sidebars.js` e adicione o `id` da página dentro do grupo correspondente:
```javascript
{
  type: 'doc',
  id: 'garantia/nova-etapa',
  label: 'Nova Etapa',
}
```

### 5. Como utilizar os Accordions (Seções Expansíveis)?
Nas páginas `.md` ou `.mdx`, utilize o componente `<DocAccordion>`:

```markdown
<ExpandAllControls />

<DocAccordion title="1. Solicitar peça" stepNumber="01" id="etapa-solicitar" defaultOpen={true}>

Descrição detalhada do procedimento aqui...

</DocAccordion>

<DocAccordion title="2. Emitir NFe" stepNumber="02" id="etapa-emitir-nfe">

Conteúdo da etapa 2...

</DocAccordion>
```

- **`title`**: Título visível do cabeçalho do accordion.
- **`stepNumber`**: Número ou ícone da etapa (ex: `"01"`, `"3.1"`, `"A"`).
- **`id`**: Identificador único (permite que a busca abra a seção automaticamente ao ser clicada).
- **`defaultOpen`**: `true` se quiser que a seção comece aberta por padrão.
- **`<ExpandAllControls />`**: Adicione no topo da página para exibir os botões `[ Expandir todos ]` e `[ Recolher todos ]`.

### 6. Como adicionar e ampliar uma imagem?
Para permitir que uma imagem seja ampliada ao clicar, utilize o componente `<ImageLightbox>`:

```markdown
<ImageLightbox 
  src="/img/garantia/tela-solicitacao.png" 
  alt="Tela de solicitação da peça"
  caption="Figura 1: Tela de inserção do código da peça no sistema." 
/>
```

---

## 🔒 Hospedagem Interna e Privacidade

Esta aplicação não utiliza analytics ou serviços externos. Os arquivos gerados por `npm run build` podem ser servidos diretamente por qualquer servidor web interno (Nginx, IIS, Apache ou servidor de arquivos estáticos).
