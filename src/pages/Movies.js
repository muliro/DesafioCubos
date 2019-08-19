import React, {Component} from 'react'
import './Movies.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCurrentPage} from '../Store/actions/currentPage'
import axios from 'axios'
import {searchMovieSuccess, searchMovie} from '../Store/actions/actions'
import {searchMovies} from '../api/service'


class Movies extends Component{
  constructor(props){
  super(props)  
  this.handleSearch = this.handleSearch.bind(this)
  this._onSelecionar= this._onSelecionar.bind(this)
}

  handleSearch(event){
    this.props.onSearchMovie(event)
    const url = searchMovies({query:event})
    url.then(url=>
      axios.get(url.url).then(res=>{
          res.data.results.forEach(movie => {
            movie.poster_path = 'https://image.tmdb.org/t/p/w200'+movie.poster_path
          });
          console.log(res.data.results)
          this.props.onSearchMovieSucess({searchResult:res.data.results})
        }
      ).catch(e=>{console.log(e)})
    )
  }
_onSelecionar(number){
  this.props._getCurrentPage(number)
  console.log(this.props.number)
}
 paginator(arr){
  if(!arr) arr=[];
  return function(page){
    const initialSlice = page*5
    return page<0 || initialSlice>= arr.length?[]: arr.slice(initialSlice, initialSlice+5)
  }
}

  render(){
    console.log(this.props.searchResult.searchResult)
    let length = this.props.searchResult.searchResult?(this.props.searchResult.searchResult.length):[]
    let pageNum =[]
     for (var i=0; i<length/5; i++){
       pageNum.push(i)
    }
    let page = pageNum.map(number=>{
      return(
        <div key={number} id='buttonPage'className="button-content">
             <button className="button-decoration"  onClick={()=>this._onSelecionar(number)} >
              <p className="button-text">{number}</p>
            </button>
        </div>
      )
    })

    const paginate = this.paginator(this.props.searchResult.searchResult)
    let view=paginate(this.props.number).map(movie=>{
      return(
      <div key={movie.id} id="movies-list">
            <div className="movie-image">
              <img alt="" src={movie.poster_path} />
            </div>
            <div className ="movies-information">
            <Link to={`/info?movieid=${movie.id}`} style={{textDecoration:'none'}}> 
                <div className="movie-header">
                      <h1 className="text">{movie.title}</h1>

                </div>
              </Link>
                <div id="sub-header">
                    <div className="percent">
                      <h1 className="percent-text">{movie.vote_average}</h1>
                  </div>
                    <div className="date">
                    <p>{movie.release_date}</p>
                    </div>
                </div>
                <div className="description">
                <p>{movie.overview}</p>
              </div>
            </div>
      </div>)
    })

    return(
      <section id="movies">
        <div className="input-content">
          <input type="text" value={this.props.query} placeholder={'Busque um filme por nome,ano ou gênero...'} onChange={e=> {this.handleSearch(e.currentTarget.value)}} className="input-text"/>
        </div>

          {view}
        <div className="divRowButton">
         {page}
        </div>
          
      </section>

    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.moviesReducer.searchResult,
  error: state.moviesReducer.error,
  number: state.currentPage.number,
  query: state.moviesReducer.query
});
const mapDispatchToProps = dispatch =>{
  // bindActionCreators(getCurrentPage(number), dispatch);
    return{
    _getCurrentPage:number=>dispatch(getCurrentPage(number)),
    onSearchMovieSucess:movies=>dispatch(searchMovieSuccess(movies)),
    onSearchMovie:query=>dispatch(searchMovie(query))
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Movies);