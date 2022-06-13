import { useRouter } from "next/router";
import Images from "next/image";
import Link from "next/link";

import Badge from "../components/badges";
import { cardBackground } from "../shared/helpers";
import { usePokemonDetail } from "../shared/hooks";
import { PokemonDetail } from "../shared/interfaces";

const PokemonDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  const { data, error } = usePokemonDetail(name as string);
  const pokemonType = data?.types[0].type.name;
  const cardBackgroundColor =
    cardBackground[pokemonType as keyof typeof cardBackground];

  return (
    <div
      className="w-full max-w-xl mx-auto h-full pt-3"
      style={{
        backgroundColor: `${cardBackgroundColor}80`,
      }}
    >
      <div className="px-4">
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </Link>
        <p className="text-3xl font-bold mt-3">#{data?.id}</p>
        <h1 className="text-3xl font-bold capitalize mb-2">{data?.name}</h1>
        {data?.types.map((type: PokemonDetail, index: number) => {
          return <Badge key={index} type={type} />;
        })}
        <figure className="text-center">
          <Images
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
            alt={data?.name}
            width="345px"
            height="345px"
            loading="lazy"
          />
        </figure>
      </div>
      <div className="bg-zinc-50 rounded-t-3xl">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2">About</h2>
          <div className="flex">
            <div className="w-1/5">
              <p className="text-lg text-zinc-700">Height :</p>
              <p className="text-lg text-zinc-700">Weight :</p>
              <p className="text-lg text-zinc-700">Abilities :</p>
            </div>
            <div className="w-4/5">
              <p className="text-lg">{data?.height}</p>
              <p className="text-lg">{data?.weight}</p>
              {data?.abilities.map((ability: any, index: number) => {
                return (
                  <p key={index} className="text-lg">
                    {ability.ability.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="px-4 mb-10">
          <h2 className="text-3xl font-bold mb-2">Stats</h2>
          <div>
            {data?.stats.map((stat: any, index: number) => (
              <div key={index} className="flex flex-col mb-2">
                <div className="flex justify-between">
                  <h3 className="text-lg uppercase">{stat.stat.name}</h3>
                  <p className="text-lg">{stat.base_stat}</p>
                </div>
                <div className="flex w-full relative rounded-full h-2 bg-zinc-300">
                  <div
                    className="rounded-full bg-cyan-400 absolute h-full"
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
