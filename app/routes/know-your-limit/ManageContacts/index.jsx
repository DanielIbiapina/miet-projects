import { useState } from "react";
import { useNavigate } from "react-router";
import { mockTrustedContacts } from "../utils/mockData";
import { BottomNav } from "../components/BottomNav";
import {
  Container,
  SafeArea,
  Header,
  HeaderTitle,
  BackButton,
  Content,
  ContactsList,
  ContactItem,
  ContactInfo,
  ContactName,
  ContactPhone,
  ContactRelation,
  ContactActions,
  DeleteButton,
  AddButton,
  AddButtonText,
  EmptyState,
  EmptyText,
  PrimaryBadge,
} from "./styles";

export function meta() {
  return [
    { title: "Manage Contacts - Omni Feeling" },
    {
      name: "description",
      content: "Manage your trusted contacts",
    },
  ];
}

export default function ManageContactsScreen() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("trustedContacts");
    return saved ? JSON.parse(saved) : mockTrustedContacts;
  });

  const handleDelete = (contactId) => {
    const updated = contacts.filter(c => c.id !== contactId);
    setContacts(updated);
    localStorage.setItem("trustedContacts", JSON.stringify(updated));
  };

  const handleAdd = () => {
    // Simular adição de contato (em produção, abriria modal ou navegaria para tela de adicionar)
    const newContact = {
      id: `contact_${Date.now()}`,
      name: "New Contact",
      phone: "+1 (555) 000-0000",
      relationship: "Friend",
      isPrimary: false,
      lastContacted: null,
    };
    
    const updated = [...contacts, newContact];
    setContacts(updated);
    localStorage.setItem("trustedContacts", JSON.stringify(updated));
  };

  return (
    <Container>
      <SafeArea>
        <Header>
          <BackButton onClick={() => navigate("/know-your-limit/profile")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </BackButton>
          <HeaderTitle>Trusted Contacts</HeaderTitle>
          <div style={{ width: "24px" }} />
        </Header>

        <Content>
          {contacts.length === 0 ? (
            <EmptyState>
              <EmptyText>No contacts added</EmptyText>
              <EmptyText style={{ fontSize: "0.875rem", opacity: 0.7, marginTop: "0.5rem" }}>
                Add trusted contacts who can help in emergencies
              </EmptyText>
            </EmptyState>
          ) : (
            <ContactsList>
              {contacts.map((contact) => (
                <ContactItem key={contact.id}>
                  <ContactInfo>
                    <ContactName>
                      {contact.name}
                      {contact.isPrimary && <PrimaryBadge>PRIMARY</PrimaryBadge>}
                    </ContactName>
                    <ContactPhone>{contact.phone}</ContactPhone>
                    <ContactRelation>{contact.relationship}</ContactRelation>
                  </ContactInfo>
                  <ContactActions>
                    <DeleteButton onClick={() => handleDelete(contact.id)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </DeleteButton>
                  </ContactActions>
                </ContactItem>
              ))}
            </ContactsList>
          )}

          <AddButton onClick={handleAdd}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            <AddButtonText>Add Contact</AddButtonText>
          </AddButton>
        </Content>

        <BottomNav />
      </SafeArea>
    </Container>
  );
}

