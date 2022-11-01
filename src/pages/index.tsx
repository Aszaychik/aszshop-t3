
import Jumbotron from "./jumbotron";
import modal from "./modal";
import navbar from "./navbar";

const Home = () => {
  return (
    <>
    <header>
      {navbar()}
    </header>
    <main>
      {Jumbotron()}
    </main>
    </>
  );
};

export default Home;