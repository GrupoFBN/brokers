
# FBN Brokers — Landing Page

Construir o front-end completo da home institucional do FBN Brokers, seguindo fielmente o briefing (todas as 13 seções), com identidade visual da FBN (azul corporativo + cinza, branco), tipografia premium e layout responsivo mobile-first. Sem backend, sem integrações, apenas UI e estados simulados.

## Identidade visual

- Paleta baseada na marca FBN: azul institucional `#1e478f` (primário), azul escuro `#0f2a5c` (profundidade), cinza claro neutro, branco e off-white para fundos.
- Tipografia: par "outfit-figtree" (display moderno corporativo) carregada via `<link>` no `__root.tsx` e registrada em `@theme` de `src/styles.css`.
- Tokens semânticos definidos em `src/styles.css` (primary, accent, muted, surface, gradient-primary, shadow-elegant). Nenhuma cor hardcoded nos componentes.
- Microanimações suaves com `framer-motion` (fade/slide-in on scroll, hover sutil em cards e botões).
- Ícones via `lucide-react`.

## Assets

- Logos enviados pelo usuário registrados como Lovable Assets (azul e branco) e usados no header/encerramento.
- Imagem hero gerada com `imagegen` em qualidade `standard`: composição corporativa de parceria/consultoria usando a mulher da foto enviada como referência de personagem principal (camisa branca com logo FBN, sorrindo, ambiente clean iluminado, elementos sutis de conexão/parceria ao fundo).

## Estrutura de arquivos

```text
src/
  assets/
    logo-fbn-azul.png.asset.json
    logo-fbn-branco.png.asset.json
    hero-brokers.jpg            (gerado)
  components/brokers/
    Header.tsx
    Hero.tsx
    SobreBrokers.tsx           (seção 3)
    PropostaValor.tsx          (seção 4, pilares em cards)
    ComoFunciona.tsx           (seção 5, 4 passos com linha de conexão)
    BeneficiosEmpresa.tsx      (seção 6)
    BeneficiosClientes.tsx     (seção 7)
    PerfisIdeais.tsx           (seção 8, 7 cards com ícones)
    EraDoJunto.tsx             (seção 9, bloco institucional com CTA)
    Solucoes.tsx               (seção 10)
    FormularioBroker.tsx       (seção 11)
    FAQ.tsx                    (seção 12, accordion shadcn)
    Encerramento.tsx           (seção 13)
    SectionHeading.tsx         (helper visual reutilizável)
  routes/
    index.tsx                  (compõe todas as seções e meta tags)
  styles.css                   (tokens FBN + fontes)
```

## Páginas / Rotas

Tudo na rota `/` (single landing page com âncoras `#sobre`, `#como-funciona`, `#perfis`, `#beneficios`, `#contato`). Atualizar `head()` em `index.tsx` com title "FBN Brokers — Relevância para sua empresa, consultoria para seus clientes" + meta description, OG e Twitter.

## Header

Sticky com blur, logo FBN azul + label "Brokers", nav âncoras (O que é, Como funciona, Perfis ideais, Benefícios), botão primário "Quero ser broker" levando a `#contato`. Menu mobile (Sheet do shadcn) com mesmos links.

## Hero

- Layout split: coluna esquerda com tagline curta "FBN Brokers", H1 grande, subtítulo "Relevância para sua empresa, consultoria para seus clientes.", parágrafo de apoio, dois CTAs (primário "Quero ser broker", secundário outline "Conhecer o programa").
- Coluna direita: imagem hero gerada, com 4 cards flutuantes (Parcerias estratégicas, Atendimento consultivo, Mais valor para seus clientes, Crescimento conjunto), ícones lucide, leve glow azul.
- Fundo com gradiente sutil e malha geométrica decorativa.

## Demais seções

Implementadas conforme especificação literal do briefing (títulos, textos e itens copiados sem alteração), cada uma com:

- `SectionHeading` (eyebrow + título + subtítulo opcional).
- Grids responsivos (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4`) com cards elegantes (border sutil, hover lift, ícone em badge colorida).
- "Como funciona" em 4 passos numerados com linha conectora horizontal no desktop, vertical no mobile.
- "Era do junto" como faixa full-bleed com fundo azul institucional + textura, texto claro e CTA.

## Formulário (apenas UI)

- `react-hook-form` + `zod` + componentes shadcn (Input, Textarea, Select, Checkbox, Button).
- Campos exatamente conforme briefing, com `Select` no campo "Tamanho da base de clientes" e `Input` aberto em "Segmento". Checkbox LGPD obrigatório.
- Estados: `idle | submitting | success | error`. Em `onSubmit` válido: setTimeout 1.2s → success com mensagem "Solicitação enviada com sucesso. Em breve a equipe FBN entrará em contato." (toast + banner inline verde sutil). Em validação falha: banner "Revise os campos obrigatórios antes de enviar."
- Botão "Marcar uma reunião" com loading spinner.

## FAQ

Accordion shadcn com as 6 perguntas/respostas do briefing.

## Encerramento

Faixa final em azul institucional com logo branca FBN, "FBN Brokers", frase final e botão "Quero ser broker FBN". Sem rodapé tradicional.

## Detalhes técnicos

- Sem backend, sem Lovable Cloud, sem rotas extras.
- Instalar `framer-motion` (animações). `react-hook-form`, `zod`, `@hookform/resolvers` e componentes shadcn (button, input, textarea, select, checkbox, accordion, sheet, sonner) — adicionar os que ainda não existirem.
- Smooth scroll via `scroll-behavior: smooth` em `html` + `scroll-margin-top` nas seções para compensar header sticky.
- Acessibilidade: labels visíveis, `aria-*` em accordion, contraste AA, focus rings com cor primária.
- Comunicação natural em PT-BR, sem travessões, conforme regra do briefing.
