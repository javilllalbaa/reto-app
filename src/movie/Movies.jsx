import React, { useEffect } from 'react'
import styled from 'styled-components'
import { loadMovies, loadMoviesSearch } from '../store/movie'
import Movie from './Movie'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux';


function Movies(props) {

    let moviesState = useSelector(state => state.movie);
    let dispatch = useDispatch();
    useEffect(()=>{
      dispatch(
        loadMovies()
      )
    },[]);

    let moreMovies = () => {
        console.log(moviesState, moviesState.data.name_search);
        localStorage.setItem('search_state', false)
        if(moviesState.data.name_search){
            dispatch(
                loadMoviesSearch(JSON.parse(localStorage.getItem('search')))
            )
        }else{
            dispatch(
                loadMovies()
            )
        }
    }

    return (
        <movies className={props.className}>
            <div className="title">
                <h1>
                    Películas populares
                </h1>
            </div>
            <div className="form">
                <Search/>
            </div>
            <div className="movies">
                <div className="movies-cards">
                    {
                        moviesState.data.movies.map( (movie,index) => (
                            <Movie index={index} movie={movie}></Movie>
                        )) 
                    }
                </div>
                <div onClick={() => moreMovies()} className="bottom-more">
                    <div>
                        Ver más
                    </div>
                </div>
            </div>
        </movies>
    )
}

export default styled(Movies)`
    /* background-color: red; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
	grid-template-rows: auto minmax(0,1fr) auto;
    grid-gap: 0.1em;
    height: 100%;
    & .title{
        background-color: ${({theme}) => theme.colors.white};
        /* grid-column: span 2; */
        grid-column-start: 1;
        grid-column-end: -1;
        height: 4.3em;
        display: flex;
        align-items: center;
        & h1{
            font-size: 1.6em;
            font-weight: 600;
        }
    }
    & .form{
        grid-column: span 1;
        /* background-color: lightblue; */
    }
    & .movies{
        grid-column: span 3;
        /* background-color: green; */
        padding: 0 0.5em 0.5em 0;
        & .movies-cards{
            display: flex;
            align-items: baseline;
            flex-wrap: wrap;
            grid-gap: 2em;
            & Movie{
                width: 13.75em;
                height: 28em;
                background-color: ${({theme}) => theme.colors.gray};
                border-radius: ${({theme}) => theme.dims.borderRadius.normal };
                box-shadow: ${({ theme }) => theme.shadows.depth2};
                overflow: hidden;
            }
        }
        & .bottom-more{
            width: 100%;
            padding: 1em 2em;
            display: flex;
            justify-content: center;
            border: solid 1px ${({theme}) => theme.colors.blue};;
            margin-top: 10px;
            cursor: pointer;
            color: ${({theme}) => theme.colors.black_};
            font-size: 1em;
            font-weight: 600;
            border-radius: ${({theme}) => theme.dims.borderRadius.normal};
        }
        & .bottom-more:hover{
            font-size: 1.1em;
        }
    }
    @media screen and (max-width: 1024px) {
        & .form{
            grid-column: span 4;
        }
        & .movies{
            grid-column: span 4;
        }
    }
    @media screen and (min-width: 768px) {
        width: calc(100% - ${({theme}) => theme.dims.widths.margin});
        margin: 0 100px;
    }
`