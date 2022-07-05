import { useState } from "react";
import Axios from 'axios';
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
  ContainerOverlay,
} from "./styles";

const Inputs = () => {
  const [establishment, setEstablishment] = useState("");
  const [location, setLocation] = useState("");
  const [bathroomCode, setBathroomCode] = useState("");


  const submitInput = async () => {

    const clearFields = () => {
      setEstablishment('');
      setLocation('');
      setBathroomCode('');
    }

   Axios.post('http://localhost:3001/insert', {
      establishment,
      location, 
      bathroomCode, 
    }).then((res) => {
      console.log(res);
      clearFields();
    }).then((err) => console.log(err))


  }

  return (
    <MainContainer>
      <ContainerOverlay />
      <BlurbContainer>
        <Blurb>Help me, help you.</Blurb>
      </BlurbContainer>

      <InputContainer>
        <InputLabel>Establishment</InputLabel>
        <EstablishmentInput
          value={establishment}
          onChange={(e) => setEstablishment(e.target.value)}
        />
        <BottomUnderline />
      </InputContainer>

      <InputContainer>
        <InputLabel>Location</InputLabel>
        <LocationInput
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <BottomUnderline />
      </InputContainer>

      <InputContainer>
        <InputLabel>Bathroom Code</InputLabel>
        <CodeInput
          value={bathroomCode}
          onChange={(e) => setBathroomCode(e.target.value)}
        />
        <BottomUnderline />
      </InputContainer>

      <SubmitContainer>
        <SubmitBtn onClick={submitInput}>
          <SubmitText>Submit</SubmitText>
        </SubmitBtn>
        <SubmitBlur />
      </SubmitContainer>
    </MainContainer>
  );
};

export default Inputs;
