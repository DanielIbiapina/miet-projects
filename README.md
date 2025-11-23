# ⚡ Flash Shopping

**Protótipo de aplicativo web para otimização de compras em supermercados**

Projeto desenvolvido para a disciplina de Empreendedorismo - um "Waze para supermercados" que ajuda os usuários a encontrarem produtos rapidamente através de rotas otimizadas.

---

## 📋 Sobre o Projeto

O Flash Shopping resolve o problema de perda de tempo em supermercados, onde **60% do tempo gasto (12 de 20 minutos) é perdido procurando produtos**.

### Funcionalidades Principais

1. **📝 Lista de Compras Inteligente**
   - Criação de listas personalizadas
   - Opção de especificar marcas favoritas
   - Adicionar/remover itens facilmente

2. **🗺️ Rota Otimizada**
   - Calcula o caminho mais eficiente pelo supermercado
   - Navegação visual similar ao Waze
   - Instruções passo a passo

3. **🎯 Sincronização de Filas**
   - Pega senhas virtuais ao chegar na loja
   - Otimiza o tempo de espera em açougue, padaria, etc.

4. **🏪 Seleção de Supermercados**
   - Lista de lojas próximas
   - Informação de distância e endereço
   - Suporte para Pingo Doce, Continente, Mercadona, Lidl, etc.

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Instalação

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Instalar styled-components (importante!):**
   ```bash
   npm install styled-components
   ```

3. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acessar o aplicativo:**
   Abra o navegador em `http://localhost:5173` (ou a porta indicada no terminal)

---

## 🏗️ Estrutura do Projeto

```
app/
├── components/          # Componentes reutilizáveis
│   ├── MobileLayout/   # Layout que simula tela de celular
│   │   ├── index.jsx
│   │   └── styles.js
│   └── BottomNav/      # Barra de navegação inferior
│       ├── index.jsx
│       └── styles.js
│
├── routes/             # Páginas da aplicação
│   ├── home/          # Página inicial
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── select-store/  # Seleção de supermercado
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── shopping-list/ # Lista de compras
│   │   ├── index.jsx
│   │   └── styles.js
│   └── navigation/    # Navegação no supermercado
│       ├── index.jsx
│       └── styles.js
│
├── root.tsx           # Layout principal
├── routes.ts          # Configuração de rotas
└── app.css           # Estilos globais
```

---

## 🎨 Tecnologias Utilizadas

- **React Router v7** - Roteamento e framework
- **Styled Components** - Estilização
- **React** - Biblioteca UI
- **Vite** - Build tool
- **TypeScript** - Configuração (mas usando JavaScript nas páginas)

---

## 📱 Páginas do Aplicativo

### 1. Home (`/`)
Página inicial com apresentação do app, estatísticas e features principais.

**Navegação:**
- "Começar agora" → Seleção de supermercado
- "Ver demonstração" → Navegação (demo)

### 2. Seleção de Supermercado (`/select-store`)
Lista de supermercados próximos com distância e endereço.

**Navegação:**
- Clicar em qualquer loja → Lista de compras

### 3. Lista de Compras (`/shopping-list`)
Interface para criar e gerenciar lista de compras.

**Funcionalidades:**
- Adicionar itens
- Marcar como concluído
- Deletar itens
- Ver itens pendentes e concluídos separadamente

**Navegação:**
- "Iniciar navegação" → Página de navegação

### 4. Navegação (`/navigation`)
Mapa visual do supermercado com rota otimizada.

**Funcionalidades:**
- Visualização do mapa com corredores
- Indicadores de produtos
- Marcador de localização atual
- Instruções de navegação
- Progresso da compra
- Botões de ação (pegar senha, recentralizar)

---

## 🎯 Proposta de Valor

> "Para compradores de supermercado que têm dificuldade em encontrar produtos facilmente, o Flash Shopping fornece uma plataforma de aplicativo para compras que, ao contrário das tradicionais, otimiza o ativo mais valioso do usuário: o tempo."

---

## 💡 Como Funciona

1. **Mapeamento Open Source**: Dependemos de parcerias com supermercados e feedback da comunidade para mapear produtos em cada loja individual

2. **Rota Inteligente**: O algoritmo calcula a rota mais eficiente baseado na localização dos produtos

3. **Tempo Real**: Sincronização com sistemas de senha das lojas para otimizar tempo de espera

---

## 📊 Estatísticas

- **60%** do tempo é economizado
- **12 minutos** salvos a cada compra de 20 minutos
- **100%** gratuito para usuários

---

## 🔮 Próximos Passos (Futuras Implementações)

- [ ] Integração real com mapas de supermercados
- [ ] Sistema de scan de código de barras
- [ ] Sincronização real com sistemas de senhas
- [ ] Histórico de compras e sugestões inteligentes
- [ ] Compartilhamento de listas entre usuários
- [ ] Comparação de preços entre supermercados
- [ ] Notificações de promoções
- [ ] Progressive Web App (PWA) para instalação no celular

---

## 👥 Equipe

Projeto desenvolvido para a disciplina de Empreendedorismo.

---

## 📄 Licença

Este é um projeto acadêmico desenvolvido para fins educacionais.

---

## 🤝 Como Contribuir

Este é um protótipo acadêmico, mas sugestões são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📞 Contato

Para dúvidas sobre o projeto, entre em contato com a equipe.

---

**Desenvolvido com ⚡ pela equipe Flash Shopping**
