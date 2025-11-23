# 📖 Guia de Uso - Flash Shopping

## 🎯 Fluxo Completo da Aplicação

### Passo 1: Página Inicial (Home)
**Rota:** `/`

**O que você vê:**
- Logo e nome do app (⚡ Flash Shopping)
- Estatísticas (60% mais rápido, 100% gratuito)
- 3 cards de features principais:
  - 📝 Lista Inteligente
  - 🗺️ Rota Otimizada
  - 🎯 Sincronização de Filas

**Ações disponíveis:**
- **"Começar agora"** → Leva para seleção de supermercado
- **"Ver demonstração"** → Leva direto para a tela de navegação

---

### Passo 2: Selecionar Supermercado
**Rota:** `/select-store`

**O que você vê:**
- Barra de busca para filtrar supermercados
- Lista de supermercados próximos:
  - 🛒 Pingo Doce (0.5 km)
  - 🏪 Continente (1.2 km)
  - 🏬 Mercadona (1.8 km)
  - 🛍️ Lidl (2.3 km)

**Ações disponíveis:**
- **Voltar (←)** → Retorna para home
- **Clicar em qualquer loja** → Vai para lista de compras

---

### Passo 3: Lista de Compras
**Rota:** `/shopping-list`

**O que você vê:**
- Nome do supermercado selecionado (ex: 📍 Pingo Doce - Boavista)
- Campo para adicionar novos itens
- Lista de itens "A comprar"
- Lista de itens "Concluídos"
- Botão flutuante "Iniciar navegação"

**Funcionalidades:**
1. **Adicionar item:**
   - Digite o nome no campo
   - Pressione Enter ou clique no botão "+"

2. **Marcar como concluído:**
   - Clique no checkbox ao lado do item
   - Item vai para seção "Concluídos"

3. **Deletar item:**
   - Clique no ícone 🗑️

4. **Iniciar navegação:**
   - Clique no botão verde na parte inferior
   - Só aparece se houver itens não concluídos

**Ações disponíveis:**
- **Voltar (←)** → Retorna para seleção de loja
- **"Iniciar navegação"** → Vai para tela de navegação

---

### Passo 4: Navegação no Supermercado
**Rota:** `/navigation`

**O que você vê:**
1. **Cabeçalho:**
   - Nome da loja
   - Barra de progresso
   - Contador de itens coletados

2. **Mapa Visual:**
   - Corredores do supermercado (Lácteos, Padaria, Frutas, Cereais)
   - 📍 Marcador verde = sua localização atual
   - Emojis nos corredores = produtos a pegar
   - Linha verde = caminho a seguir

3. **Card de Instrução:**
   - 🎯 Direção para o próximo item
   - Distância aproximada

4. **Lista de Itens:**
   - Seus produtos com indicador "Próximo"
   - Checkbox para marcar quando pegar

5. **Botões de Ação:**
   - 🔔 Pegar senha (para açougue, padaria, etc)
   - 📍 Recentralizar (ajustar posição no mapa)

**Funcionalidades:**
1. **Marcar item como coletado:**
   - Clique no checkbox do item
   - Progresso é atualizado automaticamente

2. **Completar todas as compras:**
   - Quando marcar todos os itens
   - Aparece botão verde "Finalizar compras ✓"
   - Clique para voltar à home

**Ações disponíveis:**
- **Voltar (←)** → Retorna para lista de compras
- **"Finalizar compras"** → Retorna à home (só aparece quando terminar)

---

## 🎨 Design e Experiência

### Layout Mobile
- **Desktop:** App aparece como um celular no centro (375x812px - tamanho de iPhone)
- **Mobile:** App ocupa toda a tela
- **Notch:** Simula o "notch" do iPhone no desktop

### Cores Principais
- **Roxo/Azul:** `#6366f1` (cor primária)
- **Verde:** `#10b981` (sucesso, navegação ativa)
- **Branco:** Fundo dos cards
- **Cinza claro:** `#f8f9fa` (fundo das páginas)

