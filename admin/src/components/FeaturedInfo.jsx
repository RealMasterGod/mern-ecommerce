import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-size: 20px;
`;

const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  & .featuredIcon {
    font-size: 20px;
    margin-left: 5px;
    color: green;
  }
  & .negative {
    color: red;
  }
`;

const Sub = styled.span`
  font-size: 15px;
  color: gray;
`;

const FeaturedInfo = () => {
  const [income,setIncome] = useState([])
  const [perc,setPerc] = useState(0)
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('/order/income')
        // console.log(res.data)
        setIncome(res.data)
        setPerc((res.data[1].total*100)/res.data[0].total - 100)
      } catch (err) {
        console.log(err)
      }
    }
    getIncome()
  }, [])
  return (
    <Container>
      <FeaturedItem>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>${income[1]?.total}</Money>
          <MoneyRate>
            {Math.floor(perc)}{" "}
            {perc < 0 ? <ArrowDownward className="featuredIcon negative" /> : <ArrowUpward className="featuredIcon" />}
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </FeaturedItem>
      <FeaturedItem>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$4,415</Money>
          <MoneyRate>
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </FeaturedItem>
      <FeaturedItem>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$2,225</Money>
          <MoneyRate>
            +2.4 <ArrowUpward className="featuredIcon" />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </FeaturedItem>
    </Container>
  );
};

export default FeaturedInfo;
