import Jumbotron from "../components/jumbotron";
import navbar from "../components/navbar";

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