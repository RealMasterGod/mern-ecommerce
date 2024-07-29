import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { userRequest } from "../requestMethods";
import { format } from "timeago.js";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const Tr = styled.tr`
  & .widgetLgUser {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  & .widgetLgDate,
  .widgetLgAmount {
    font-weight: 300;
  }
`;

const Th = styled.th`
  text-align: left;
`;

const Td = styled.td``;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.span``;

const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: #${(props) => (props.type === "approved" ? "e5faf2" : props.type === "pending" ? "ebf1fe" : "fff0f1")};
  color: #${(props) => (props.type === "approved" ? "3bb077" : props.type === "pending" ? "2a7ade" : "d95087")};
`;

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/order");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        {orders.map((order) => (
          <Tr key={order._id}>
            <Td className="widgetLgUser">
              {/* <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
              <Name>{order.userId}</Name>
            </Td>
            <Td className="widgetLgDate">{format(order.createdAt)}</Td>
            <Td className="widgetLgAmount">{order.amount}</Td>
            <Td className="widgetLgStatus">
              <Button type={order.status}>{order.status}</Button>
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default WidgetLg;
