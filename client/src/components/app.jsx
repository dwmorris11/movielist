import React from 'react';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      addText: '',
      movies: [
        {title: 'Mean Girls', watched: false},
        {title: 'Hackers', watched: false},
        {title: 'The Grey', watched: false},
        {title: 'Sunshine', watched: false},
        {title: 'Ex Machina', watched: false},
      ],
      displayMovies: ''
    };

    this.state.displayMovies = this.state.movies;
    this.searchClick = this.searchClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addClick = this.addClick.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
  }

  addClick (e) {
    e.preventDefault();
    var movies = this.state.movies;
    movies.push({title: this.state.addText, watched: false});
    this.setState({
      movies: movies,
      addText: '',
      displayMovies: movies
    });
  };

  handleAddChange (e) {
    this.setState( {addText: e.target.value} );
  }

  searchClick (e) {
    e.preventDefault();
    let string = this.state.searchText;
    var displayMovies = [];

    this.state.movies.forEach((movie)=>{
      let re = new RegExp (`${string}`,'ig');
      let search = re.test(movie.title);
      if (search) {
        displayMovies.push(movie);
      }
    });
    if(this.state.displayMovies.length===0){
      displayMovies.push({title: 'No movies matching that search found.'});
    }
    this.setState( {
      searchText: '',
      displayMovies: displayMovies
    } );
  }

  handleSearchChange (e) {
    this.setState( {searchText: e.target.value} );
  }

  watchClick (title) {
    this.state.movies[title].watched ? this.setState({movies[title].watched: false}) :
    this.setState({movies[].watched: true})
    )
  }
  render() {
    return (
      <div>
        <Search searchClick={this.searchClick}
        handleSearchChange={this.handleSearchChange}
        searchText={this.state.searchText}
        />
        <AddMovie addClick={this.addClick} handleAddChange={this.handleAddChange} addText={this.state.addText} />
      {this.state.displayMovies.map((movie, i) => (
        <List title={movie.title} watched={movie.watched} key={movie.title+i} watchClick={this.watchClick}></List>
      ))}
      </div>
    );
  }
}

var List = ({title, watched, watchClick}) => (
  <div className='movie'>
    <span className='title' onClick={(title)=>watchClick(title)}>{title}</span>
    {watched ? <span className='watched'>Watched</span>:<span className='notWatched'>Not Watched</span> }
  </div>
)

export default App;