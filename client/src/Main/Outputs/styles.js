import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  padding: 20px;
  display: grid;
  grid-row-gap: 20px;
  grid-auto-rows: auto;
`;

// NOTE ---------------------------------------------------------CARD STYLING

export const CardContainer = styled.div`
  border-radius: 20px;
  background-size: 30%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

export const BlurbContainer = styled.div`


`;

export const CodeContainer = styled.div`
  
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
