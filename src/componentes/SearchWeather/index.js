import ImgBackground from '../../img/background1.jpg';
import styled from 'styled-components';
import { useState } from 'react';
import {ShowWeather} from '../Show-Weather';
import React from 'react';
import { Cards } from '../Card-Cidades';


const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: arial;
    
    
`
const Pesquisa = styled.div`
    background-image: url(${ImgBackground});
    background-size: cover;
    width: 100%;

    .searchBox{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 100px 0 50px;
        input{
            width: 700px;
            height: 20px;
            padding: 10px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            background-color: rgba(255, 255, 255, 0.8);
            border: none;
        }
        button{
            height: 40px;
            padding: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background-color: rgba(0, 0, 0, 1);
            color: rgba(255, 255, 255, 1);
            border: none;
            font-size: 0.9rem;

            :hover{
                background-color:rgba(64, 68, 64, 0.8);
                color: rgba(255, 255, 255, 1);
                border: none;
                cursor: pointer;
                transition: ease 0.5s;
            }
        }
    }

    @media (max-width: 850px) {
       .searchBox{
        margin: 50px 0;
            input{
                width: 400px;
            }
       } 
    }
    @media (max-width: 550px) {
        .searchBox{
            input{
                width: 200px;
                height: 10px;
            }
            button{
                height: 30px;
                font-size: 0.8rem;
            }
       } 
    }
`    
const Exibe= styled.div`
    display: flex ;
    justify-content: center;
    width: 100%;
`

export function Search() {
    const [city, setCity] = useState("")
    const [weatherForecast, setWeatherForecast] = useState(null)

    const handleChange = (e) => {
        setCity(e.target.value)
    }
    async function weatherSearch() {
        const API = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5405e52bdcab47d5bcc150940231001&q=${city}&days=7&lang=pt`)
        const resposta = await API.json()
        setWeatherForecast(resposta)
        console.log(JSON.stringify(weatherForecast))
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          weatherSearch()
        }
      };
    return (
        <ContainerHome>
            <Pesquisa>
                <div className='searchBox'>
                    <div>
                        <input placeholder='Escreva o nome da sua cidade' value={city} onChange={handleChange} onKeyDown={handleKeyDown}/>
                    </div>
                    <div>
                        <button onClick={() => weatherSearch()}>Pesquisar</button>
                    </div>
                </div>
                <div>
                    <Cards/>
                </div>
            </Pesquisa>
            <Exibe>
            {
                weatherForecast ? (
                 <ShowWeather passaClima={weatherForecast}/>
                ) : null
            }
            </Exibe>
        </ContainerHome>

    )
}






