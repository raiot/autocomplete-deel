const Result = ({ pokemon, term, onClick } : { pokemon: Pokemon, term: string, onClick: (value: string ) => void}) => {

  const pokeName = pokemon?.pokemon_species?.name;
  const parts = pokeName.split(term);
  const onResultClick = () => {
    onClick(pokemon.pokemon_species.name);
  }

  return (
    <div>
        <span onClick={onResultClick}>{parts.map((p, index) => p === '' && index === 0 ? <span key={p} className="highlight">{term}</span> : p)}</span>
    </div>
  )
}

export default Result