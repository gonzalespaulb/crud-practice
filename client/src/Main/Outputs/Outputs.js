import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";
import { MainContainer } from "./styles";

const Outputs = () => {
  const [establishmentData, setEstablishmentData] = useState([]);

  const getOutputs = () => {
    Axios.get("http://localhost:3001/").then((response) => {
      setEstablishmentData(response.data);
    })
  }

  const deleteCode = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
  }

  useEffect(() => {
    getOutputs();
  }, []);

  const renderToiletCards = () => {
    return establishmentData.map((establishmentInfo, key) => {
        return <Card establishmentInfo={establishmentInfo} key={key} deleteCode={deleteCode}/>
    })
  }

  return (
    <MainContainer>
        {renderToiletCards()}
    </MainContainer>
  );
};

export default Outputs;
