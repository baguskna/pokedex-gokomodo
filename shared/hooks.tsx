import { useRef, useState, useEffect } from "react";
import useSWR from "swr";

export const usePokemons = (limit: number) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
    (apiURL: string) =>
      fetch(apiURL)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const results = data.results;
          const fetchAllData = results.map((result: any) => {
            return fetch(result.url).then((response) => response.json());
          });
          return Promise.all(fetchAllData);
        })
        .then((data) => {
          return data;
        })
  );

  return {
    data,
    error,
  } as const;
};

export const usePokemonDetail = (name: string) => {
  const { data, error } = useSWR(
    name ? `https://pokeapi.co/api/v2/pokemon/${name}` : null,
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );

  return {
    data,
    error,
  } as const;
};

export const useElementOnScreen = () => {
  const [limit, setLimit] = useState<number>(40);
  const containerRef = useRef(null);

  const cbFunction = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setLimit((prev) => {
        return prev + 20;
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cbFunction);
    const div = containerRef.current as unknown as Element;
    observer.observe(div);
    return () => observer.disconnect();
  }, [containerRef]);

  return {
    limit,
    containerRef,
  } as const;
};
