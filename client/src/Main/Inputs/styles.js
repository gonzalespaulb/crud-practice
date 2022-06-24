import styled from "styled-components";

export const MainContainer = styled.div`
    background: #fff;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.div`
    position: relative;
`;

export const InputLabel = styled.h2`
    font-size: 24px;
`;

const InputStyling = styled.input`
    border: none;
`;

export const EstablishmentInput = styled(InputStyling)`

`;

export const LocationInput = styled(InputStyling)`

`;

export const CodeInput = styled(InputStyling)`

`;

export const SubmitBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: blue;
    padding: 25px;
    cursor: pointer;
`;

export const SubmitText = styled.h3`
    font-size: 24px;
    line-height: 24px;
`;

export const BottomUnderline = styled.div`
    height: 2px;
    width: 100%;
    background: black;
    position: absolute;
    bottom: 0;
    left: 0;
`;