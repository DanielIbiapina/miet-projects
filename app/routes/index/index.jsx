import { Link } from "react-router";
import {
  Container,
  Hero,
  Title,
  Subtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectIcon,
  ProjectTitle,
  ProjectDescription,
  ArrowIcon,
} from "./styles";

export function meta() {
  return [
    { title: "Projetos de Mestrado" },
    {
      name: "description",
      content: "Portal para projetos de mestrado",
    },
  ];
}

export default function ProjectsIndex() {
  const projects = [
    {
      id: 1,
      name: "Flash Shopping",
      description: "Aplicativo para otimização de compras em supermercados",
      icon: "⚡",
      path: "/flash-shopping",
      color: "#6366f1",
    },
    {
      id: 2,
      name: "Chef's Journey",
      description: "Design Thinking Project - Jornada do Chef",
      icon: "👨‍🍳",
      path: "/chef-journey",
      color: "#8b5cf6",
    },
    {
      id: 3,
      name: "Omni Feeling",
      description:
        "Serviço de conscientização sobre álcool baseado em wearable",
      icon: "🍷",
      path: "/know-your-limit",
      color: "#D47FE3",
    },
  ];

  return (
    <Container>
      <Hero>
        <Title>Meus Projetos</Title>
        <Subtitle>Portal para projetos de mestrado</Subtitle>
      </Hero>

      <ProjectsGrid>
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.path}
            style={{ textDecoration: "none" }}
          >
            <ProjectCard $color={project.color}>
              <ProjectIcon>{project.icon}</ProjectIcon>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ArrowIcon>→</ArrowIcon>
            </ProjectCard>
          </Link>
        ))}
      </ProjectsGrid>
    </Container>
  );
}
