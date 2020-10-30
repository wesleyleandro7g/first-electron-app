import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1a1a1a;
    top: 0;
    position: absolute;
`
export const Content = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`
export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    margin: 0 10px;
    padding: 5px 10px;
    transition: 200ms ease-in;
    border-bottom: 1px solid orange;

    :hover{
        background-color: orange;
    }
    
`