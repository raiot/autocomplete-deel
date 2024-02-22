interface IPokemonApiResponse {
    descriptions: {
        description: string;
        language: {
            name: string;
            url: string;
        };
    }[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: {
        language: {
            name: string;
            url: string;
        };
        name: string;
    }[];
    pokemon_entries: Pokemon[];
}

type Pokemon = {
    entry_number: number;
    pokemon_species: {
        name: string;
        url: string;
    };
}

type CacheStrategy = 'local' | 'session';