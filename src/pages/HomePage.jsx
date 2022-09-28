import Card from "../components/card/Card.js";

export default function HomePage({ cards }) {
  return (
    <ul className="content-wrapper">
      {/*class defined in App.css -> re-write into styled component!*/}
      {cards.map(({ id, question, answer, tags, bookmarked }) => (
        <Card
          key={id}
          question={question}
          answer={answer}
          tags={tags}
          bookmarked={bookmarked}
        />
      ))}
    </ul>
  );
}
