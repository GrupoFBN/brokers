
# Otimização mobile da página FBN Brokers

Tornar a experiência mobile tão polida quanto o desktop, com destaque para exibir os cards flutuantes da hero também em telas pequenas.

## 1. Hero — cards flutuantes no mobile

Hoje os 4 cards (`Parcerias`, `Mais valor`, `Atendimento`, `Crescimento`) usam `hidden md:flex`, então somem no mobile.

- Remover `hidden md:flex` → cards passam a aparecer em todas as larguras.
- Criar duas variantes de posição por card: `posMobile` (compacta, dentro da moldura da foto) e `posDesktop` (atual, com leve overflow lateral).
- No mobile:
  - Reduzir cards para versão compacta: ícone 32px, label `text-[11px]`, esconder o `sub` (`hidden xs:flex`) para evitar quebra.
  - Mostrar apenas 2 cards "principais" sobrepostos à imagem (Parcerias no topo-esquerda, Crescimento na base-direita) para não poluir; os outros 2 reaparecem a partir de `sm:`.
  - Usar `max-w-[44%]` e `backdrop-blur-md` reforçado para legibilidade sobre a foto.
- Garantir que nenhum card cubra o rosto: posicionar apenas nas laterais inferiores da foto no mobile.
- Reduzir a altura do badge "Live" e da moldura conic no mobile (menos blur, menos `-inset`).

## 2. Hero — tipografia e espaçamento mobile

- H1: reduzir escala mobile para `text-4xl` (hoje `text-5xl` quebra feio em 360px) e manter `sm:text-6xl lg:text-7xl`.
- Parágrafo: `text-[15px]` no mobile.
- Botões: empilhar com `w-full` no mobile, altura `h-12`, ícone alinhado.
- `dl` de métricas: virar 3 colunas compactas com `text-[11px]` / `text-xs`.
- Reduzir `pt-28` → `pt-24` no mobile para encostar mais no header.

## 3. Header mobile

- Garantir `Sheet` lateral com itens grandes (`text-base`, `py-3`), CTA "Quero ser um broker" full-width fixo no rodapé do sheet.
- Logo um pouco menor no mobile, botão hambúrguer com área de toque mínima 44px.
- Header `h-14` no mobile (hoje provavelmente `h-16/20`).

## 4. Seções gerais — refinos mobile

- Padding vertical: `py-20 sm:py-28` → `py-14 sm:py-20 lg:py-28` em todas as seções (`SobreBrokers`, `PropostaValor`, `ComoFunciona`, `BeneficiosEmpresa/Clientes`, `PerfisIdeais`, `EraDoJunto`, `Solucoes`, `FAQ`, `Encerramento`).
- `SectionHeading`: título `text-3xl sm:text-4xl lg:text-5xl`, subtítulo `text-[15px]`.
- Grids: forçar `grid-cols-1` no mobile com `gap-4`, e só promover a `sm:grid-cols-2` quando fizer sentido.
- `PerfisIdeais` (7 cards): no mobile virar carrossel horizontal com `snap-x` + `overflow-x-auto` + `flex` (cards `min-w-[78%]`), evitando lista enorme; a partir de `sm:` volta ao grid atual.
- `ComoFunciona`: esconder o SVG conector animado no mobile (visual quebra em vertical) e mostrar uma linha vertical pontilhada simples entre os passos.
- `Solucoes`: cards full-width no mobile, ícones e títulos com hierarquia clara.
- `EraDoJunto`: reduzir tamanho do título e remover partículas SVG no mobile (performance + ruído).
- `FormularioBroker`: campos `h-12`, labels `text-sm`, `Select` com `text-base` para evitar zoom no iOS, botão full-width.
- `FAQ`: itens com `py-4`, ícone chevron 20px.
- `Encerramento`: CTA empilhado e centralizado.

## 5. Performance e toque mobile

- Adicionar `loading="eager"` + `fetchpriority="high"` na imagem do hero, e `decoding="async"` nas demais.
- Trocar `animate-spin-slow` da moldura por uma versão mais leve (ou desativar abaixo de `sm:`) — economiza GPU em mobile.
- Garantir `tap-highlight-color: transparent` e `min-h-[44px]` nos elementos clicáveis principais.
- Revisar `overflow-x` global: o body precisa de `overflow-x-hidden` para conter os cards e blobs do hero, que hoje extrapolam viewport em mobile.

## 6. Arquivos afetados

- `src/components/brokers/Hero.tsx` — cards mobile, tipografia, espaçamentos, moldura.
- `src/components/brokers/Header.tsx` — sheet e alturas mobile.
- `src/components/brokers/SectionHeading.tsx` — escala tipográfica.
- `src/components/brokers/PerfisIdeais.tsx` — carrossel no mobile.
- `src/components/brokers/ComoFunciona.tsx` — conector vertical no mobile.
- `src/components/brokers/{PropostaValor,BeneficiosEmpresa,BeneficiosClientes,Solucoes,SobreBrokers,EraDoJunto,FAQ,FormularioBroker,Encerramento}.tsx` — paddings, grids, tipografia.
- `src/styles.css` — `overflow-x-hidden` no `body`, utilitário `.no-tap-highlight`, ajuste de animação `animate-spin-slow` com `@media (max-width: 640px)`.

## Sem alterações

- Sem mudanças de copy, sem novas seções, sem backend, sem alteração de fontes ou paleta.
