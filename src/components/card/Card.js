import { useState } from "react";
import styled from "styled-components";
import "./Card.css";

function Card({ question, answer, tags, bookmarked }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <StyledCard>
      <Bookmark>
        <BookmarkIcon
          alt="bookmark-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          {bookmarked ? (
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          ) : (
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
          )}
        </BookmarkIcon>
      </Bookmark>
      <Question>{question}</Question>
      <AnswerButton
        onClick={() =>
          setShowAnswer((previousShowAnswer) => !previousShowAnswer)
        }
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </AnswerButton>
      <Answer>{answer}</Answer>
      <ul className="card__tags-list">
        {tags.map((tag) => (
          <li key={tag} className="card__tag">
            {tag}
          </li>
        ))}
      </ul>
    </StyledCard>
  );
}

export default Card;

const StyledCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  min-height: 300px;
  width: 97%;
  min-width: 300px;
  max-width: 450px;
  background-color: var(--color-card);
  margin: 0px auto;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 10px 10px 7px var(--color-card-shaddow);
  list-style: none;
  text-align: center;
`;

const Bookmark = styled.button`
  position: absolute;
  top: -17px;
  right: 25px;
  width: 3.5rem;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
`;

const BookmarkIcon = styled.svg`
  fill: var(--color-sticky);
  width: 100%;
`;

const Question = styled.p`
  font-size: 1.2rem;
  margin-top: 35px;
`;

const AnswerButton = styled.button`
  padding: 0.5rem;
  background-color: var(--color-background);
  border-radius: 0.5rem;
  font-size: 1.3rem;
  cursor: pointer;
`;

const Answer = styled.p`
  font-size: 1rem;
  background-color: var(--color-background);
  padding: 50px;
  width: 95%;
  border-radius: 10px;
  transform: {
    showanswer?"scale(1)" : "scale(0)";
  }
  transition: 0.5s ease;
`;
