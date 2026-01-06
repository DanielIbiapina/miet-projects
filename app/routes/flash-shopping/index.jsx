import { Link } from "react-router";
import {
  Container,
  Hero,
  LogoIcon,
  Title,
  Subtitle,
  Tagline,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureNumber,
  FeatureTitle,
  FeatureText,
  CTASection,
  Button,
  SecondaryButton,
  Footer,
  FooterLink,
} from "./styles";

export function meta() {
  return [
    { title: "Flash Shopping - Smart Shopping" },
    {
      name: "description",
      content: "Find your products quickly in the supermarket",
    },
  ];
}

export default function Home() {
  return (
    <Container>
      <Hero>
        <LogoIcon>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
          </svg>
        </LogoIcon>
        <Title>Flash Shopping</Title>
        <Subtitle>Your shopping faster and smarter</Subtitle>
        <Tagline>Navigate the supermarket with optimized routes</Tagline>
      </Hero>

      <StatsGrid>
        <StatCard>
          <StatNumber>60%</StatNumber>
          <StatLabel>Faster</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>100%</StatNumber>
          <StatLabel>Free</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>0</StatNumber>
          <StatLabel>Ads</StatLabel>
        </StatCard>
      </StatsGrid>

      <FeaturesSection>
        <SectionTitle>How it works</SectionTitle>

        <FeaturesGrid>
          <FeatureCard>
            <FeatureNumber>1</FeatureNumber>
            <FeatureTitle>Create your list</FeatureTitle>
            <FeatureText>
              Add products and specify your favorite brands quickly and easily
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureNumber>2</FeatureNumber>
            <FeatureTitle>Smart routing</FeatureTitle>
            <FeatureText>
              Algorithm calculates the most efficient path to collect all items
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureNumber>3</FeatureNumber>
            <FeatureTitle>Navigate with ease</FeatureTitle>
            <FeatureText>
              Follow visual instructions and save time on your shopping
            </FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <CTASection>
        <Link
          to="/flash-shopping/select-store"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button>Get started</Button>
        </Link>
        <Link
          to="/flash-shopping/navigation"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <SecondaryButton>View demo</SecondaryButton>
        </Link>
      </CTASection>

      <Footer>
        <Link to="/chef-journey" style={{ textDecoration: "none" }}>
          <FooterLink>
            👨‍🍳 Chef's Journey - Design Thinking Project
          </FooterLink>
        </Link>
      </Footer>
    </Container>
  );
}

