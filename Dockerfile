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

# Copia o package.json (apenas para o npm run preview)
COPY --from=builder /app/package*.json ./

# Copia os arquivos do build e as pastas necessárias do frontend
COPY --from=builder /app/dist ./dist

# Instala apenas as dependências de produção para rodar o preview
RUN npm ci --omit=dev

# O vite preview roda na porta 4173 por padrão
EXPOSE 4173

# Comando para rodar a aplicação escutando em todas as interfaces de rede (0.0.0.0)
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
