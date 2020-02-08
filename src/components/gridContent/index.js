import React from 'react';
import imagemVenda from "../../../assets/img/sold-car.jpg";
import imagemVendidos from "../../../assets/img/solded.jpeg";
import { Link } from "gatsby";
import { Container } from './styles';


export default function GridContent() {
    return (
        <Container >
            <Link to="/carros-a-venda">

                <div className="card-area">
                    <h2>Carros a venda</h2>

                    <div className="card">
                        <img className="card-image" src={imagemVenda} alt="Carro" />
                        <div className="card-info">
                            <div className="card-name">
                                Ver carros a venda
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/carros-vendidos">
                <div className="card-area">
                    <h2>Carros vendidos</h2>
                    <div className="card">
                        <img className="card-image" src={imagemVendidos} alt="Carro" />
                        <div className="card-info">
                            <div className="card-name">
                                Ver carros vendidos
                        </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Container >
    );
}
