import React from 'react'



const Search = ({value, onChange, children}) => {

    // we will use best practice and desctructure props in function declaration
    // const {value, onChange, children} = props;
    return (
        <form>
        {children} <input 
          type="text"
          onChange={onChange}
          value={value}
        />
        </form>
    )
}

export default Search;