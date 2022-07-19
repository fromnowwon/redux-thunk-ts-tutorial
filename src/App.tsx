import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/index";
import { useState } from "react";
import { GetPokemon } from "./store/actions/PokemonActions";

function App() {
	const dispatch = useDispatch();
	const [pokemonName, setPokemonName] = useState("");
	const pokemonState = useSelector((state: RootStore) => state.pokemon);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPokemonName(event.target.value);
	};
	const handleSubmit = () => dispatch(GetPokemon(pokemonName) as any);

	console.log(pokemonState);

	return (
		<div className="App">
			<input type="text" onChange={handleChange} />
			<button onClick={handleSubmit}>Search</button>
			<div>
				{pokemonState.pokemon && (
					<div>
						<h1>{pokemonState.pokemon.name}</h1>
						<img src={pokemonState.pokemon.sprites.front_default} alt="" />
						<h2>Abilities</h2>
						{pokemonState.pokemon.abilities.map(ability => {
							return <p>{ability.ability.name}</p>
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
