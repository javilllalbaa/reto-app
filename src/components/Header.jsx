import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

let Header = (props) => {
  let navigate = useNavigate();

  let link = () => {
    window.location.href="http://localhost:3001/movie/";
  }

  let linkBreak = () => {
    navigate("/error")
  }

  return (
    <header className={props.className}>
      <div className="content">
        <div className="logo">
          <img src="/themovideodb.svg" height="45"></img>
        </div>
        <div>
          <nav>
            <ul>
              <li onClick={() => link()}><a href="#">Películas</a></li>
              <li onClick={() => linkBreak()}><a href="#">Programas de televisión</a></li>
              <li onClick={() => linkBreak()}><a href="#">Personas</a></li>
              <li onClick={() => linkBreak()}><a href="#">Más </a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default styled(Header)`
  padding:0.1em 0;
  background-color: ${({ theme }) => theme.colors.black};
  & .content{
    display: flex;
    justify-content: normal;
    align-items: center;
    & .logo{
      overflow: hidden;
      & img{
        width: 100%;
      }
    }
    @media screen and (max-width: 1024px) {
      & div{
        width: 100%;
      }
      & .logo{
        width: calc(100% - 5.3em);
        margin: 0 5.3em;
      }
    }    
    @media screen and (min-width: 1025px) {
      & div:nth-child(2){
        position: relative;
        right: 150px;
      }
      & .logo > img{
        width: 50%;
      }
    }    
    & nav{
      padding: 1em;
      & ul{
        list-style: none;
        padding: 0;
        margin: 0;
        @media screen and (min-width: 480px) {
          display: flex;
        }
        & li > a{
          padding: 0.5em 1em;
          color: ${({ theme }) => theme.colors.white};
          text-decoration: none;
          display: block;
          font-weight: 600;
        }
        & li > a:hover{
          background: ${({ theme }) => theme.colors.accent};
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    & .content{
      flex-wrap: wrap;
      text-align: center;
    }  
  }
  @media screen and (min-width: 1025px) {
    & .content{
      width: calc(100% - 200px);
      margin: 0 auto;
    }
  }
`;


/* white: "#ffffff",
dark: "#27212e",
black: "#373737",
accent: "#E53251",
gray: "#F2F2F2",
blue: "#67E7E2",
silver: "#716385" */