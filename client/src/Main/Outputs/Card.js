import {
  CardContainer,
  Establishment,
  BlurbContainer,
  Address,
  CodeContainer,
  Code,
  CloseBtn,
} from "./styles";

const Card = ({ establishmentInfo, deleteCode }) => {
  return (
    <CardContainer>
      <CloseBtn onClick={() => deleteCode(establishmentInfo._id)}/>
      <BlurbContainer>
        <Establishment>{establishmentInfo.establishment}</Establishment>
        <Address>{establishmentInfo.location}</Address>
      </BlurbContainer>

      <CodeContainer>
        <Code>{establishmentInfo.bathroomCode}</Code>
      </CodeContainer>
    </CardContainer>
  );
};

export default Card;
