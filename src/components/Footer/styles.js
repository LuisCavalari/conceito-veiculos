import styled from 'styled-components';

export const Container = styled.footer`
    width:100%;
    background-color:#001e36;
    padding:10px;
    
    .footer-area {
        max-width:1000px;
        margin:0 auto;
        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        color:#fff;
        h2 {
            font-size:28px;
            justify-self:center;
        }
        .footer-box {
            text-align:center;
            flex:1;
        }
        .contact-item{
            display:flex;
            align-items:center;
            margin-bottom:8px;
            
            span {
                margin-left:10px;
                font-size:18px;
            }
        }

    }
`;
