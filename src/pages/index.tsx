import card from "../components/card";
import Jumbotron from "../components/jumbotron";
import navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <header>{navbar()}</header>
      <main>
        {Jumbotron()}
        <article>{card()}</article>
      </main>
    </>
  );
};

export default Home;
