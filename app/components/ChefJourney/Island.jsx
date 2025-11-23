import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const IslandContainer = styled(motion.div)`
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: ${props => `linear-gradient(135deg, ${props.$color}15 0%, ${props.$color}05 100%)`};
  position: relative;
  overflow-y: auto;
  scroll-snap-align: start;
`;

const IslandContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const IslandHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const IslandIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const IslandTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${props => props.$color};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const IslandSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: #555;
  margin: 0.5rem 0 0 0;
  font-style: italic;
`;

const IslandAulas = styled.p`
  font-size: 1rem;
  color: #888;
  margin: 0.5rem 0 0 0;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid ${props => props.$color};
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.$color};
  margin: 0 0 1rem 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
`;

const ListItem = styled.li`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '${props => props.$icon || "▸"}';
    position: absolute;
    left: 0;
    color: ${props => props.$color};
    font-size: 1.2rem;
  }
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ImageCard = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  aspect-ratio: 4/3;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${props => props.$color}40;
`;

const ImagePlaceholder = styled.div`
  text-align: center;
  color: #999;
  padding: 1rem;
  
  p {
    margin: 0.5rem 0 0 0;
    font-size: 0.9rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Island({ island }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <IslandContainer $color={island.color}>
      <IslandContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <IslandHeader as={motion.div} variants={itemVariants}>
          <IslandIcon>{island.icon}</IslandIcon>
          <IslandTitle $color={island.color}>{island.title}</IslandTitle>
          <IslandSubtitle>{island.subtitle}</IslandSubtitle>
          <IslandAulas>{island.aulas}</IslandAulas>
        </IslandHeader>

        <Description as={motion.p} variants={itemVariants}>
          {island.description}
        </Description>

        {island.activities && (
          <Section as={motion.div} variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>📋 Atividades Realizadas</SectionTitle>
            <List>
              {island.activities.map((activity, idx) => (
                <ListItem key={idx} $color={island.color} $icon="✓">
                  {activity}
                </ListItem>
              ))}
            </List>
          </Section>
        )}

        {island.hmwQuestions && (
          <Section as={motion.div} variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>❓ How Might We Questions</SectionTitle>
            <List>
              {island.hmwQuestions.map((q, idx) => (
                <ListItem key={idx} $color={island.color} $icon="?">
                  {q}
                </ListItem>
              ))}
            </List>
          </Section>
        )}

        {island.topIdeas && (
          <Section as={motion.div} variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>💡 Ideias Mais Votadas</SectionTitle>
            <List>
              {island.topIdeas.map((idea, idx) => (
                <ListItem key={idx} $color={island.color} $icon="★">
                  {idea}
                </ListItem>
              ))}
            </List>
          </Section>
        )}

        {island.finalIntentStatement && (
          <Section as={motion.div} variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>🎯 Intent Statement Final</SectionTitle>
            <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#333', lineHeight: '1.8' }}>
              "{island.finalIntentStatement}"
            </p>
          </Section>
        )}

        {island.businessModelAspects && (
          <Section as={motion.div} variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>💼 Business Model Canvas</SectionTitle>
            <List>
              {island.businessModelAspects.map((aspect, idx) => (
                <ListItem key={idx} $color={island.color}>
                  {aspect}
                </ListItem>
              ))}
            </List>
          </Section>
        )}

        {island.criticalReflection && (
          <TwoColumnSection as={motion.div} variants={itemVariants}>
            <Section $color="#e74c3c">
              <SectionTitle $color="#e74c3c">⚠️ Críticas ao DT (Natasha Jen)</SectionTitle>
              <List>
                {island.criticalReflection["Natasha Jen - Design Thinking is Bullshit"].map((point, idx) => (
                  <ListItem key={idx} $color="#e74c3c" $icon="−">
                    {point}
                  </ListItem>
                ))}
              </List>
            </Section>
            <Section $color="#27ae60">
              <SectionTitle $color="#27ae60">✓ Nossa Defesa do DT</SectionTitle>
              <List>
                {island.criticalReflection["Nossa defesa do DT"].map((point, idx) => (
                  <ListItem key={idx} $color="#27ae60" $icon="+">
                    {point}
                  </ListItem>
                ))}
              </List>
            </Section>
          </TwoColumnSection>
        )}

        {island.learnings && (
          <Section as={motion.div} variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>📚 Aprendizagens</SectionTitle>
            <List>
              {island.learnings.map((learning, idx) => (
                <ListItem key={idx} $color={island.color} $icon="→">
                  {learning}
                </ListItem>
              ))}
            </List>
          </Section>
        )}

        {/* Grid de Fotos */}
        <Section as={motion.div} variants={itemVariants} $color={island.color}>
          <SectionTitle $color={island.color}>📸 Fotos das Aulas</SectionTitle>
          <ImagesGrid>
            {island.images && island.images.length > 0 ? (
              island.images.map((img, idx) => (
                <ImageCard
                  key={idx}
                  $color={island.color}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image src={img} alt={`${island.title} - Foto ${idx + 1}`} />
                </ImageCard>
              ))
            ) : (
              // Placeholders para quando não houver fotos
              <>
                {[1, 2, 3, 4].map(i => (
                  <ImageCard key={i} $color={island.color}>
                    <ImagePlaceholder>
                      <span style={{ fontSize: '2rem' }}>📷</span>
                      <p>Adicione suas fotos aqui</p>
                    </ImagePlaceholder>
                  </ImageCard>
                ))}
              </>
            )}
          </ImagesGrid>
        </Section>
      </IslandContent>
    </IslandContainer>
  );
}

