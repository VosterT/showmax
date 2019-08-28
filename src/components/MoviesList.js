import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';

const styles =
{

  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '30'
  }
};

class MoviesList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      errorMsg: '',
      black: true,
      bgColor: 'blue',
      isOpen: false
    }

  }

  ranking(e,id) {
    console.log(id);

    let newRanking = JSON.parse(localStorage.getItem("moviesArray"));
    // this.setState({
    //     bgColor: 'yellow'
    //   })

      const allMovies = [];
      console.log(newRanking);

        for (let i = 0; i < newRanking.length; i++) {

          if(id == newRanking[i].id ){
            newRanking[i].rank = JSON.parse(e);
            console.log(newRanking[i]);
          }
        
          console.log(newRanking);
        }
      this.setState({ movies: newRanking })
  }

  _onPressSave() {
    alert('Rating successfully saved.')

  }

  componentDidMount() {
    axios.get('http://demo9595712.mockable.io/getTopFiveMovies')

      .then(response => {

         localStorage.setItem("moviesArray", JSON.stringify(response.data.components[1].items));
        this.setState({ movies: JSON.parse(localStorage.getItem("moviesArray") )})
      })

      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: 'Error retreiving data' })
      })

  }

  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    const { movies, errorMsg } = this.state
    return (
      <div>
        <h1><strong>List of Movies</strong></h1><br></br>
        {
          movies.length ?
            movies.map(post => <div key={post.id}>

<div className="card text-center" id={post.id} style={styles}>
      <div className="overflow">
      <h3 className="card-title">{post.title}</h3>
        <h5 className="card-title">Movie realeased date: {post.releaseDate}</h5>
        <h5 className="card-title">Movie ranking: {post.rank}</h5>
        <img src={post.imageUrl} alt="image 1" height="240"/>
      </div>
      <div className="card-body text-dark">

        <p className="card-text text-secondary">{post.synopsis}</p>
        <h3>Rate the Movie: </h3>&nbsp;
        <Button id="1" key="1" size="small" color="primary" onClick={() => this.ranking("1",post.id)}
                  style={{ backgroundColor: this.state.bgColor, color: "white" }}>
                  1
        </Button>&nbsp;
                <Button id="2" size="small" color="primary" onClick={() => this.ranking("2",post.id)}
                  style={{ backgroundColor: this.state.bgColor, color: "white" }}>
                  2
        </Button>&nbsp;
                <Button id="3" size="small" color="primary" onClick={() => this.ranking("3",post.id)}
                  style={{ backgroundColor: this.state.bgColor, color: "white" }}>
                  3
        </Button>&nbsp;
                <Button id="4" size="small" color="primary" onClick={() => this.ranking("4",post.id)}
                  style={{ backgroundColor: this.state.bgColor, color: "white" }}>
                  4
        </Button>&nbsp;
                <Button id="5" size="small" color="primary" onClick={() => this.ranking("5",post.id)}
                  style={{ backgroundColor: this.state.bgColor, color: "white" }}>
                  5
        </Button>
      </div>
    </div>   

    <div isOpen={this.state.isOpen}>
              fhhgsdfg
      </div>  

            </div> ) :
            null
        }
          <div><br></br>
                <Button size="large" color="green" onClick={(e) => this.setState({isOpen: true})}
                  style={{ backgroundColor: "green", color: "white" }} >
                  New Movie
        </Button> </div> <br></br>
        {
          errorMsg ? <div> {errorMsg} </div> : null

        }
      </div>
    )
  }
}

export default MoviesList
