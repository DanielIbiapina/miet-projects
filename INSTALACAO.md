# 📦 Instruções de Instalação - Flash Shopping

## ⚠️ IMPORTANTE - Leia Primeiro!

Este projeto usa **styled-components** que precisa ser instalado manualmente.

---

## 🔧 Passo a Passo

### 1. Instalar todas as dependências

Se você está no **Windows com WSL** (como parece ser o seu caso), abra o terminal do Ubuntu/WSL e navegue até a pasta do projeto:

```bash
cd /home/daniel/flash-shopping
npm install
```

### 2. Instalar styled-components

**Ainda no terminal WSL:**

```bash
npm install styled-components
```

### 3. Executar o projeto

```bash
npm run dev
```

### 4. Abrir no navegador

O terminal mostrará algo como:

```
➜  Local:   http://localhost:5173/
```

Abra esse endereço no seu navegador!

---

## 🐛 Problemas Comuns

### Erro de permissão no PowerShell

❌ **Não execute** `npm install` diretamente no PowerShell quando estiver trabalhando com WSL!

✅ **Sempre use** o terminal do WSL (Ubuntu) para instalar pacotes.

### Como abrir o terminal WSL

1. **Pelo VS Code:**
   - Abra o terminal integrado (`Ctrl + '`)
   - Clique na seta para baixo ao lado do `+`
   - Selecione "Ubuntu" ou "WSL"

2. **Pelo Windows Terminal:**
   - Abra o Windows Terminal
   - Clique na seta para baixo
   - Selecione "Ubuntu"

3. **Pelo Menu Iniciar:**
   - Digite "Ubuntu" no menu iniciar
   - Abra o aplicativo Ubuntu

### Styled-components não encontrado

Se você ver um erro como:
```
Cannot find module 'styled-components'
```

Execute:
```bash
npm install styled-components
```

---

## 📱 Visualização Mobile

O projeto foi desenhado para simular uma tela de celular:

- **Desktop**: Você verá um "celular" no centro da tela com as dimensões de iPhone (375x812px)
- **Mobile real**: O app ocupa a tela toda, sem moldura

---

## 🔍 Verificar se está tudo OK

Depois de instalar as dependências, você pode verificar se o styled-components foi instalado:

```bash
npm list styled-components
```

Deve mostrar algo como:
```
flash-shopping@... /home/daniel/flash-shopping
└── styled-components@X.X.X
```

---

## 🚀 Próximos Passos

Depois de executar o projeto:

1. A página inicial será carregada
2. Clique em "Começar agora" para ver o fluxo completo
3. Teste todas as páginas:
   - Home (`/`)
   - Seleção de Loja (`/select-store`)
   - Lista de Compras (`/shopping-list`)
   - Navegação (`/navigation`)

---

## 🎨 Customização

Todos os estilos estão em arquivos `styles.js` separados em cada pasta de rota.

Para mudar cores, tamanhos, etc, edite esses arquivos!

---

## ℹ️ Informações Técnicas

- **Framework**: React Router v7
- **Build Tool**: Vite
- **Estilização**: Styled Components
- **Linguagem**: JavaScript (com TypeScript na config)
- **Node**: Precisa Node.js 18+ 

---

## 💬 Dúvidas?

Se tiver problemas, verifique:
1. ✅ Node.js está instalado? (`node --version`)
2. ✅ Está no terminal WSL (não PowerShell)?
3. ✅ Styled-components foi instalado?
4. ✅ O comando `npm run dev` está rodando?

---

**Boa sorte com seu projeto! ⚡**

