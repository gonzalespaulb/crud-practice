import { CardContainer, Establishment, BlurbContainer, Address, CodeContainer, Code } from "./styles"

const Card = ({establishmentInfo}) => {


    return <CardContainer>
        <BlurbContainer>

        <Establishment>{establishmentInfo.establishment}</Establishment>
        <Address>{establishmentInfo.location}</Address>
        </BlurbContainer>

        <CodeContainer>
            <Code>{establishmentInfo.bathroomCode}</Code>
        </CodeContainer>
    </CardContainer>
}

export default Card;