import iconeLocalizacao from '../../img/pino.png';
import styled from 'styled-components';
import { Weekly } from '../Weekly-Weather';
import { Hourly } from '../Hourly-Weather';


const ContainerResultados = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    background-color: rgba(255,255,255,0.5);
    border-radius: 10px 10px 10px 10px;
    

    .titulo{
        display: flex;
        justify-content:start;
        width: 100%;
        margin: 20px 0;
        h2{
            font-size: 1em;
            margin-left: 40px;
            text-transform: uppercase;
        }
    }
    .botoes{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    @media (max-width: 700px){
        margin: 0;
        width: 100%;
        .titulo{
            margin: 20px 0;
            width: auto;
            h2{
                margin-left: 0;
            }
            
        }
        .botoes{
          
        }
    }
`
const ExibeResultado = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 ;
    .left{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-right: 70px;
        .top{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0 30px 70px;
            .climaStatus{
                h1{
                    margin: 30px 0 0 20px;
                    font-size: 6em;
                    font-weight: normal;
                    span{
                        font-size: 0.5em;
                    }
                }
                h3{
                    font-size: 1.2em;
                    padding: 40px 0 0 20px;
                    line-height: 28px;
                }
            }
            img{
                height: 120px;
                padding-bottom: 30px;
            }
        }
       
    }
    .right{
        display: flex;
        flex-direction: column;
        text-align: end;
        padding-right: 40px;
        width: 100%;

        h2{
            font-size: 1.5em;
            width: auto;
            margin-bottom: 10px;

            img{
                height: 20px;
            }
        }
        h3{
            font-size: 1em;
            margin-bottom: 30px;
        }
        div{
            div{
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                border-bottom: 1px solid rgba(0,0,0,0.3);
                font-size: 1em;
            }
        }
    }
    .atualizacao{
        margin: 20px 0;
        h6{
            font-size: 0.8em;
        }
    }


    @media (max-width: 700px) {
        flex-direction: column;

            .left{
                margin:0;
                .top{
                    margin: 0;
                    .climaStatus{
                        text-align: center;
                        h1{
                            font-size: 5em;
                            margin: auto;
                        }
                        h3{
                            font-size: 1em;
                            margin: auto;
                            padding: 0;
                        }
                    }
                }
            }
            .right{
                text-align: center;
                padding: 0;
                h3{
                }
                div{
                    div{
                        
                    }
                }
            }
    }

`

export function ShowWeather({ passaClima }) {

    return (
        <ContainerResultados>
            <div className='titulo'>
                <h2>Condições Metereológicas Atuais:</h2>
            </div>
            <ExibeResultado>
                <div className='left'>
                    <div className='top'>
                        <div>
                            <img src={passaClima.current.condition.icon} alt="icone de acordo com o clima" />
                        </div>
                        <div className='climaStatus'>
                            <h1>{Math.round(passaClima.current.temp_c)}°<span>C</span></h1>
                            <h3>{passaClima.current.condition.text}</h3>
                        </div>
                    </div>

                </div>
                <div className='right'>
                    <div>
                        <h2><img src={iconeLocalizacao} alt='icone localização' /> {passaClima.location.name}, {passaClima.location.region}.</h2>
                        <h3>{(new Date(passaClima.location.localtime).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }))}</h3>
                    </div>
                    <div>
                        <div>
                            <p className='texto'>RealFeel: </p>
                            <p className='info'>{Math.round(passaClima.current.feelslike_c)}°<span>C</span></p>
                        </div>
                        <div>
                            <p  className='texto'>Vento: </p>
                            <p className='info'>{Math.round(passaClima.current.wind_kph)} km/h</p>
                        </div>
                        <div>
                            <span  className='texto'>Umidade: </span>
                            <span className='info'>{passaClima.current.humidity}%</span>
                        </div>
                        <div>
                            <span  className='texto'>Índice UV: </span>
                            <span className='info'>{passaClima.current.uv}</span>
                        </div>
                    </div>
                    <div className='atualizacao'>
                        <h6>Última atualização: {(new Date(passaClima.current.last_updated).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' }))}
                        </h6>
                    </div>
                </div>
            </ExibeResultado>
            <div className='botoes'>
                <Hourly Clima={passaClima} /> 
                <Weekly Clima={passaClima} />          
            </div>
        </ContainerResultados>
    )
}