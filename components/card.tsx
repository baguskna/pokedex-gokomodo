import Images from "next/image";
import Link from "next/link";

import { cardBackground } from "../shared/helpers";
import Badge from "./badges";

const Card = ({ pokemon }: any) => {
  const pokemonType = pokemon.types[0].type.name;
  const cardBackgroundColor =
    cardBackground[pokemonType as keyof typeof cardBackground];

  return (
    <Link href={`/${pokemon.name}`}>
      <a className="cursor-pointer contents">
        <article
          className="rounded-xl p-4 w-[calc(50%_-_6px)] mb-3"
          style={{ backgroundColor: `${cardBackgroundColor}80` }}
        >
          <figure className="text-center">
            <Images
              className="my-auto flex"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt="test"
              width="162px"
              height="162px"
              loading="lazy"
            />
          </figure>
          <p className="text-base">#{pokemon.id}</p>
          <h2 className="text-xl font-bold capitalize mb-2">{pokemon.name}</h2>
          {pokemon.types.map((type: any, index: number) => {
            return <Badge key={index} type={type} />;
          })}
        </article>
      </a>
    </Link>
  );
};

export default Card;
