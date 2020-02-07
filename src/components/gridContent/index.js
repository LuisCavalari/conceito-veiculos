import React from 'react';
import imagemVenda from "../../../assets/img/slide1.jpg";
import { Container } from './styles';


export default function GridContent() {
    return (
        <Container >
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
            <div className="card-area">
                <h2>Carros a venda</h2>
                
                <div className="card">
                    <img className="card-image" src={imagemVenda} alt="Carro" />
                    <div className="card-info">
                        <div className="card-name">
                            Ver carros vendidos
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
}
