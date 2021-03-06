import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface props{
    open?: boolean;
    display?: string;
    margin?: string;
}

export const ScreenOption = styled.div<props>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
    display: ${props =>props.open ? 'none': 'flex'};

`

export const Option = styled.div<props>`
    width: 60%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 1%;
    background-color: white;
    display: ${props =>props.open ? 'none': 'flex'};
    padding: 2%;
    z-index: ${props => props.open ? '87': '100'};
`

export const StyledDivClose = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledButton = styled.button<props>`
    color: black;
    background-color: transparent;
    justify-content: end;
    padding: 0;
    width: 10%;
    margin: 1% 1% 0% 0%;
    border: none;
    display: ${props =>props.open ? 'flex': 'none'};
`
export const StyledButtonX = styled.button`
    padding: 0;
    background-color: transparent;
    height: 0;
    border: none;    
`

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`

export const StyledIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5%;
`

export const StyledDivLink = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8%;
`

export const StyledTeste = styled.div<props>`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: end;
    min-height: 49px;

`

export const StyledLink = styled(Link)<props>`
    text-decoration: none;
    color: black;
    display: ${props => props.display};
    margin-top: ${props => props.margin};
    width: 100%;
    align-items: center;

`