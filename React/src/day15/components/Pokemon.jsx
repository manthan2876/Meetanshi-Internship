import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-white mx-auto mb-4"></div>
          <h1 className="text-4xl font-bold text-white animate-pulse">
            Loading Pokémon...
          </h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600">
        <div className="bg-white rounded-lg p-8 shadow-xl text-center max-w-md mx-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong</h1>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 py-8 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg break-words">
            Let's Catch{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Pokémon
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium px-4">
            Discover and explore amazing Pokémon from the Pokédex
          </p>
        </header>

        <div className="mb-12 flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-4 text-lg border-0 rounded-2xl shadow-xl focus:ring-4 focus:ring-white/30 focus:outline-none bg-white/90 backdrop-blur-sm placeholder-gray-500 font-medium transition-all duration-300"
            />
          </div>
        </div>

        <div className="text-center mb-8 px-4">
          <p className="text-white/90 text-lg font-semibold break-words">
            {searchData.length === 0 && search ? (
              <span className="text-yellow-300">No Pokémon found matching "{search}"</span>
            ) : (
              <span>
                Showing {searchData.length} Pokémon
                {search && <span className="text-yellow-300"> for "{search}"</span>}
              </span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
          {searchData.map((curPokemon) => {
            return (
              <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
            );
          })}
        </div>

        {searchData.length === 0 && search && (
          <div className="text-center mt-16 px-4">
            <div className="text-8xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Pokémon Found</h3>
            <p className="text-white/70">Try searching with a different name</p>
          </div>
        )}
      </div>
    </div>
  );
};
