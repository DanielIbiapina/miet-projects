import { useLocation } from "react-router";
import { Link } from "react-router";
import { NavContainer, NavItem, NavIcon, NavLabel } from "./styles";

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { 
      path: "/know-your-limit", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      label: "Home" 
    },
    { 
      path: "/know-your-limit/history", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      label: "History" 
    },
    { 
      path: "/know-your-limit/profile", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      label: "Profile" 
    },
  ];

  return (
    <NavContainer>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <NavItem 
            key={item.path} 
            to={item.path}
            $active={isActive}
          >
            <NavIcon $active={isActive}>{item.icon}</NavIcon>
            <NavLabel $active={isActive}>{item.label}</NavLabel>
          </NavItem>
        );
      })}
    </NavContainer>
  );
}

