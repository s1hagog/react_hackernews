import React from 'react';
import Button from './Button';
import {isSearched} from '../App';

const Table = ({list, pattern, onDismiss, children}) => {
    
    return(
        <div className="table">
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID} className="table-row">
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)} className="button-inline">
                Dismiss
              </Button>
            </span>
          </div>
        )}
        {children}
      </div>
    )
}

export default Table;