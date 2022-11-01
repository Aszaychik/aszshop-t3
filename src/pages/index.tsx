
import Jumbotron from "./jumbotron";
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