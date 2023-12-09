import Cards from "../components/Cards";

function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-purple-600 p-2">
      <div className="bg-purple-400 w-fit mx-auto p-2 rounded-md mb-4">
        <h1 className="text-6xl">Happy Birthday Madison!!</h1>
        <p className="text-white mt-2">
          Play this game I made you and match some things you like. I love you
          and I hope you have a good birthday!! Refresh the page if you want to
          play again
        </p>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
