# Usa a imagem oficial do Node.js baseada no Alpine Linux (mais leve)
FROM node:22-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do NPM
COPY package*.json ./

# Instala todas as dependências (inclusive as de desenvolvimento necessárias para o build)
RUN npm install

# Copia todo o código fonte para dentro do container
COPY . .

# Faz o build da aplicação
RUN npm run build

# Agora vamos para a imagem final (apenas o necessário para rodar o app)
FROM node:22-alpine AS runner

WORKDIR /app

# Cria um usuário não-root para rodar a aplicação (segurança)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 appuser

# Copia o build completo (client + server) gerado pelo Nitro
COPY --from=builder --chown=appuser:nodejs /app/.output ./.output

# Porta padrão do Nitro
EXPOSE 3000

# Roda como usuário não-root
USER appuser

# Roda o servidor Nitro diretamente (sem restrição de hosts)
ENV HOST=0.0.0.0
ENV PORT=3000
CMD ["node", ".output/server/index.mjs"]
