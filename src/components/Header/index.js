import React from 'react'
import banner from '../../../assets/img/banner.jpeg'
import { Container, Headers, Banner } from './styles'
import { Link } from "gatsby";
export default function Header() {
    return (
        <>
            <Banner>
                <img src={banner} alt="" />
            </Banner>
            <Headers>
                <Container>
                    <div className="menu-mobile" >

                        <i className="material-icons">
                            menu
                            </i>

                    </div>
                    <nav>
                        <ul>
                            <Link to="/">
                                <li>
                                    <i className="material-icons">
                                        home
                                     </i>
                                    Home
                            </li>
                            </Link>
                            <li className="dropdown">
                                <i className="material-icons">
                                    directions_car
                        </i>
                                Veículos
                        <ul className="dropdown">
                                    <li>
                                        <Link to="/carros-a-venda">Carros a venda</Link>
                                    </li>
                                    <li>Veículos vendidos</li>
                                </ul>
                            </li>
                            <li>
                                <i className="material-icons">
                                    smartphone
                        </i>
                                Contato
                    </li>
                        </ul>
                    </nav>
                </Container>
            </Headers>
        </>
    )
}