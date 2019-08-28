import React from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import NewMovie from './components/NewMovie';

function App() {

  return (
    <div className="App">
      <MoviesList/>
      {/* <NewMovie isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>Lorem</NewMovie> */}
    </div>
  );
}

export default App;
