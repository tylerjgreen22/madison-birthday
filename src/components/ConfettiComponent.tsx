import Confetti from "react-confetti";

function ConfettiComponent() {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={200}
    />
  );
}

export default ConfettiComponent;
