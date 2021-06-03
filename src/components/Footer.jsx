import React from 'react'
import styled from 'styled-components'

function Footer(props) {
    return (
        <footer className={props.className}>
            <div className="content">
                <h1>Javier Alexander villalba Aguirre</h1>
            </div>
        </footer>
    )
}

export default styled(Footer)`
    background-color: ${({theme}) => theme.colors.black};
    font-size: 0.6em;
    font-weight: 600;
    padding: 1em 0;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
    
    @media screen and (min-width: 768px) {
        & .content{
            width: calc(100% - ${({theme}) => theme.dims.widths.margin});
            margin: 0 100px;
        }
    }
`
