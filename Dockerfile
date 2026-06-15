# Usa a imagem oficial do Node.js baseada no Alpine Linux (mais leve)
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do NPM
COPY package*.json ./

# Instala todas as dependências (inclusive as de desenvolvimento necessárias para o build)
RUN npm ci

# Copia todo o código fonte para dentro do container
COPY . .

# Faz o build da aplicação
RUN npm run build

# Agora vamos para a imagem final (apenas o necessário para rodar o app)
FROM node:20-alpine AS runner

WORKDIR /app

# Copia o build completo (client + server) gerado pelo Nitro
COPY --from=builder /app/.output ./.output

# Porta padrão do Nitro
EXPOSE 3000

# Roda o servidor Nitro diretamente (sem restrição de hosts)
ENV HOST=0.0.0.0
ENV PORT=3000
CMD ["node", ".output/server/index.mjs"]
