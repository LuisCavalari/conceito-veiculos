import styled from "styled-components";

export const Headers = styled.header`
    height: 100px;
    background-color:#001e36;
    @media screen and (max-width:768px) {
            height:80px;
    }
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    
`
export const MenuMobile = styled.div`
    position:fixed;
    left:0;
    height:100vh;
    width:60vw;
    z-index:9999999999;
    background-color:#fff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    left:-100vw;
    transform: ${({ isOpen }) => isOpen ? 'translateX(100vw)' : 'translateX(-100vw)'};
    transition:all 600ms ease;
    ul li {
        padding:5px 10px;
        &:active {
            background-color:rgba(100,100,100,0.3)    
        }
        i {
            margin-right:8px;
        }
        display:flex;
        align-items:center;
        margin-bottom:8px;

    }

`
export const Banner = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 847px;
        width: 100%;
    }
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

`

export const Container = styled.div`
    max-width: 1000px;
    margin:0 auto;
    height: 100%;
    .menu-mobile {
        color:#fff;
        display: none;
        
        i {
            font-size:38px;
            margin-left:15px;
        }
        @media screen and (max-width:768px) {
                display:flex;
                justify-content:flex-start;
                align-items:center;
        }
    }
    nav {
        height: 100%;
        
    }

    nav ul  {
        list-style: none;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }
    nav ul li {
        font-size: 22px;
        color:#fff;
        display: flex;
        align-items: center;
        cursor:pointer;
        padding-bottom: 2px;
        transition: 300ms all linear;
        @media screen and (max-width:768px) {
            display:none;
        }
    }
    nav ul li i {
        margin-right: 5px;
    }
    nav ul li:hover {
        border-bottom: 1px solid #fff;
    }
    li.dropdown{
    position: relative;
}
    li.dropdown ul {
        position: absolute;
        display: block;
        background-color:rgba(0,30,54);
        display: none;
        bottom: -102px;
        z-index: 9999999;
        min-height: 100px;
        width: 240px;
        padding: 10px;
        border-radius: 5px;
       
    }

    li.dropdown:hover ul {
        display: block;
    }
`