import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  padding: 20px;
  display: grid;
  grid-row-gap: 20px;
  grid-auto-rows: minmax(min-content, max-content);
`;

// NOTE ---------------------------------------------------------CARD STYLING

export const CardContainer = styled.div`
  border-radius: 20px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  position: relative;
  overflow: hidden;
`;

export const BlurbContainer = styled.div`


`;

export const CodeContainer = styled.div`
  
`;

export const CloseBtn = styled.div`
  background: red;
  opacity: 0.3;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(25%) translateY(-40%);
  cursor: pointer;
`;

export const Establishment = styled.h2`
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 8px;
  font-weight: 800;
`;

export const Address = styled.h3`
  font-size: 18px;
  line-height: 18px;
  font-weight: 300;
  opacity: 0.4;
`;

export const Code = styled.h2`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
`;
