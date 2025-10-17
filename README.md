# 💡 Motivação Diária - Extensão para Google Chrome

**Motivação Diária** é uma extensão para o navegador Google Chrome criada como projeto final do Bootcamp II. Ela exibe frases motivacionais no popup e ainda destaca palavras positivas em páginas específicas.

> Desenvolvida com Manifest V3, sem backend, focada em boas práticas e uso das APIs do Chrome.

---

## 🧩 Funcionalidades

- 📌 Popup com frases motivacionais aleatórias
- 💾 Armazena a última frase exibida com `chrome.storage`
- 🖍️ Content Script que destaca palavras como "foco", "motivação", "produtividade"
- ⚙️ Service Worker com evento de instalação
- 🎨 Visual simples e leve (HTML, CSS, JS puro)

---

## 🔧 Instalação Manual

1. Baixe este repositório ou o arquivo `.zip` da última release:
   [📦 Download da extensão](https://github.com/seu-usuario/bootcamp2-chrome-ext-seu-usuario/releases)

2. Acesse `chrome://extensions` no seu navegador

3. Ative o **Modo do Desenvolvedor** (canto superior direito)

4. Clique em **"Carregar sem compactação"**

5. Selecione a pasta da extensão (com o `manifest.json`)

6. Clique no ícone da extensão para abrir o popup

---

## 🗂️ Estrutura do Projeto

```
motivacao-diaria/
├── src/
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.js
│   │   └── popup.css
│   ├── background/
│   │   └── service-worker.js
│   ├── content/
│   │   └── content.js
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon32.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   ├── docs/
│   └── index.html
├── screenshot1.png
├── screenshot2.png
├── manifest.json
├── README.md
└── LICENSE
```
