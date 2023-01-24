import styled from "styled-components";
import Logo from '../../img/Logo2.png';
import { Link } from "react-router-dom";

const HeaderContainer=styled.section`
    background-color: rgba(0,0,0,1.0);
    display: flex;
    width: 100%;
    padding: 10px 0;

    img{
        height: 40px;
        margin-left: 100px;
    }

    @media (max-width: 900px) {
        img{
            height: 30px;
            margin-left: 15px;
        }
    }
`


export function Header(){
    return(
        <HeaderContainer>
            <Link to={'/'}>
                <img src={Logo} alt='Weather Brazil'/>
            </Link>
        </HeaderContainer>
    )
}