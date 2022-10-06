import styled from "styled-components";

import Card from "../components/card/Card.js";

export default function CardsPage({ cards }) {
  return (
    <CardsContainer>
      {cards.map(({ id, question, answer, tags, bookmarked }) => (
        <Card
          key={id}
          question={question}
          answer={answer}
          tags={tags}
          bookmarked={bookmarked}
        />
      ))}
    </CardsContainer>
  );
}

const CardsContainer = styled.ul`
  padding: 20px;
  margin: 1.5rem auto 1.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 40px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
