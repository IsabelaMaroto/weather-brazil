import { useEffect, useState } from 'react';
import { listaCapitais } from './listacidades';
import styled from 'styled-components';

const ContainerCapitais = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    color: rgba(255, 255, 255, 0.9);
    
    .card{
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.6);
        width: 150px;
        margin-right: 20px;
        padding: 16px;
        border-radius: 10px;

        div{
            display: flex;
            align-items: center;
            margin: 10px 0 8px;
            justify-content: start;
        }
        img{
            height: 60px;
            width: fit-content;
            margin-right: 5px;
        }
        h1{
            font-weight: 500;
            font-size: 1.8rem;
            span{
                font-size: 0.8rem;
            }
        }
        h2{
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 8px;
        }
        h3{
            font-size: 0.8rem;
        }
        h4{
            font-size: 0.8rem;
            span{
                font-size: 0.6rem;
            }
        }

        :hover{
            background-color: rgba(64, 68, 64, 0.6);
            cursor: pointer;
            transition: ease 0.5s;
        }
    }

    @media (max-width: 850px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        .card{
            margin: 10px auto;
        }
    }
    @media (max-width: 400px) {
        display: none;
    }
`
export function Cards() {

    const [ResultadoCapitais, setResultadoCapitais] = useState([])

    useEffect(() => {

        setResultadoCapitais([])

        listaCapitais.map(async (cidade) => {
            const apiCapital = await fetch(`http://api.weatherapi.com/v1/current.json?key=5405e52bdcab47d5bcc150940231001&q=${cidade}&aqi=yes&lang=pt`)
            const respostaCapital = await apiCapital.json()
            /* console.log(respostaCapital) */
            setResultadoCapitais(ResultadoCapitais => [...ResultadoCapitais, respostaCapital])
        })

    }, [])

    return (
        <ContainerCapitais>
            {
            ResultadoCapitais.map((capital,index )=> (
                <div key={index} className='card'>
                    <h2>{capital.location.name}</h2>
                    <h3>{capital.location.country}</h3>
                    <div>
                        <img src={capital.current.condition.icon} alt='icone clima'/>
                        <h1>{Math.round(capital.current.temp_c)}°<span>C</span></h1>
                    </div>
                    <h4>RealFeel: {Math.round(capital.current.feelslike_c)}°<span>C</span></h4>
                </div>
            ))}
        </ContainerCapitais>
        

    )
}
