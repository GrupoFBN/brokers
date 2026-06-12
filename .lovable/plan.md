
# Upgrade visual FBN Brokers — tech, premium e ajustes finos

Tornar a página mais tech e premium (tipografia, fundo, animações), corrigir a imagem do hero (card cobrindo o rosto) e revisar o texto dos CTAs conforme pedido.

## 1. Hero — imagem e cards flutuantes

- Reposicionar os 4 cards flutuantes para que nenhum cubra o rosto da personagem. Mover o card superior direito para baixo/lateral, garantir margem mínima em torno da metade superior central do retrato.
- Ajustar posições: dois cards à esquerda (meio e base) e dois à direita (parte média-baixa e base), todos abaixo da linha dos olhos.
- Em telas md/lg, reduzir o tamanho dos cards e adicionar `max-w` para não invadir o rosto.
- Adicionar moldura tech: borda gradiente animada (conic), grid de pontos suave atrás da foto, glow azul pulsante atrás do retrato.

## 2. Tipografia premium

- Trocar par de fontes para algo com mais personalidade tech/editorial:
  - Display: **Space Grotesk** (títulos, com tracking negativo agressivo).
  - Body: **Inter** com features `cv11`, `ss01`, `ss03` ativadas.
- Aumentar peso e escala do H1 do hero (até `text-7xl` em desktop), com kerning apertado e gradiente azul→ciano em palavra-chave.
- Usar `font-feature-settings` global para ativar ligaduras e numerais tabulares em métricas.

## 3. Camada visual tech (toda a página)

- Substituir o fundo plano por:
  - Grid sutil animado (linhas que se acendem ao scroll).
  - Aurora blobs azul/ciano com `blur-3xl` em mix-blend.
  - Linha de "scanline" decorativa fina cruzando seções-âncora.
- Adicionar token novo `--accent-cyan` (ciano elétrico) usado apenas em detalhes (ícones ativos, underline, badges live).
- Cards globais: borda dupla com gradiente, leve glassmorphism (`backdrop-blur`), hover com tilt 3D leve e linha luminosa percorrendo a borda.

## 4. Microanimações e motion

- Hero: efeito de "typing/reveal" no H1 com mask gradient, contador animado nos números do `dl`.
- Floating cards: entrada em stagger com leve flutuação contínua (`y: [-4, 4]` loop).
- Seções: títulos com split-text fade-up, ícones com `whileInView` scale-pop, conector de "Como funciona" desenhado por `pathLength`.
- Botões: shine sweep no hover, foco com anel duplo (primary + cyan).
- Faixa "Era do junto": partículas/linhas conectando pontos (canvas leve ou SVG animado), nada pesado.

## 5. Ajustes de copy nos CTAs

Substituir todas as ocorrências de "Quero ser broker" pelas variantes pedidas:

- Header (desktop e mobile sheet): "Quero ser um broker".
- Hero (CTA secundário): "Quero me tornar um broker".
- Encerramento: "Quero me tornar um broker FBN".
- Formulário (título da seção e botão): "Quero me tornar um broker" / botão "Quero me tornar um broker".

Mantém variação natural entre "um broker" e "me tornar um broker" conforme contexto.

## 6. Arquivos afetados

- `src/styles.css` — novas fontes, token `--accent-cyan`, utilitários (`.tech-grid`, `.shine`, `.gradient-border`).
- `src/routes/__root.tsx` — trocar `<link>` de fontes para Space Grotesk + Inter.
- `src/components/brokers/Hero.tsx` — reposicionar cards, novo H1, moldura tech, motion adicional.
- `src/components/brokers/Header.tsx` — copy do botão.
- `src/components/brokers/Encerramento.tsx` — copy do botão.
- `src/components/brokers/FormularioBroker.tsx` — copy do botão e título.
- `src/components/brokers/SectionHeading.tsx` — eyebrow com ponto ciano pulsante.
- `src/components/brokers/ComoFunciona.tsx` — conector animado (`pathLength`).
- `src/components/brokers/EraDoJunto.tsx` — fundo com partículas SVG.
- (cards globais) ajustes locais em `PropostaValor`, `BeneficiosEmpresa`, `BeneficiosClientes`, `PerfisIdeais`, `Solucoes` para a nova borda/hover.

## Sem alterações

- Nenhum backend, nenhuma rota nova, sem mudança de estrutura de seções, sem mudar textos institucionais (apenas os CTAs citados).
