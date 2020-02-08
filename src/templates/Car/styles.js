import styled from 'styled-components';

export const Container = styled.div`
  max-width:1000px;
  width:100%;
  margin:15px auto;
  min-height:calc(100vh - 360px);
  
    
  
  .title {
      text-align:center;
      font-size:34px;
      margin-bottom:10px;
  }
  .each-slide {
      width:100%;
    display:flex;
      justify-content:center;
      align-items:center;
  }
  .each-slide img{
      border-radius:10px;
      width:100%;
      height:auto;
 
  }
  section {
    font-size:22px
  }
`;
