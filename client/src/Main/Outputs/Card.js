import { CardContainer, Establishment, BlurbContainer, Address, CodeContainer, Code } from "./styles"

const Card = () => {
    return <CardContainer>
        <BlurbContainer>

        <Establishment>Starbucks</Establishment>
        <Address>2931 W. Hemlock St. Apt C, Oxnard, CA</Address>
        </BlurbContainer>

        <CodeContainer>
            <Code>4351234</Code>
        </CodeContainer>
    </CardContainer>
}

export default Card;