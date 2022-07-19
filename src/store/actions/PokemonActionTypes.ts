export const  POKEMON_LOADING = "POKEMON_LOADING";
export const  POKEMON_FAIL = "POKEMON_FAIL";
export const  POKEMON_SUCCESS = "POKEMON_SUCCESS";

export type PokemonType = {
	name: string,
	abilities: PokemonAbility[],
	sprites: PokemonSprites,
	stats: PokemonStats[],
}

export type PokemonAbility = {
	ability: {
		name: string,
		url: string,
	}
}

export type PokemonSprites = {
	front_default: string,
}

type PokemonStats = {
	base_stat: number,
	stat: {
		name: string,
	}
}

interface PokemonLoading {
	type: typeof POKEMON_LOADING,
}

interface PokemonFail {
	type: typeof POKEMON_FAIL,
}

interface PokemonSuccess {
	type: typeof POKEMON_SUCCESS,
	payload: {
		name: string,
		abilities: PokemonAbility[],
		sprites: PokemonSprites,
		stats: PokemonStats[],
	},
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess;
