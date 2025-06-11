export const PokemonCard = ({ pokemonData }) => {
  // Function to get type-based colors
  const getTypeColor = (type) => {
    const typeColors = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-500",
      ice: "bg-blue-300",
      fighting: "bg-red-700",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-500",
      bug: "bg-green-400",
      rock: "bg-yellow-800",
      ghost: "bg-purple-700",
      dragon: "bg-indigo-700",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
    };
    return typeColors[type] || "bg-gray-400";
  };

  const primaryType = pokemonData.types[0]?.type.name;

  return (
    <div className="group relative w-full max-w-sm mx-auto">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/20 backdrop-blur-sm h-full flex flex-col">
        {/* Pokemon Image Section */}
        <div className={`relative p-6 ${getTypeColor(primaryType)} bg-gradient-to-br flex-shrink-0`}>
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-white font-bold text-xs">#{pokemonData.id}</span>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
              <img
                src={pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.front_default}
                alt={pokemonData.name}
                className="relative w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = pokemonData.sprites.front_default;
                }}
              />
            </div>
          </div>
        </div>

        {/* Pokemon Info Section */}
        <div className="p-4 flex-grow flex flex-col">
          {/* Name */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center capitalize truncate">
            {pokemonData.name}
          </h2>

          {/* Types */}
          <div className="flex justify-center gap-1 mb-4 flex-wrap">
            {pokemonData.types.map((curType, index) => (
              <span
                key={index}
                className={`${getTypeColor(curType.type.name)} text-white px-3 py-1 rounded-full text-xs font-semibold capitalize shadow-md flex-shrink-0`}
              >
                {curType.type.name}
              </span>
            ))}
          </div>

          {/* Basic Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center bg-gray-50 rounded-lg p-2">
              <div className="text-lg font-bold text-gray-800 truncate">{pokemonData.height}</div>
              <div className="text-xs text-gray-600 font-medium">Height</div>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-2">
              <div className="text-lg font-bold text-gray-800 truncate">{pokemonData.weight}</div>
              <div className="text-xs text-gray-600 font-medium">Weight</div>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-2">
              <div className="text-lg font-bold text-gray-800 truncate">{pokemonData.stats[5].base_stat}</div>
              <div className="text-xs text-gray-600 font-medium">Speed</div>
            </div>
          </div>

          {/* Advanced Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mt-auto">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-2">
              <div className="text-sm font-bold text-blue-700 truncate">{pokemonData.base_experience}</div>
              <div className="text-xs text-blue-600 font-medium">Exp</div>
            </div>
            <div className="text-center bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-2">
              <div className="text-sm font-bold text-red-700 truncate">{pokemonData.stats[1].base_stat}</div>
              <div className="text-xs text-red-600 font-medium">Attack</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-2">
              <div className="text-xs font-bold text-green-700 capitalize leading-tight truncate" title={pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0, 1).join(", ")}>
                {pokemonData.abilities
                  .map((abilityInfo) => abilityInfo.ability.name)
                  .slice(0, 1)
                  .join(", ")}
              </div>
              <div className="text-xs text-green-600 font-medium">Ability</div>
            </div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
      </div>
    </div>
  );
};
