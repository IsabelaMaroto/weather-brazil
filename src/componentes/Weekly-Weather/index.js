import ArrowTop from '../../img/top.png';
import ArrowBottom from '../../img/bottom.png';
import windIcon from '../../img/wind.png';
import styled from 'styled-components';
import rainIcon from '../../img/rain.png';
import down from '../../img/down.png';
import { useState } from 'react';

const ForecastWeek = styled.div`
    .buttonBox{
        button{
            display: flex;
            justify-content: space-between;
            height: 40px;
            width: 100%;
            padding: 10px 20px;
            align-items: center;
            border: none;
            font-size: 0.9rem;
            background-color: rgba(0, 0, 0, 0.8);
            color: rgba(255, 255, 255, 1);
            span{
                img{
                height: 20px;
                }
            }
            
            :hover{
                background-color: rgba(64, 68, 64, 0.6);
                color: rgba(255, 255, 255, 1);
                border: none;
                cursor: pointer;
                transition: ease 0.5s;
            }
        }
    }
    .cont {
    display: none;
    }
    .cont2 {
        margin-top: 20px;
        .infoWeather{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 50px;
        }
        .boxDia{
            background-color: rgba(235,235,235,0.7);
            border-radius: 10px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .imagemIcon{
                display: flex;
                justify-content: center;
                img{
                    height: 60px;
                }
               
            }
            .descricao{
                p{
                display: flex;
                justify-content: center;
                font-size: 1em;
                margin-bottom: 15px;
                    img{
                        margin-right: 10px;
                    }
     
                }
                .date{
                    display: flex;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 1.1em;
                    margin: 10px 0 20px;
                }
            }
            

                :hover{
                    background-color: rgba(64, 68, 64, 0.3);
                    cursor: pointer;
                    transition: ease 0.5s;
                }
        }

        @media (max-width: 800px) {
            .infoWeather{
                flex-direction: column;
            }
            .boxDia{
                width: 80%;
                flex-direction: row;
                margin-bottom: 10px;
                align-items: center;
                justify-content: space-around;
                padding: 10px;
               .imagemIcon{
                    img{
                        height: 100px;
                    }
               }
               .descricao{
                    .date{
                        margin: 0 0 20px;
                    }
                    .elementos{
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        align-items: center;
                        grid-auto-rows: 30px;
                        grid-column-gap: 20px;
                        p{
                            font-size: 0.9em;
                            margin: 0;
                           
                        }
                    }
                 
                 
               }
            }
        }
    }
`

export function Weekly({ Clima }) {
    const [style, setStyle] = useState("cont");

    const changeStyle = () => {
        if(style === "cont"){
            setStyle("cont2")
        } else if(style ==="cont2"){
            setStyle("cont")
        }  
    }

    return (
        <ForecastWeek>
            <div className='buttonBox'>
                <button onClick={changeStyle}>
                    <span>Semanal</span>
                    <span><img src={down} alt='seta para baixo'/></span>
                </button>
            </div>
            <div className={style}>
                <div className='infoWeather'>
                    {Clima.forecast.forecastday.map((teste, index) => (
                        <div key={index} className='boxDia'>
                            <div className='imagemIcon'>
                                <img src={teste.day.condition.icon} alt='icon weather'  />
                            </div>
                            <div className='descricao'>
                                <h6 className='date'>
                                    {(new Date(teste.date).toLocaleDateString('pt-BR', { weekday: 'short' }))}
                                </h6>
                                <div className='elementos'>
                                    <div>
                                        <p>
                                            <img src={ArrowTop} alt='arrow top' />
                                            {Math.round(teste.day.maxtemp_c)}°C
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <img src={ArrowBottom} alt='arrow bottom' />
                                            {Math.round(teste.day.mintemp_c)}°C
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <img src={windIcon} alt='wind icon' />
                                            {Math.round(teste.day.maxwind_kph)}km/h
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <img src={rainIcon} alt='rain icon' />
                                            {Math.round(teste.day.daily_chance_of_rain)}%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ForecastWeek>
    )
} 