# Imagem base com Playwright e Chromium já instalados
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm ci --silent

# Instala o Chromium com dependências (geralmente já vem, mas só pra garantir)
RUN npx playwright install --with-deps chromium

# Copia todos os arquivos para dentro do container
COPY . .

# Executa o script de build que gera a pasta dist com a extensão empacotada
RUN node scripts/build-extension.mjs

# Comando padrão para rodar os testes (você pode mudar se quiser)
CMD ["npm", "test"]
