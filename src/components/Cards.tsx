import { useState, useRef } from "react";
import Card from "./Card";
import frog from "../assets/frog.jpg";
import dog from "../assets/dog.webp";
import dog2 from "../assets/dog2.webp";
import disney from "../assets/disney-adult.jpg";
import turtle from "../assets/sea-turtle.jpg";
import taylor from "../assets/white-girl.jpg";

export default function Cards() {
  const [cards, setCards] = useState(
    [
      { id: 0, name: "Frog", status: "", img: frog },
      { id: 0, name: "Frog", status: "", img: frog },
      { id: 1, name: "Dog", status: "", img: dog },
      { id: 1, name: "Dog", status: "", img: dog },
      { id: 2, name: "Isabelle", status: "", img: dog2 },
      { id: 2, name: "Isabelle", status: "", img: dog2 },
      { id: 3, name: "Disney", status: "", img: disney },
      { id: 3, name: "Disney", status: "", img: disney },
      { id: 4, name: "Turtle", status: "", img: turtle },
      { id: 4, name: "Turtle", status: "", img: turtle },
      { id: 5, name: "Taylor", status: "", img: taylor },
      { id: 5, name: "Taylor", status: "", img: taylor },
    ].sort(() => Math.random() - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);

  const matchCheck = (currentCard: number) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = "unmatch";
        cards[previousCardState].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickhandler = (index: number) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreviousCardState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("card currently seleted");
    }
  };

  return (
    <div className="container w-5/6">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            index={index}
            clickhandler={clickhandler}
          />
        );
      })}
    </div>
  );
}
