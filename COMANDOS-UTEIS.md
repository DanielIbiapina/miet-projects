# 🛠️ Comandos Úteis - Flash Shopping

## 📦 Instalação e Setup

### Instalar todas dependências
```bash
cd /home/daniel/flash-shopping
npm install
```

### Instalar styled-components (IMPORTANTE!)
```bash
npm install styled-components
```

---

## 🚀 Desenvolvimento

### Iniciar servidor de desenvolvimento
```bash
npm run dev
```
O site estará disponível em: `http://localhost:5173`

### Parar o servidor
No terminal, pressione: `Ctrl + C`

---

## 🏗️ Build

### Criar build de produção
```bash
npm run build
```

### Visualizar build de produção
```bash
npm start
```

---

## 🔍 Verificação

### Verificar versão do Node
```bash
node --version
```
Deve ser 18.x ou superior

### Verificar se styled-components está instalado
```bash
npm list styled-components
```

### Verificar todas as dependências instaladas
```bash
npm list --depth=0
```

---

## 📁 Estrutura de Arquivos

### Ver estrutura do projeto
```bash
tree -L 3 -I 'node_modules'
```

### Ver apenas pastas
```bash
tree -L 3 -d -I 'node_modules'
```

---

## 🎨 Desenvolvimento

### Criar nova rota (exemplo: /produtos)

1. **Criar pasta e arquivos:**
```bash
mkdir -p app/routes/produtos
touch app/routes/produtos/index.jsx
touch app/routes/produtos/styles.js
```

2. **Adicionar em routes.ts:**
```typescript
route("produtos", "routes/produtos/index.jsx"),
```

### Criar novo componente (exemplo: Card)

```bash
mkdir -p app/components/Card
touch app/components/Card/index.jsx
touch app/components/Card/styles.js
```

---

## 🧹 Limpeza

### Limpar cache do npm
```bash
npm cache clean --force
```

### Reinstalar todas dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Limpar build
```bash
rm -rf build
```

---

## 📱 Teste em Dispositivos

### Acessar de outro dispositivo na rede

1. **Descobrir seu IP:**
```bash
ip addr show | grep "inet " | grep -v 127.0.0.1
```

2. **Iniciar server:**
```bash
npm run dev -- --host
```

3. **Acessar do celular:**
Abra: `http://SEU_IP:5173`

---

## 🐛 Debug

### Ver erros em tempo real
Os erros aparecem automaticamente no terminal onde você rodou `npm run dev`

### Abrir DevTools do navegador
- Chrome/Edge: `F12` ou `Ctrl + Shift + I`
- Firefox: `F12` ou `Ctrl + Shift + K`

### Ver console do navegador
No DevTools, vá para aba "Console"

---

## 📝 Git (Controle de Versão)

### Inicializar repositório
```bash
git init
git add .
git commit -m "Initial commit - Flash Shopping"
```

### Ver status
```bash
git status
```

### Adicionar mudanças
```bash
git add .
git commit -m "Descrição das mudanças"
```

### Ver histórico
```bash
git log --oneline
```

### Criar nova branch
```bash
git checkout -b nome-da-feature
```

---

## 🔧 Configuração do VS Code

### Extensões Recomendadas:

1. **ES7+ React/Redux/React-Native snippets**
   ```bash
   code --install-extension dsznajder.es7-react-js-snippets
   ```

2. **Styled Components**
   ```bash
   code --install-extension styled-components.vscode-styled-components
   ```

3. **ESLint**
   ```bash
   code --install-extension dbaeumer.vscode-eslint
   ```

4. **Prettier**
   ```bash
   code --install-extension esbenp.prettier-vscode
   ```

---

## 💡 Snippets Úteis

### Criar componente React rapidamente

No VS Code, digite `rafce` e pressione Tab:
```javascript
import React from 'react'

const ComponentName = () => {
  return (
    <div>ComponentName</div>
  )
}

export default ComponentName
```

---

## 🎯 Atalhos do VS Code

### Navegação:
- `Ctrl + P` - Buscar arquivo
- `Ctrl + Shift + P` - Command Palette
- `Ctrl + B` - Toggle sidebar
- `Ctrl + J` - Toggle terminal

### Edição:
- `Alt + Up/Down` - Mover linha
- `Shift + Alt + Up/Down` - Duplicar linha
- `Ctrl + /` - Comentar/descomentar
- `Ctrl + D` - Selecionar próxima ocorrência

### Multi-cursor:
- `Alt + Click` - Adicionar cursor
- `Ctrl + Alt + Up/Down` - Cursor acima/abaixo

---

## 📊 Performance

### Analisar tamanho do bundle
```bash
npm run build
```

Os arquivos gerados em `build/` mostram o tamanho final

---

## 🔄 Atualizar Dependências

### Ver versões desatualizadas
```bash
npm outdated
```

### Atualizar todas dependências
```bash
npm update
```

### Atualizar dependência específica
```bash
npm install react@latest
```

---

## 🌐 Deploy (Futuro)

### Netlify:
1. Build command: `npm run build`
2. Publish directory: `build`

### Vercel:
```bash
npm install -g vercel
vercel
```

---

## 📚 Recursos Úteis

### Documentação:
- React Router v7: https://reactrouter.com
- Styled Components: https://styled-components.com
- React: https://react.dev

### Inspiração de Design:
- Dribbble: https://dribbble.com
- Mobbin: https://mobbin.com (design de apps mobile)

---

## ❓ Troubleshooting

### Erro: "Cannot find module 'styled-components'"
```bash
npm install styled-components
```

### Erro: "Port 5173 is already in use"
```bash
# Matar processo na porta 5173
lsof -ti:5173 | xargs kill -9
# Ou usar outra porta
npm run dev -- --port 3000
```

### Erro: "EACCES: permission denied"
```bash
# Dar permissões à pasta
sudo chown -R $USER:$USER /home/daniel/flash-shopping
```

### Erro: Site não atualiza
1. Limpar cache do navegador (`Ctrl + Shift + Delete`)
2. Hard refresh (`Ctrl + F5`)
3. Reiniciar servidor de desenvolvimento

---

## 🎓 Para Aprender Mais

### React:
- Tutorial oficial: https://react.dev/learn
- React in 100 seconds: https://youtu.be/Tn6-PIqc4UM

### Styled Components:
- Crash Course: https://youtu.be/02zO0hZmwnw

### React Router:
- Tutorial: https://reactrouter.com/en/main/start/tutorial

---

## 💬 Dicas Finais

1. **Use o terminal WSL**, não PowerShell
2. **Salve sempre** antes de testar (`Ctrl + S`)
3. **Console do navegador** é seu amigo para debug
4. **Git commits frequentes** salvam seu trabalho
5. **Leia os erros** - eles geralmente dizem o problema

---

**Bom desenvolvimento! ⚡**

