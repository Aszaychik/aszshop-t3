import card from "../components/card";
import Jumbotron from "../components/jumbotron";
import navbar from "../components/navbar";
import { trpc } from "../utils/trpc";

const Home = () => {
  const { data } = trpc.productsRouter.getProdutcs.useQuery("testProd");
  return (
    <>
      <header>{navbar()}</header>
      <main>
        {Jumbotron()}
        <article>
          {card()}
          {/* <h1>Test API</h1>
          <p>Name : {data?.name}</p>
          <p>Categories : {data?.categories}</p>
          <p>Price : Rp.{data?.price}</p>
          <p>Stock : Rp.{data?.stock}</p> */}
        </article>
      </main>
    </>
  );
};

export default Home;
