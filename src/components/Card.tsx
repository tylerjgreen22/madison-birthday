export default function Card({
  card,
  index,
  clickhandler,
}: {
  card: {
    status: string;
    img: string;
    name: string;
  };
  index: number;
  clickhandler: (index: number) => void;
}) {
  return (
    <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
      <img src={card.img} alt={card.name} />
    </div>
  );
}
