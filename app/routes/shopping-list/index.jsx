import { useState } from "react";
import { Link } from "react-router";
import {
  Container,
  Header,
  HeaderTop,
  BackButton,
  Title,
  StoreInfo,
  StoreName,
  AddItemSection,
  Input,
  AddButton,
  ListSection,
  SectionTitle,
  ItemsList,
  Item,
  Checkbox,
  ItemContent,
  ItemName,
  ItemBrand,
  DeleteButton,
  FloatingButton,
  EmptyState,
} from "./styles";

export function meta() {
  return [
    { title: "Shopping List - Flash Shopping" },
    { name: "description", content: "Create your smart shopping list" },
  ];
}

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", brand: "Organic 1L", checked: false },
    { id: 2, name: "Bread", brand: "", checked: false },
    { id: 3, name: "Eggs", brand: "Dozen", checked: true },
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        {
          id: Date.now(),
          name: newItem,
          brand: "",
          checked: false,
        },
      ]);
      setNewItem("");
    }
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const uncheckedItems = items.filter((item) => !item.checked);
  const checkedItems = items.filter((item) => item.checked);

  return (
    <Container>
      <Header>
        <HeaderTop>
          <Link to="/select-store" style={{ textDecoration: "none" }}>
            <BackButton>←</BackButton>
          </Link>
          <div>
            <Title>Shopping List</Title>
            <StoreInfo>
              <StoreName>📍 Pingo Doce - Rua da Boavista</StoreName>
            </StoreInfo>
          </div>
        </HeaderTop>

        <AddItemSection>
          <Input
            type="text"
            placeholder="Add item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addItem()}
          />
          <AddButton onClick={addItem}>+</AddButton>
        </AddItemSection>
      </Header>

      <ListSection>
        {uncheckedItems.length > 0 && (
          <>
            <SectionTitle>To buy ({uncheckedItems.length})</SectionTitle>
            <ItemsList>
              {uncheckedItems.map((item) => (
                <Item key={item.id}>
                  <Checkbox
                    checked={item.checked}
                    onClick={() => toggleItem(item.id)}
                  />
                  <ItemContent>
                    <ItemName checked={item.checked}>{item.name}</ItemName>
                    {item.brand && <ItemBrand>{item.brand}</ItemBrand>}
                  </ItemContent>
                  <DeleteButton onClick={() => deleteItem(item.id)}>
                    🗑️
                  </DeleteButton>
                </Item>
              ))}
            </ItemsList>
          </>
        )}

        {checkedItems.length > 0 && (
          <>
            <SectionTitle>Completed ({checkedItems.length})</SectionTitle>
            <ItemsList>
              {checkedItems.map((item) => (
                <Item key={item.id} checked>
                  <Checkbox
                    checked={item.checked}
                    onClick={() => toggleItem(item.id)}
                  />
                  <ItemContent>
                    <ItemName checked={item.checked}>{item.name}</ItemName>
                    {item.brand && <ItemBrand>{item.brand}</ItemBrand>}
                  </ItemContent>
                  <DeleteButton onClick={() => deleteItem(item.id)}>
                    🗑️
                  </DeleteButton>
                </Item>
              ))}
            </ItemsList>
          </>
        )}

        {items.length === 0 && (
          <EmptyState>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📝</div>
            <h3>Your list is empty</h3>
            <p>Add items to start shopping</p>
          </EmptyState>
        )}
      </ListSection>

      {uncheckedItems.length > 0 && (
        <Link to="/navigation" style={{ textDecoration: "none" }}>
          <FloatingButton>
            Start navigation ({uncheckedItems.length} items) →
          </FloatingButton>
        </Link>
      )}
    </Container>
  );
}
