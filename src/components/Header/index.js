import React, { useState } from 'react'
import banner from '../../../assets/img/banner.jpeg'
import { Container, Headers, Banner, MenuMobile } from './styles'
import { Link } from "gatsby";
import ClickAwayListener from "react-click-away-listener";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <ClickAwayListener onClickAway={() => { if (isOpen) setIsOpen(false) }}>
                <MenuMobile isOpen={isOpen}>
                    <ul>
                        <Link to="/">

                            <li>
                                <i className="material-icons">
                                    home
                            </i>
                                Home
                            </li>

                        </Link>
                        <Link to="/carros-a-venda">
                            <li>
                                <i className="material-icons">
                                    directions_car
                            </i>
                                Carros a venda
                        </li>
                        </Link>
                        <Link to="/carros-vendidos">
                            <li>
                                <i className="material-icons">
                                    directions_car
                            </i>
                                Carros vendidos
                        </li>
                        </Link>
                        <a href="#footer" >
                            <li >
                                <i className="material-icons">
                                    smartphone
                            </i>
                                Contato
                        </li>
                        </a>
                    </ul>
                </MenuMobile>
            </ClickAwayListener>
            <Banner>
                <img src={banner} alt="" />
            </Banner>
            <Headers>
                <Container>

                    <nav>
                        <ul>
                            <div
                                onClick={() => { setIsOpen(!isOpen) }}
                                className="menu-mobile"
                            >
                                <i className="material-icons">
                                    menu
                                </i>
                            </div>
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
                                    <Link to="/carros-vendidos"> <li>Veículos vendidos</li></Link>
                                </ul>
                            </li>
                            <a href="#footer" >

                                <li >
                                    <i className="material-icons">
                                        smartphone
                                 </i>
                                    Contato
                                </li>
                            </a>
                        </ul>
                    </nav>
                </Container>
            </Headers>
        </>
    )
}