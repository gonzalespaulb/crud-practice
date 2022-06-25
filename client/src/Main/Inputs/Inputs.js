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
  Blurb,
  BlurbContainer,
  SubmitContainer,
  SubmitBlur,
  ContainerOverlay
} from "./styles";

const Inputs = () => {
  return (
    <MainContainer>
        <ContainerOverlay/>
      <BlurbContainer>
        <Blurb>Help me, help you.</Blurb>
      </BlurbContainer>

      <InputContainer>
        <InputLabel>Establishment</InputLabel>
        <EstablishmentInput />
        <BottomUnderline />
      </InputContainer>

      <InputContainer>
        <InputLabel>Location</InputLabel>
        <LocationInput />
        <BottomUnderline />
      </InputContainer>

      <InputContainer>
        <InputLabel>Bathroom Code</InputLabel>
        <CodeInput />
        <BottomUnderline />
      </InputContainer>

    <SubmitContainer>

      <SubmitBtn>
        <SubmitText>Submit</SubmitText>
      </SubmitBtn>
      <SubmitBlur/>
    </SubmitContainer>
    </MainContainer>
  );
};

export default Inputs;
