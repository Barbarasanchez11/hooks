import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters';
import Card from './components/Card';

function App() {
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
    const urlRick = 'https://rickandmortyapi.com/api/character/1';

    const { character, error, isLoading } = useFetchCharacters(urlPokemon);
    const { character: rickCharacter, error: errorRick, isLoading: isLoadingRick } = useFetchCharacters(urlRick);
  
    if (isLoading || isLoadingRick) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="app">
            <Card title="Personaje Pokémon" name={character.name} image={character.sprites.front_default} />
            <Card title="Personaje Rick and Morty" name={rickCharacter.name} image={rickCharacter.image} />
        </div>
    );
}

export default App;