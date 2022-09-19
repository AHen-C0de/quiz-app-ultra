import "./Card.css";

function Card() {
  return (
    <div className="card">
      <button className="card__bookmark-icon">
        <svg
          alt="bookmark-icon"
          className="bookmark-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
        </svg>
      </button>
      <p className="card__question">Question</p>
      <button className="card__answer-button">Show Answer</button>
      <p className="card__answer">Some Answer Text</p>
      <ul className="card__tags-list">
        <li className="card__tag">#HTML</li>
        <li className="card__tag">#CSS</li>
        <li className="card__tag">#JavaScript</li>
      </ul>
    </div>
  );
}

export default Card;
