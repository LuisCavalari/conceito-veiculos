import React from 'react'

import { Container } from "./styles";

export default function Footer() {
    return (
        <Container id="footer">
            <div className="footer-area">
                <div className="footer-box">
                    <h2>Contato</h2>
                    <div className="contact-item">
                        <i className="material-icons">smartphone</i>
                        <span>(44) 8812-5850</span>
                    </div>
                    <div className="contact-item">
                        <i className="material-icons">mail</i>
                        <span>contatohenriquecardozo@outlook.com</span>
                    </div>
                </div>
                <div className="footer-box">
                    <h2>Redes sociais</h2>
                    
                </div>
            </div>
        </Container>
    )
}