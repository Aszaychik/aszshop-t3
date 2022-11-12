import card from "../components/card";
import Jumbotron from "../components/jumbotron";
import navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <header>{navbar()}</header>
      <main>
        {Jumbotron()}
        {card()}
      </main>
    </>
  );
};

export default Home;
