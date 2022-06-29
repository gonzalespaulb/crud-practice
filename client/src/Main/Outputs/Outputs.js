import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";
import { MainContainer } from "./styles";

const Outputs = () => {
  const [establishmentData, setEstablishmentData] = useState([]);

  const getOutputs = async () => {
    try {
      const data = await Axios.get("http://localhost:3001/");
      setEstablishmentData(data.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getOutputs();
  }, []);

  const renderBussin = () => {
    return establishmentData.map((establishmentInfo) => {
        return <Card establishmentInfo={establishmentInfo}/>
    })
  }

  return (
    <MainContainer>
        {renderBussin()}
    </MainContainer>
  );
};

export default Outputs;
