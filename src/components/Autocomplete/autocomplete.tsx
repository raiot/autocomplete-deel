import { useState, useMemo } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import { useDebounce } from '../../hooks/useDebounce';
import Result from './result';
import Search from './search';

const Autocomplete = () => {
    const {pokemon, error, loading, resetError } = usePokemon();
    const [term, setTerm] = useState<string>('');
    const [selectedTerm, setSelectedTerm] = useState<string>('');

    const debouncedTerm = useDebounce(term, 500);

    const filteredPokemon = useMemo(() => {
        if(debouncedTerm === '') return []; //Avoid displaying the whole list from start
        return pokemon.filter(p => {
            return p.pokemon_species.name.includes(debouncedTerm)
        });
    }
    , [debouncedTerm, pokemon]);

    const onClear = () => resetError();

    if(loading) return <div>Loading...</div>;

    const onClick = (value: string) => {
        setTerm(value);
        setSelectedTerm(value);
    }

    return (
        <div className='autocomplete-container'>
            <div className='error'>
                {error && <div>{error} <a href="#" onClick={onClear}>X</a></div>}
            </div>
            <div className='search-bar'>
                <Search value={term} setTerm={setTerm} />
            </div>
            <div className='results'>
                {!selectedTerm && filteredPokemon.map(p => <Result key={p?.entry_number} onClick={onClick} pokemon={p} term={term} />)}
            </div>
        </div>
    )
}

export default Autocomplete