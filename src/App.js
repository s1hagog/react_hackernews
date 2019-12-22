import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


//IMPORT COMPONENTS
import Search from './components/Search'
import Table from './components/Table'


//Define url for API

const DEFAULT_QUERY = '';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';


//Define list of items

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },{
//     title: 'Redux',
//     url: 'https://redux.js.org',
//     author: 'Dan Abramov, ANdrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   }
// ]


//ES5
// function isSearched(searchTerm){
//   return function (item){
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

//ES6
export const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  setSearchTopStories(result){
    this.setState({result});
  }

  onDismiss(id){
    const updatedHits = this.state.result.hits.filter(item => item.objectID !== id);
    const result = {...this.state.result, hits: updatedHits}
    this.setState({result});
    console.log(result);
  }

  onSearchChange(e){
    this.setState({searchTerm: e.target.value});
    // console.log(this.state.searchTerm);
  }


  componentDidMount() {
    const {searchTerm} = this.setState;

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }
  


  render(){

    const {searchTerm, result} = this.state;

    if(!result) {return null;}
    
    return(
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          />
        </div>
          <Table 
            list={result.hits
            }
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
      </div>
    )
  }
}


// class Search extends Component {
//   render() {
//     const {value, onChange} = this.props;
//     return(
//       <form>
//         <input 
//           type="text"
//           onChange={onChange}
//           value={value}
//         />
//       </form>
//     )
//   }
// }

// class Table extends Component {
//   render() {
//     const {list, pattern, onDismiss} = this.props;
//     return (
//       <div>
//         {list.filter(isSearched(pattern)).map(item =>
//           <div key={item.objectID}>
//             <span><a href={item.url}>{item.title}</a></span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//             <span>
//               <Button onClick={() => onDismiss(item.objectID)}>
//                 Dismiss
//               </Button>
//             </span>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

export default App;
