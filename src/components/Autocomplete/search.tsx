import React from 'react';

const Search = ({ value, setTerm }: { value: string, setTerm: (value: string) => void}) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }
    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default Search