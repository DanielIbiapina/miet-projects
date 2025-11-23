import { Link } from "react-router";
import {
  Container,
  Header,
  BackButton,
  Title,
  SearchBar,
  StoreList,
  StoreCard,
  StoreLogo,
  StoreInfo,
  StoreName,
  StoreDistance,
  StoreAddress,
  ArrowIcon,
} from "./styles";

export function meta() {
  return [
    { title: "Select Store - Flash Shopping" },
    {
      name: "description",
      content: "Choose the supermarket where you'll shop",
    },
  ];
}

export default function SelectStore() {
  const stores = [
    {
      id: 1,
      name: "Pingo Doce",
      distance: "0.5 km",
      address: "Rua da Boavista, 123",
      logo: "🛒",
    },
    {
      id: 2,
      name: "Continente",
      distance: "1.2 km",
      address: "Av. dos Aliados, 456",
      logo: "🏪",
    },
    {
      id: 3,
      name: "Mercadona",
      distance: "1.8 km",
      address: "Rua de Santa Catarina, 789",
      logo: "🏬",
    },
    {
      id: 4,
      name: "Lidl",
      distance: "2.3 km",
      address: "Rua do Campo Alegre, 321",
      logo: "🛍️",
    },
  ];

  return (
    <Container>
      <Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BackButton>←</BackButton>
        </Link>
        <Title>Select Store</Title>
      </Header>

      <SearchBar type="text" placeholder="Search for stores..." />

      <StoreList>
        {stores.map((store) => (
          <Link
            key={store.id}
            to="/shopping-list"
            style={{ textDecoration: "none" }}
          >
            <StoreCard>
              <StoreLogo>{store.logo}</StoreLogo>
              <StoreInfo>
                <StoreName>{store.name}</StoreName>
                <StoreDistance>{store.distance}</StoreDistance>
                <StoreAddress>{store.address}</StoreAddress>
              </StoreInfo>
              <ArrowIcon>→</ArrowIcon>
            </StoreCard>
          </Link>
        ))}
      </StoreList>
    </Container>
  );
}
