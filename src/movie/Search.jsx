import { React, useState } from 'react'
import { useForm } from 'react-hook-form';
import AppInput from './../components/AppInput';
import AppSelect from './../components/AppSelect';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppButton } from '../theme';
import { loadMoviesSearch } from './../store/movie'
import { useNavigate } from 'react-router-dom';

function Search(props) {
    let dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [alert, setAlert] = useState(false);
    let navigate = useNavigate();
    let onSubmit = (data) => {
        if (data.end_date != "" || data.start_date != "" || data.search_to != "Buscar por" || data.search_to_name != "") {
            if (JSON.stringify(data) != localStorage.getItem('search')) {
                localStorage.setItem('search', JSON.stringify(data))
                localStorage.setItem('search_state', true)
            } else {
                localStorage.setItem('search_state', false)
            }
            navigate("/movie/search");
            dispatch(
                loadMoviesSearch(data)
            )
        } else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }


    return (
        <search className={props.className}>
            <div className="filter_panel">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Ordenar por</h1>
                    <div className="date">
                        <h2>Buscar por fecha de estreno</h2>
                        <AppInput type="date" name="start_date" register={register} label="desde" />
                        <AppInput type="date" name="end_date" register={register} label="Hasta" />
                    </div>
                    <div className="select">
                        <h2>Buscar por</h2>
                        <AppSelect type="date" name="search_to" register={register} label="desde" />
                    </div>
                    <div className="select">
                        <h2>Buscar nombre</h2>
                        <AppInput type="text" name="search_to_name" register={register} label="nombre de la pelicula" />
                    </div>
                    <AppButton type="submit" small>Buscar</AppButton>
                    {
                        alert &&
                        <div className="error">
                            Por favor indique que sea consulta
                        </div>
                    }
                </form>
            </div>
        </search>
    )
}

export default styled(Search)`
    & h1{
        font-size: 1.2em;
    }
    & div{
        width: 100%;
    }
    & .date{
        & h2{
            font-size: 1em;
            opacity: 0.56;
        }
    }
    & .filter_panel{
        width: calc(100% - 40px);
        margin: 0 auto;
        padding: ${({ theme }) => theme.dims.padding.tallPadding};
        border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
        border: 1px solid #e3e3e3;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
    }
    & .error{
        color: ${({ theme }) => theme.colors.accent};
    }
`
