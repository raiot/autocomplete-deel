const url = import.meta.env.VITE_API_URL;

const fetchPokemon = async ():Promise<IPokemonApiResponse> => {
    const response = await fetch(url);
    if(response.ok) {
        return response.json();
    }
    return {} as IPokemonApiResponse;
}

export {
    fetchPokemon
}