import { useState } from "react";

function Card({ member }) {
  let [quote, setQuote] = useState("");

  const handleClick = () => {
    setQuote(member.quote);
  };
  const handleClear = () => {
    setQuote("");
  };

  return (
    <figure>
      <img src={member.image} alt={member.firstname} />
      <p>
        {member.firstName} {member.lastName}
      </p>
      <p> {member.job}</p>
      <button onClick={quote === member.quote ? handleClear : handleClick}>
        Quote
      </button>
      <p>{quote}</p>
    </figure>
  );
}

export default Card;

//<button onClick={handleClick}
//{quote === member.quote ? handleClear : handleClick}> Quote
//</button>
