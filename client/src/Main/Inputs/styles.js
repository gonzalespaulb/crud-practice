import styled from "styled-components";
import tp from "./assets/tptexture.jpeg";

export const MainContainer = styled.div`
  background: #fff;
  background-size: 30%;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${tp});
  padding: 100px;
`;

export const ContainerOverlay = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BlurbContainer = styled.div`
  width: 100%;
  margin-bottom: 48px;
  z-index: 10;
`;

export const Blurb = styled.h1`
  font-size: 52px;
  line-height: 52px;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
  width: 100%;
`;

export const InputLabel = styled.h2`
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 24px;
  font-weight: 300;
`;

const InputStyling = styled.input`
  border: none;
  width: 100%;
  font-size: 24px;
  font-weight: 300;
  background-color: transparent;
  border: none;
`;

export const EstablishmentInput = styled(InputStyling)``;

export const LocationInput = styled(InputStyling)``;

export const CodeInput = styled(InputStyling)``;

export const SubmitContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  padding: 25px;
  cursor: pointer;
  border-radius: 20px;
  width: 100%;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
`;

export const SubmitBlur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  z-index: -1;
  border-radius: 20px;
  opacity: 0.8;
  filter: blur(5px);
`;

export const SubmitText = styled.h3`
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
`;

export const BottomUnderline = styled.div`
  height: 2px;
  width: 100%;
  background: black;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.4;
`;
