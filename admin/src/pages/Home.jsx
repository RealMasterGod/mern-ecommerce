import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import Chart from "../components/Chart";
import { userData } from "../dummyData";
import FeaturedInfo from "../components/FeaturedInfo";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  flex: 4;
`;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/user/stats')
        res.data.map(item => (
          setUserStats(prev => [
            ...prev,
            {name:MONTHS[item._id - 1], "Active User": item.total},
          ])
        ))
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  },[MONTHS])
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSm />
        <WidgetLg />
      </Widgets>
    </Container>
  );
};

export default Home;
