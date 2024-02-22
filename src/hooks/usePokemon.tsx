import { useEffect, useState } from 'react';
import { fetchPokemon } from '../lib/pokemon.fetcher';
import { useCache } from './useCache';

export function usePokemon() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const cache = useCache('local')

    const resetError = () => {
        setError(null);
    }

    const resetPokemon = () => {
        setPokemon([]);
    }

    useEffect(() => {
        async function getPokemon() {
            try {
                const pokeData = cache.get('pokemon');
                console.log(pokeData);
                if (pokeData && pokeData?.pokemon_entries) {
                    setPokemon(pokeData?.pokemon_entries || []);
                    return;
                } else {
                    const pokeData = await fetchPokemon();
                    setPokemon(pokeData?.pokemon_entries || []);
                }
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError('An unknown error occurred with the Pokémon API. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        }
        setLoading(true);
        getPokemon();
    }, [])

    return {
        pokemon,
        error,
        loading,
        resetError,
        resetPokemon
    };
}