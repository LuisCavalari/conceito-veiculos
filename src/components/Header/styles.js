import styled from "styled-components";

export const Headers = styled.header `
    height: 100px;
    background-color:#001e36;
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

`

export const Container = styled.div`
    max-width: 1000px;
    margin:0 auto;
    height: 100%;
    .menu-mobile {
        color:#fff;
        display: none;
        width: 100%;
        height: 100%;
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