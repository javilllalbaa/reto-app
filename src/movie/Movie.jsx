import React from 'react'
import styled from 'styled-components'
import apiConfig from '../config/api';
import moment from 'moment'
import 'moment/locale/es'
import { useNavigate } from 'react-router-dom';

function Movie({ className, index, movie }) {
    moment.locale('es')
    let navigate = useNavigate();
    let clickMovie = () => {
        // alert("Por contruir")
        navigate("/error")
    }
    
    return (
        <movie onClick={() => clickMovie()} className={className}>
            <div className="content-img">
                <img src={`${apiConfig.img_base_url}${movie.poster_path}`} alt="" />
            </div>
            <div className="content-inf">
                <div>
                    {movie.title}
                </div>
                <div>
                    {moment(movie.release_date).format('LL')}
                </div>
            </div>
        </movie>
    )
}

export default styled(Movie)`
    & .content-img{
        background-color: ${({theme}) => theme.colors.silver};
        height: 20.62em;
        max-height: 20.62em;
        z-index: 20;
        & img{
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }
    & .content-inf{
        display: flex;
        grid-gap: 0.5em;
        flex-wrap: wrap;
        margin: 0.5em;
        & div{
            width: 100%;
        }
        & div:nth-child(1){
            font-weight: 700;
            color: ${({theme}) => theme.colors.black_};;
        }
        & div:nth-child(1):hover{
            cursor: pointer;
            font-weight: bold;
            color: ${({theme}) => theme.colors.blue};;
        }
        & div:nth-child(2){
            font-size: 1em;
            color: ${({theme}) => theme.colors.silver};;
        }
    }
`
