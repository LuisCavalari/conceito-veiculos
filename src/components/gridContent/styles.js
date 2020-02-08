import styled from 'styled-components';

export const Container = styled.div`
  max-width:1000px;
  margin:0 auto;
  width:100%;
  padding:10px;
  display:flex;
  justify-content:space-around;
  @media screen and (max-width:768px) {
    flex-direction:column;
  }
  .card-area {
    flex:1;
    margin-right:25px;
    overflow:hidden;
    border-radius:10px;
    
    img {
        width:100%;
        border-radius:10px;
        max-height:220px;

    }
    @media screen and (max-width:768px) {
          margin:0;
  }
  }
  .card {
    position: relative;
    cursor:pointer;
    &:hover .card-info {
      visibility:visible;
      opacity:1;
    }
    .card-info {
      transition:all 300ms linear;
      position: absolute;
      opacity:0;
      bottom:0;
      visibility:hidden;
      width:100%;
      padding:10px;
      background-color:rgba(0,0,0,0.7);
      color:#fff;
      .card-name {
        font-size:28px;
        text-align:center;
      }
    }
  }
`;
