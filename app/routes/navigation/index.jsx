import { useState } from "react";
import { Link } from "react-router";
import {
  Container,
  Header,
  BackButton,
  StoreInfo,
  ProgressBar,
  ProgressFill,
  ProgressText,
  MapContainer,
  MapGrid,
  Aisle,
  AisleLabel,
  ProductMarker,
  CurrentLocationMarker,
  PathLine,
  InstructionCard,
  InstructionIcon,
  InstructionText,
  InstructionDistance,
  ItemsList,
  ItemCard,
  ItemCheckbox,
  ItemName,
  NextItemIndicator,
  FloatingActions,
  ActionButton,
  CompleteButton,
} from "./styles";

export function meta() {
  return [
    { title: "Navigation - Flash Shopping" },
    {
      name: "description",
      content: "Follow the optimized route through the supermarket",
    },
  ];
}

export default function Navigation() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", aisle: "Dairy", checked: false, current: true },
    { id: 2, name: "Bread", aisle: "Bakery", checked: false, current: false },
    { id: 3, name: "Apples", aisle: "Produce", checked: false, current: false },
    { id: 4, name: "Rice", aisle: "Grains", checked: false, current: false },
  ]);

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const completedCount = items.filter((i) => i.checked).length;
  const progress = (completedCount / items.length) * 100;
  const currentItem = items.find((i) => i.current);

  return (
    <Container>
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Link to="/shopping-list" style={{ textDecoration: "none" }}>
            <BackButton>←</BackButton>
          </Link>
          <StoreInfo>
            <strong>Pingo Doce - Rua da Boavista</strong>
            <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              Optimized route active
            </div>
          </StoreInfo>
        </div>

        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>
        <ProgressText>
          {completedCount} of {items.length} items collected
        </ProgressText>
      </Header>

      <MapContainer>
        <MapGrid>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {/* Store entrance/exit marker */}
            <div
              style={{
                position: "absolute",
                top: "5px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#10b981",
                color: "white",
                padding: "4px 12px",
                borderRadius: "6px",
                fontSize: "0.7rem",
                fontWeight: "600",
                zIndex: 15,
              }}
            >
              ENTRANCE
            </div>

            {/* Aisles - more realistic layout */}
            <Aisle
              style={{ top: "15%", left: "8%", width: "38%", height: "14%" }}
            >
              <AisleLabel>Aisle 1 - Dairy</AisleLabel>
            </Aisle>
            <Aisle
              style={{ top: "15%", left: "52%", width: "40%", height: "14%" }}
            >
              <AisleLabel>Aisle 2 - Bakery</AisleLabel>
            </Aisle>
            <Aisle
              style={{ top: "35%", left: "8%", width: "38%", height: "14%" }}
            >
              <AisleLabel>Aisle 3 - Produce</AisleLabel>
            </Aisle>
            <Aisle
              style={{ top: "35%", left: "52%", width: "40%", height: "14%" }}
            >
              <AisleLabel>Aisle 4 - Grains</AisleLabel>
            </Aisle>

            {/* Checkout area */}
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "8%",
                right: "8%",
                height: "18%",
                background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
                border: "2px solid #ef4444",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                fontWeight: "600",
                color: "#991b1b",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
              }}
            >
              🛒 CHECKOUT AREA
            </div>

            {/* Current location marker */}
            <CurrentLocationMarker style={{ top: "22%", left: "18%" }} />

            {/* Path lines - complete route */}
            {/* Horizontal line to first product */}
            <PathLine
              style={{
                top: "22%",
                left: "18%",
                width: "18%",
                height: "4px",
              }}
            />

            {/* Line from first to second product */}
            <PathLine
              style={{
                top: "22%",
                left: "36%",
                width: "32%",
                height: "4px",
              }}
            />

            {/* Vertical line down */}
            <div
              style={{
                position: "absolute",
                top: "22%",
                left: "68%",
                width: "4px",
                height: "11%",
                background: "linear-gradient(180deg, #10b981 0%, #34d399 100%)",
                borderRadius: "2px",
                boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)",
                zIndex: 5,
              }}
            />

            {/* Horizontal line to third product */}
            <PathLine
              style={{
                top: "33%",
                left: "22%",
                width: "46%",
                height: "4px",
              }}
            />

            {/* Line from third to fourth product */}
            <PathLine
              style={{
                top: "42%",
                left: "22%",
                width: "50%",
                height: "4px",
              }}
            />

            {/* Product markers with better positioning */}
            <ProductMarker style={{ top: "22%", left: "36%" }}>
              🥛
            </ProductMarker>
            <ProductMarker style={{ top: "22%", left: "68%" }}>
              🍞
            </ProductMarker>
            <ProductMarker style={{ top: "42%", left: "22%" }}>
              🍎
            </ProductMarker>
            <ProductMarker style={{ top: "42%", left: "72%" }}>
              🌾
            </ProductMarker>
          </div>
        </MapGrid>

        {currentItem && (
          <InstructionCard>
            <InstructionIcon>🎯</InstructionIcon>
            <div style={{ flex: 1 }}>
              <InstructionText>
                Turn right to {currentItem.aisle} section
              </InstructionText>
              <InstructionDistance>In 15 meters</InstructionDistance>
            </div>
          </InstructionCard>
        )}
      </MapContainer>

      <ItemsList>
        <div
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#6b7280",
            marginBottom: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Your items
        </div>
        {items.map((item, index) => (
          <ItemCard key={item.id} onClick={() => toggleItem(item.id)}>
            {item.current && <NextItemIndicator>Next</NextItemIndicator>}
            <ItemCheckbox checked={item.checked}>
              {item.checked && "✓"}
            </ItemCheckbox>
            <ItemName checked={item.checked}>
              <strong>{item.name}</strong>
              <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                {item.aisle}
              </div>
            </ItemName>
          </ItemCard>
        ))}
      </ItemsList>

      <FloatingActions>
        <ActionButton>🔔 Get ticket</ActionButton>
        <ActionButton>📍 Recenter</ActionButton>
      </FloatingActions>

      {completedCount === items.length && (
        <Link to="/" style={{ textDecoration: "none" }}>
          <CompleteButton>Complete shopping ✓</CompleteButton>
        </Link>
      )}
    </Container>
  );
}
