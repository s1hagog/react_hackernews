import React from 'react';



const Search = ({value, onChange, onSubmit, children}) => {

    // we will use best practice and desctructure props in function declaration
    // const {value, onChange, children} = props;
    return (
        <form onSubmit={onSubmit}>
         <input 
          type="text"
          onChange={onChange}
          value={value}
        />
        <button type="submit">{children}</button>
        </form>
    )
}

export default Search;