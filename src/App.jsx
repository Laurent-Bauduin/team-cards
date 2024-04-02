import { useState } from "react";
import Card from "./components/Card";

const members = [
  {
    firstName: "Fanny",
    lastName: "Prêtre",
    image: "https://www.stickees.com/files/funny/shrek/4272-donkey-sticker.png",
    job: "Web Developer",
    quote: "!false : le plus drôle c'est que c'est vrai...",
  },
  {
    firstName: "Mohamed",
    lastName: "Jebri",
    image:
      "https://www.stickees.com/files/halloween/awesome-halloween/6626-geek-zombie-sticker.png",
    job: "Web Developer",
    quote: "La vie est une guerre que nul ne peut gagner ",
  },
  {
    firstName: "Jeviraj",
    lastName: "Jeyaratnam",
    image:
      "https://www.stickees.com/files/avatars/character-avatars/1490-troll-sticker.png",
    job: "Web Developer",
    quote: "Bon dev",
  },
  {
    firstName: "Laurent",
    lastName: "Bauduin",
    image:
      "https://www.stickees.com/files/avatars/character-avatars/1494-zombie-sticker.png",
    job: "Web Developer",
    quote: "React c'est cool",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="styleCard">
      {members.map((member, index) => (
        <Card key={index} member={member} />
      ))}
    </div>
  );
}

export default App;
