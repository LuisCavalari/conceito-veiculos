import styled from 'styled-components';

export const Container = styled.div`
  max-width:1000px;
  width:100%;
  margin:0 auto;
  min-height:calc(100vh - 360px);
  margin-top:20px;
  h2 {
      margin-bottom:16px;
  }
  .cars-grid {
      width:100%;
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:15px;
      margin-bottom:15px;
      @media screen and (max-width:768px) {
        display:flex;
        width:100%;
        justify-content:center;
        align-items:center;
        flex-direction:column;
      }
  }
  .card-car {
      overflow:hidden;
      border-radius:5px;
      width:100%;
      column-span:all;
      position: relative;
      flex:1;
      cursor:pointer;
      img {
          width:100%;
          height:100%;
      }
      @media screen and (max-width:768px) {
        width:100vw;
        margin:auto;
        margin:15px auto;
        img {
          width:100vw;
        }
      }
    .card-info {
      transition:all 300ms linear;
      position: absolute;
      bottom:0;
      width:100%;
      padding:10px;
      background-color:rgba(0,0,0,0.7);
      color:#fff;
      .card-name {
          font-size:24px;
          overflow:wrap;
      }
    }
  }
  

`;
