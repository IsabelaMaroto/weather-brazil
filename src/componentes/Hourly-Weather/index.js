import rainIcon from '../../img/rain.png';
import styled from 'styled-components';
import { useState } from 'react';
import down from '../../img/down.png';

const ForecastHour = styled.div`
    height: auto;
    width: 100%;
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
    .exibe {
    display: none;
    }
    .exibe2 {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        .forecastHours{

            padding: 0 50px;
            
            .boxHora{
                display: flex;
                justify-content: space-around;
                background-color: rgba(235,235,235,0.7);
                margin: 0 0 30px;
                align-items: center;
                border-radius: 10px;

                .icon{
                    display: flex;                
                    font-size: 1.8em;
                    align-items: center;
                    img{
                        height: 70px;
                        padding: 10px;
                    }

                }
                .feels{
                    font-size: 0.9em;
                    margin-right: 30px;
                }
                .rain{

                    img{
                        height: 15px;
                        padding: 0 10px;
                    }
                }

                :hover{
                    background-color: rgba(64, 68, 64, 0.3);
                    cursor: pointer;
                    transition: ease 0.5s;
                }
            }
            
        }

        @media (max-width: 800px) {
        .forecastHours{
            padding: 0;
            .boxHora{
                margin: 0 10px 10px;
                font-size: 0.8em;
                .icon{               
                    font-size: 0.8em;
                    font-weight: bold;
                    margin-right: 0;
                    img{
                        height: 30px;
                        padding: 5px;
                    }

                }
                .feels{
                    margin: 0;
                }
                .rain{
                    img{
                        height: 10px;
                        padding: 0 5px;
                    }
                }
            }
        }
        
    }
    }
    
    
`

export function Hourly({ Clima }) {
    const [style, setStyle] = useState("exibe");

    const changeStyle = () => {
        if (style === "exibe") {
            setStyle("exibe2")
        } else if (style === "exibe2") {
            setStyle("exibe")
        }
    }
    return (
        <ForecastHour>
            <div className='buttonBox'>
                <button onClick={changeStyle}>
                    <span>Por hora</span>
                    <span><img src={down} alt='seta para baixo' /></span>
                </button>
            </div>
            <div className={style}>
                <div className='forecastHours'>
                    {Clima.forecast.forecastday[0].hour.map((hora, index) => (
                        new Date(hora.time).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' }).slice(10) > new Date().toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' }).slice(10) ? (
                            <div key={index} className='boxHora'>
                                <div className='hour'>
                                    <p>{(new Date(hora.time).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' })).slice(10)}</p>
                                </div>
                                <div className='icon'>
                                    <img src={hora.condition.icon} alt='icon' />
                                    <p>{Math.round(hora.temp_c)}°C</p>
                                </div>
                                <div className='feels'>
                                    <p>RealFeel: {Math.round(hora.feelslike_c)}°C</p>
                                </div>
                                <div className='rain'>
                                    <p>
                                        <img src={rainIcon} alt='rain icon' />
                                        {hora.chance_of_rain}%
                                    </p>
                                </div>
                            </div>
                        ) : ''
                    ))}
                </div>
            </div>
        </ForecastHour>
    )
}