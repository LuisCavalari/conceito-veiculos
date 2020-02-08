import styled from "styled-components";

export const Container = styled.section`
    
    .each-slide{
        width:100%;
        max-height:100%;
        height:calc(100vh - 268px);
        overflow:hidden;
        background-repeat:no-repeat;
        background-size:cover;
        display:flex;
        justify-content:center;
        align-items:center;
    
    }.each-slide span {
        font-weight:bold;
        color:#fff;
        font-size:48px;
    }
    .each-slide img{
        margin:0 auto;
        width:100%;
        
               
    }
`