### Animações
- Botões têm efeito de "levantar" ao passar o mouse
- Pulse animation na localização atual
- Transições suaves entre estados

---

## 🔄 Navegação entre Páginas

### Mapa de Navegação:
```
Home (/)
  ├─→ Começar agora → /select-store
  │                        ├─→ Selecionar loja → /shopping-list
  │                        │                           └─→ Iniciar → /navigation
  │                        │                                            └─→ Finalizar → /
  └─→ Ver demonstração → /navigation
```

---

## 💡 Dicas de Uso

### Para Apresentação
1. **Demonstração rápida:**
   - Home → "Ver demonstração" → Navegue pela tela de navegação
   
2. **Fluxo completo:**
   - Home → "Começar agora" → Selecione uma loja → Crie uma lista → Inicie navegação

### Para Desenvolvimento
- Todos os dados são **mock** (simulados)
- Não há backend ou banco de dados
- Itens na lista não persistem ao recarregar a página
- Para adicionar novos supermercados, edite: `app/routes/select-store/index.jsx`
- Para mudar o layout do mapa, edite: `app/routes/navigation/index.jsx`

---

## 🎓 Para a Apresentação da Faculdade

### Pontos-chave para destacar:

1. **Problem Statement:**
   - "60% do tempo em compras é perdido procurando produtos"
   - "Para cada 20 minutos, 12 são desperdiçados"

2. **Solução:**
   - App com lista inteligente
   - Rota otimizada (como Waze)
   - Sincronização com filas

3. **Diferencial:**
   - Open source (mapeamento colaborativo)
   - Gratuito 100%
   - Foco em tempo (não em preço)

4. **Value Proposition:**
   - "Otimiza o ativo mais valioso do usuário: o tempo"

### Demonstração Sugerida:

1. **Mostrar a home** (10 segundos)
   - Explicar o conceito

2. **Selecionar supermercado** (5 segundos)
   - Mostrar diferentes opções

3. **Criar lista de compras** (20 segundos)
   - Adicionar 3-4 itens
   - Mostrar que pode marcar/desmarcar

4. **Navegação** (30 segundos) ⭐ **FOCO AQUI**
   - Mostrar o mapa visual
   - Explicar os marcadores
   - Marcar um item
   - Mostrar progresso
   - Explicar os botões de ação

5. **Finalizar** (5 segundos)
   - Completar todos itens
   - Mostrar botão de finalizar

**Tempo total:** ~70 segundos

---

## 📸 Screenshots para Documentação

Se precisar tirar prints para o PowerPoint:

1. **Home:** Tela inicial com features
2. **Seleção:** Lista de supermercados
3. **Lista:** Criação de lista de compras
4. **Mapa:** Tela de navegação (a mais importante!)
5. **Progresso:** Tela de navegação com itens marcados

---

## 🚀 Próximas Features (Ideias)

Se quiser expandir o projeto:

- [ ] Histórico de compras
- [ ] Salvar listas favoritas
- [ ] Compartilhar lista com outras pessoas
- [ ] Comparação de preços entre lojas
- [ ] Modo escuro
- [ ] Integração com calendário (lembrete de compras)
- [ ] Scanner de código de barras
- [ ] Lista de compras por voz

---

## ❓ FAQ

**P: Os dados são reais?**
R: Não, todos os dados são simulados para o protótipo.

**P: Funciona offline?**
R: Não ainda, mas seria uma feature interessante para implementar (PWA).

**P: Posso usar em produção?**
R: Isto é um protótipo acadêmico. Para produção seria necessário:
- Backend real
- Integração com APIs de supermercados
- Sistema de autenticação
- Banco de dados
- Testes

**P: Como adiciono mais supermercados?**
R: Edite o array `stores` em `app/routes/select-store/index.jsx`

**P: Como mudo o layout do mapa?**
R: Edite os componentes `Aisle` em `app/routes/navigation/index.jsx`

---

**Criado com ⚡ para o projeto Flash Shopping**

Boa apresentação! 🎉

