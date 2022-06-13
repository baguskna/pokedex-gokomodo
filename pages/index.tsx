import type { NextPage } from "next";

import Card from "../components/card";
import Header from "../components/header";
import Skeleton from "../components/skeleton";
import { useElementOnScreen, usePokemons } from "../shared/hooks";
import { PokemonDetail } from "../shared/interfaces";

const isLoading = () => {
  return Array.from({ length: 20 }).map((_, index) => <Skeleton key={index} />);
};

const Home: NextPage = () => {
  const { limit, containerRef } = useElementOnScreen();
  const { data, error } = usePokemons(limit);

  return (
    <div>
      <Header />
      <section className="w-full max-w-xl mx-auto mt-12 px-4 h-full md:px-0 flex justify-between flex-wrap mt-14">
        {!data
          ? isLoading()
          : data?.map((pokemon: PokemonDetail, index: number) => {
              return <Card key={index} pokemon={pokemon} />;
            })}

        <div
          ref={containerRef}
          aria-label="bottom-page"
          data-testid="bottom-page"
        ></div>
      </section>
    </div>
  );
};

export default Home;
