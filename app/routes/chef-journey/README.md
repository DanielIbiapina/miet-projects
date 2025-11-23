# Chef's Journey - Dossiê Digital Interativo

## 📖 Sobre o Projeto

Este é o dossiê digital interativo do projeto de **Design Thinking** da disciplina FEUP/MIETE.

O site apresenta a jornada do grupo através de 5 ilhas que representam as etapas do processo de Design Thinking aplicadas ao tema: **Literacia Digital para Pessoas Idosas (60+)**.

## 🏝️ As 5 Ilhas

1. **PREPPING** - Doing the Research
2. **TASTING** - Experiencing the Problem
3. **COOKING** - Develop the Solution
4. **FEEDBACK** - Evaluating & Improving
5. **PLATING & SERVING** - Delivering to the Client

## 📸 Como Adicionar Suas Fotos

### Passo 1: Organizar as Fotos

Coloque suas fotos nas pastas correspondentes em `public/images/chef-journey/`:

```
public/images/chef-journey/
├── prepping/          (fotos das aulas 1-2)
├── tasting/           (fotos das aulas 2-3)
├── cooking/           (fotos das aulas 3-4)
├── feedback/          (fotos das aulas 4-5)
└── plating-serving/   (fotos das aulas 5-6)
```

### Passo 2: Atualizar o Arquivo islands.js

Abra o arquivo `app/routes/chef-journey/islands.js` e adicione os caminhos das fotos no array `images` de cada ilha:

```javascript
{
  id: "prepping",
  // ... outros campos
  images: [
    "/images/chef-journey/prepping/mindmap.jpg",
    "/images/chef-journey/prepping/pesquisa.jpg",
    "/images/chef-journey/prepping/grupo.jpg",
    // adicione mais fotos aqui
  ]
}
```

### Exemplo Completo:

```javascript
export const islands = [
  {
    id: "prepping",
    title: "PREPPING",
    // ...
    images: [
      "/images/chef-journey/prepping/foto1.jpg",
      "/images/chef-journey/prepping/foto2.jpg",
      "/images/chef-journey/prepping/foto3.jpg",
    ]
  },
  {
    id: "tasting",
    title: "TASTING",
    // ...
    images: [
      "/images/chef-journey/tasting/entrevista1.jpg",
      "/images/chef-journey/tasting/observacao.jpg",
    ]
  },
  // ... restante das ilhas
];
```

## 🎨 Personalização

Você pode personalizar diversos aspectos no arquivo `islands.js`:

- **Descrições**: Adicione mais detalhes sobre cada atividade
- **Aprendizagens**: Inclua reflexões e insights do grupo
- **Cores**: Altere as cores de cada ilha (hex colors)
- **Ícones**: Mude os emojis de cada ilha

## 🚀 Como Acessar

Depois de iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse: `http://localhost:5173/chef-journey`

## 💡 Dicas

- Use fotos em boa resolução (mas não muito pesadas)
- Formatos recomendados: JPG ou PNG
- Nomeie as fotos de forma descritiva (ex: `brainwriting-postits.jpg`)
- Você pode adicionar quantas fotos quiser em cada ilha

## 🎯 Funcionalidades

- ✅ Scroll horizontal suave entre ilhas
- ✅ Barra de progresso interativa
- ✅ Animações com Framer Motion
- ✅ Design responsivo
- ✅ Grid de fotos com placeholders
- ✅ Navegação por botões ou scroll
- ✅ Seções específicas para cada tipo de conteúdo (HMW, ideias, reflexões)

## 📝 Estrutura dos Dados

Cada ilha pode ter:

- `title` - Título principal
- `subtitle` - Subtítulo
- `description` - Descrição geral
- `aulas` - Indicação das aulas
- `activities` - Lista de atividades realizadas
- `learnings` - Aprendizagens da etapa
- `images` - Array com caminhos das fotos
- `color` - Cor da ilha (hex)
- `icon` - Emoji representativo

Campos especiais por ilha:
- **COOKING**: `hmwQuestions`, `topIdeas`
- **FEEDBACK**: `finalIntentStatement`
- **PLATING & SERVING**: `businessModelAspects`, `criticalReflection`

## 🤝 Contato

Projeto desenvolvido para a disciplina de Design Thinking - FEUP/MIETE

