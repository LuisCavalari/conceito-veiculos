import React from 'react';
import imagemVenda from "../../../assets/img/sold-car.jpg";
import imagemVendidos from "../../../assets/img/solded.jpeg";
import { Link } from "gatsby";
import { Container } from './styles';



export default function GridContent({data}) {
    console.log(data)
    
    const imgVendidos = data.vendidos.edges ? data.vendidos.edges[0].node.carPictures[0].fluid  : null 
    const imgAVenda = data.aVenda.edges.length > 0 ? data.aVenda.edges[0].node.carPictures[0].fluid  : null 

    return (
        <Container >
            <Link to="/carros-a-venda">

                <div className="card-area">
                    <h2>Veículos a venda</h2>

                    <div className="card">
                        <img className="card-image" srcSet={(imgAVenda && imgAVenda.srcSet) || imagemVenda  } alt="Carro" />
                        <div className="card-info">
                            <div className="card-name">
                                Ver veículos a venda
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/carros-vendidos">
                <div className="card-area">
                    <h2>Veículos vendidos</h2>
                    <div className="card">
                        <img className="card-image" srcSet={imgVendidos.srcSet || imagemVendidos }  alt="Carro" />
                        <div className="card-info">
                            <div className="card-name">
                                Ver veículos vendidos
                        </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Container >
    );
}
