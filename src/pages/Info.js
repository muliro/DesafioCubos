import React, {Component} from 'react'
import axios from 'axios'
import './Info.css'
import {getMovieDetailsSuccess, getMovieTrailerSuccess} from '../Store/actions/actions'
import {connect} from 'react-redux';
import {getMovieDetails,getMovieTrailer} from '../api/service'

class Info extends Component{
componentDidMount(){
  const movieid = window.location.href.split('?')[1].split('=')[1]
  const url = getMovieDetails({movieId:movieid})
  url.then(url=>
    axios.get(url.url).then(res=>{
      // console.log(res)
      res.data.poster_path = 'https://image.tmdb.org/t/p/w400'+res.data.poster_path
      this.props.onGetMovie(res.data)
    }
    ).catch(e=>{console.log(e)})
  )
  const video= getMovieTrailer({movieId:movieid})
  video.then(video=>
    axios.get(video.url).then(res=>{
      console.log(res.data.results[0].key)
      this.props.onGetTrailer(res.data.results[0].key)
    }
    ).catch(e=>{console.log(e)})
  )


}


  render(){
    let trailerURL ='https://www.youtube.com/embed/'+this.props.trailer
    console.log(trailerURL)
    return(
      <section id="movies-info">
        <div className="header">
            <div className="title">
              <h1>{this.props.movie.title}</h1>
            </div>
            <div className="date">
              <h1>{this.props.movie.release_date}</h1>          
            </div>
        </div>
        <div id="information" className="divRow">
            <div className="information">
                <div className="subtitle">
                  <h1>Sinopse</h1>
                </div>
                <div className="overview">
                    <p>{this.props.movie.overview}</p>          
                </div>
                <div className="subtitle">
                  <h1>Informações</h1>
                </div>
                <div className="divRow2">
                        <div className="divColum">
                          <h2 className="title-information">Situação</h2>
                          <p className="text-information">{this.props.movie.status}</p>          
                        </div>

                        <div className="divColum">
                          <h2 className="title-information">Idioma</h2>
                          <p className="text-information">{this.props.movie.original_language}</p>          
                        </div>   

                        <div className="divColum">
                          <h2 className="title-information">Duração</h2>
                          <p className="text-information">{this.props.movie.runtime} min</p>          
                        </div>    

                        <div className="divColum">
                          <h2 className="title-information">Orçamento</h2>
                          <p className="text-information">${this.props.movie.budget}</p>          
                        </div>     

                        <div className="divColum">
                          <h2 className="title-information">Receita</h2>
                           <p className="text-information">${this.props.movie.revenue}</p>          
                        </div>  

                        <div className="divColum">
                          <h2 className="title-information">Lucro</h2>
                          <p className="text-information">${this.props.movie.revenue-this.props.movie.budget}</p>          
                        </div>  

                </div>
                <div className="divRow1">

                      <div className="percent">
                        <h1 className="percent-text">{this.props.movie.vote_average}</h1>
                      </div>
                </div>
            </div>
            <div className="image">
                 <img alt=""  src={this.props.movie.poster_path}/>          
            </div>
          
        </div>
        <div className='trailer'>
          <iframe title={trailerURL} width="100%" height="600" src={trailerURL}/>
        </div>
      </section>

    );
  }
}
const mapStateToProps = state => ({
  movie:state.moviesReducer.selectedMovie,
  trailer:state.moviesReducer.trailer
});
const mapDispatchToProps = dispatch =>{
return{
  onGetMovie:movie=>dispatch(getMovieDetailsSuccess(movie)),
  onGetTrailer:key=>dispatch(getMovieTrailerSuccess(key))
}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Info);