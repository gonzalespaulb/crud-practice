import {
  MainContainer,
  InputContainer,
  InputLabel,
  EstablishmentInput,
  LocationInput,
  CodeInput,
  BottomUnderline,
  SubmitBtn,
  SubmitText,
} from "./styles";

const Inputs = () => {
  return (
    <MainContainer>
      <InputContainer>
        <InputLabel>Establishment</InputLabel>
        <EstablishmentInput/>
        <BottomUnderline/>
      </InputContainer>

      <InputContainer>
        <InputLabel>Location</InputLabel>
        <LocationInput/>
        <BottomUnderline/>
      </InputContainer>

      <InputContainer>
        <InputLabel>Bathroom Code</InputLabel>
        <CodeInput/>
        <BottomUnderline/>
      </InputContainer>

      <SubmitBtn>
        <SubmitText>Submit</SubmitText>
      </SubmitBtn>
    </MainContainer>
  );
};

export default Inputs;