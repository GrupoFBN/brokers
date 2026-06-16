
## Objetivo

Replicar a landing page do projeto **ARYZ Health & Benefits** dentro deste projeto, acessível em `/aryz`, no mesmo padrão das rotas `/motoviagens` e `/dolphin-dicas` (rota isolada, com Header/Hero/seções/Footer próprios, sem afetar a home FBN Brokers).

## O que será criado

### 1. Nova rota
- `src/routes/aryz.tsx` — declara `createFileRoute("/aryz")` com `head()` (title, description, og:title/description, og:image, twitter) e renderiza a landing ARYZ completa.

### 2. Componentes (namespaced em `src/components/aryz/`)
Copiados na íntegra do projeto ARYZ, mantendo design e copy:
- `Header.tsx`
- `Hero.tsx`
- `VideoDepoimento.tsx`
- `Parceria.tsx`
- `Solucoes.tsx`
- `ComoFunciona.tsx`
- `Confianca.tsx`
- `Contato.tsx`
- `Footer.tsx`
- `config.ts`

Imports internos serão reescritos de `@/components/landing/*` para `@/components/aryz/*`. Componentes shadcn/ui já existentes neste projeto (Button, Input, etc.) serão reaproveitados — não duplicamos `src/components/ui/*`.

### 3. Assets
Copiados para `src/assets/aryz/`:
- `aryz-logo.png`, `aryz-logo-transparent.png`, `fbn-logo.png`, `hero-team.jpg`

Imports nos componentes ajustados para os novos caminhos.

### 4. Design tokens isolados (sem quebrar FBN Brokers)
O ARYZ usa paleta própria (azul FBN + roxo ARYZ + fontes Plus Jakarta Sans / Inter). Para não conflitar com o tema atual do FBN Brokers, vamos:

- **Escopar tokens ARYZ** sob uma classe `.aryz-theme` em `src/styles.css` (variáveis `--brand-blue`, `--brand-purple`, `--gradient-brand`, `--shadow-soft`, etc. redefinidas apenas dentro desse escopo).
- Aplicar `className="aryz-theme"` no wrapper raiz da rota `/aryz` para que toda a página herde os tokens ARYZ.
- Adicionar utilities `bg-gradient-brand`, `bg-gradient-soft`, `text-gradient-brand`, `shadow-soft`, `shadow-card` no `styles.css` (se ainda não existirem) escopadas via variáveis CSS — os tokens diferentes do FBN ficam isolados.
- Carregar as fontes Plus Jakarta Sans e Inter via Google Fonts no `__root.tsx` apenas se ainda não estiverem disponíveis.

Isso garante: **/** (FBN Brokers), **/motoviagens**, **/dolphin-dicas** intocados; **/aryz** com identidade visual original do projeto ARYZ.

### 5. SEO da rota /aryz
- title: "ARYZ + FBN — Benefícios corporativos para cuidar da sua equipe"
- description, og:title, og:description (copy original do projeto ARYZ)
- og:image apontando para `hero-team.jpg`
- canonical `/aryz`

### 6. Sem alterações em outras rotas
- `src/routes/index.tsx`, `motoviagens.tsx`, `dolphin-dicas.tsx`: **não tocados**.
- Nenhum link na home FBN apontando para `/aryz` (a menos que você peça).

## O que NÃO será feito
- Sem backend, sem formulários reais (mantém o comportamento simulado do projeto original).
- Sem alterar tema/cores do FBN Brokers ou das outras landings.
- Sem reescrever copy ou layout do ARYZ — transferência fiel.

## Resultado
Acessando `/aryz` no preview, você verá a landing ARYZ Health & Benefits idêntica ao projeto original, com tema isolado e SEO próprio.
