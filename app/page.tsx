import PokemonData from "./components/PokemonData";
import MainPage from "./components/MainPage";

const Home = ({ searchParams }: { searchParams?: { query?: string } }) => {
  const query = searchParams?.query || "";
  return (
    <>
      <div>
        <MainPage>
          <PokemonData query={query}></PokemonData>
        </MainPage>
      </div>
    </>
  );
};

export default Home;
