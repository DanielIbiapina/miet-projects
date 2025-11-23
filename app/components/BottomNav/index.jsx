import { useLocation } from "react-router";
import { NavContainer, NavItem, NavIcon, NavLabel } from "./styles";

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: "🏠", label: "Início" },
    { path: "/select-store", icon: "🏪", label: "Lojas" },
    { path: "/shopping-list", icon: "📝", label: "Lista" },
    { path: "/navigation", icon: "🗺️", label: "Navegar" },
  ];

  return (
    <NavContainer>
      {navItems.map((item) => (
        <NavItem 
          key={item.path} 
          to={item.path}
          active={location.pathname === item.path}
        >
          <NavIcon>{item.icon}</NavIcon>
          <NavLabel>{item.label}</NavLabel>
        </NavItem>
      ))}
    </NavContainer>
  );
}

