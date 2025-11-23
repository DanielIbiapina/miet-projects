# 🎓 Chef's Journey - Guia Rápido

## ✅ Tudo Pronto!

A página do **Chef's Journey** foi criada com sucesso! 🎉

## 🚀 Como Acessar

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

2. **Acesse no navegador:**
   - Página principal: `http://localhost:5173/`
   - Chef's Journey direto: `http://localhost:5173/chef-journey`

3. **Ou clique no link** na parte inferior da página principal: "👨‍🍳 Chef's Journey - Design Thinking Project"

## 📸 Como Adicionar Suas Fotos

### Passo 1: Coloque as fotos nas pastas corretas

As pastas já estão criadas em `public/images/chef-journey/`:

```
public/images/chef-journey/
├── prepping/          ← Fotos das aulas 1-2
├── tasting/           ← Fotos das aulas 2-3
├── cooking/           ← Fotos das aulas 3-4
├── feedback/          ← Fotos das aulas 4-5
└── plating-serving/   ← Fotos das aulas 5-6
```

**Exemplo:**

- Copie suas fotos para: `public/images/chef-journey/prepping/mindmap.jpg`

### Passo 2: Atualize o arquivo islands.js

Abra: `app/routes/chef-journey/islands.js`

Encontre o array `images` de cada ilha e adicione os caminhos:

```javascript
{
  id: "prepping",
  title: "PREPPING",
  // ... outros campos ...
  images: [
    "/images/chef-journey/prepping/mindmap.jpg",
    "/images/chef-journey/prepping/pesquisa1.jpg",
    "/images/chef-journey/prepping/pesquisa2.jpg",
    "/images/chef-journey/prepping/grupo.jpg",
  ]
}
```

**Repita para todas as 5 ilhas:**

- `prepping` → fotos da fase de pesquisa
- `tasting` → fotos de entrevistas e observação
- `cooking` → fotos do brainwriting, votação, protótipo
- `feedback` → fotos de discussões e refinamento
- `plating-serving` → fotos do pitch, business model, reflexões

## 🎨 O Que Você Pode Personalizar

No arquivo `app/routes/chef-journey/islands.js`, você pode editar:

### 1. Descrições e Conteúdo

```javascript
description: "Sua descrição personalizada aqui",
activities: [
  "Nova atividade 1",
  "Nova atividade 2",
],
learnings: [
  "Nova aprendizagem",
]
```

### 2. Cores das Ilhas

```javascript
color: "#FF6B6B",  // Mude para qualquer cor hex
```

### 3. Ícones

```javascript
icon: "🔍",  // Use qualquer emoji
```

### 4. Informações do Projeto

```javascript
export const projectInfo = {
  course: "Design Thinking",
  institution: "FEUP / MIETE",
  theme: "Seu tema aqui",
  // ...
};
```

## 🎯 Funcionalidades Disponíveis

✅ **Scroll Horizontal** - Navegue entre ilhas deslizando  
✅ **Barra de Progresso** - Mostra onde você está na jornada  
✅ **Navegação por Botões** - Anterior/Próximo no topo  
✅ **Navegação por Pontos** - Clique em qualquer ilha  
✅ **Animações Suaves** - Tudo animado com Framer Motion  
✅ **Grid de Fotos** - Exibe suas fotos organizadas  
✅ **Placeholders** - Mostra onde adicionar fotos  
✅ **Design Responsivo** - Funciona em desktop e tablet  
✅ **Seções Especiais:**

- How Might We Questions (ilha Cooking)
- Ideias Mais Votadas (ilha Cooking)
- Intent Statement Final (ilha Feedback)
- Business Model Canvas (ilha Plating & Serving)
- Reflexão Crítica - Natasha Jen (ilha Plating & Serving)

## 📁 Estrutura dos Arquivos Criados

```
app/
├── routes/
│   ├── chef-journey/
│   │   ├── index.jsx           ← Página principal
│   │   ├── islands.js          ← DADOS DAS ILHAS (edite aqui!)
│   │   └── README.md           ← Documentação detalhada
│   └── home/
│       ├── index.jsx           ← Link adicionado aqui
│       └── styles.js
├── components/
│   └── ChefJourney/
│       ├── Island.jsx          ← Componente de cada ilha
│       └── ProgressBar.jsx     ← Barra de navegação
└── routes.ts                   ← Rota registrada

public/
└── images/
    └── chef-journey/           ← COLOQUE SUAS FOTOS AQUI!
        ├── prepping/
        ├── tasting/
        ├── cooking/
        ├── feedback/
        └── plating-serving/
```

## 🎬 Exemplo Prático: Adicionando Fotos

1. **Copie suas fotos:**

   ```
   Suas fotos → public/images/chef-journey/cooking/
   ```

2. **Edite islands.js (linha ~88):**

   ```javascript
   {
     id: "cooking",
     title: "COOKING",
     // ...
     images: [
       "/images/chef-journey/cooking/brainwriting1.jpg",
       "/images/chef-journey/cooking/brainwriting2.jpg",
       "/images/chef-journey/cooking/oculos-prototipo.jpg",
       "/images/chef-journey/cooking/votacao.jpg",
     ]
   }
   ```

3. **Salve e veja as mudanças** (hot reload automático)

## 🎨 Cores das Ilhas

Cada ilha tem sua própria cor temática:

- 🏝️ **Prepping**: Vermelho coral `#FF6B6B`
- 🏝️ **Tasting**: Turquesa `#4ECDC4`
- 🏝️ **Cooking**: Amarelo `#FFE66D`
- 🏝️ **Feedback**: Verde água `#95E1D3`
- 🏝️ **Plating & Serving**: Verde menta `#A8E6CF`

## ❓ Dúvidas?

- Veja o README completo em: `app/routes/chef-journey/README.md`
- Todas as seções têm exemplos no arquivo `islands.js`
- Os placeholders de fotos mostram onde adicionar imagens

## 🚀 Próximos Passos

1. ✅ Adicione suas fotos nas pastas
2. ✅ Atualize `islands.js` com os caminhos
3. ✅ Personalize descrições e conteúdos
4. ✅ Revise cada ilha no navegador
5. ✅ Ajuste cores/ícones se quiser
6. ✅ Apresente seu dossiê! 🎉

---

**Projeto criado com React Router + Framer Motion + Styled Components**

Boa sorte com a apresentação! 🍀👨‍🍳
