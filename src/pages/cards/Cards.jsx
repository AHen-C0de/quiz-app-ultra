import Card from "../../components/card/Card.js";

export default function Cards({ cards }) {
  return cards.map(({ id, question, answer, tags, bookmarked }) => (
    <Card
      key={id}
      question={question}
      answer={answer}
      tags={tags}
      bookmarked={bookmarked}
    />
  ));
}
