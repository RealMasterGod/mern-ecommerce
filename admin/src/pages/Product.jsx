import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { productData } from "../dummyData";
import { Publish } from "@mui/icons-material";
import Chart from "../components/Chart";
import { Link, useLocation } from "react-router-dom";
import {useSelector} from 'react-redux'
import { userRequest } from "../requestMethods";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const Top = styled.div`
  display: flex;
`;

const TopLeft = styled.div`
  flex: 1;
`;

const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const InfoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const InfoBottom = styled.div`
  margin-top: 10px;
`;

const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const InfoKey = styled.span``;

const InfoValue = styled.span`
  font-weight: 300;
`;

const Bottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  & select {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    &:focus {
      outline: none;
    }
  }
  & label {
    margin-bottom: 10px;
    color: gray;
  }
`;

const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const Label = styled.label``;

const Input = styled.input``;

const Select = styled.select``;

const Option = styled.option``;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Upload = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Product = () => {
  const location = useLocation()
  const productId = location.pathname.split("/")[2]
  const [pStats, setPStats] = useState([])

  const product = useSelector(store => store.product.products.find(product => product._id === productId))
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
        const res = await userRequest.get("/order/income?pid="+productId)
        const list = res.data.sort((a,b) => {
          return a._id - b._id
        })
        list.map(item => (
          setPStats(prev => [
            ...prev,
            {name:MONTHS[item._id - 1], Sales: item.total},
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
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newproduct">
          <AddButton className="productAddButton">Create</AddButton>
        </Link>
      </TitleContainer>
      <Top>
        <TopLeft>
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImage
              src={product.img}
              alt=""
              className="productInfoImg"
            />
            <Name>{product.title}</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey>id:</InfoKey>
              <InfoValue>{product._id}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>sales:</InfoKey>
              <InfoValue>5123</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>active:</InfoKey>
              <InfoValue>yes</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>in stock:</InfoKey>
              <InfoValue>{`${product.inStock}`}</InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <Label>Product Name</Label>
            <Input type="text" placeholder={product.title} />
            <Label>Product Description</Label>
            <Input type="text" placeholder={product.desc} />
            <Label>Product Price</Label>
            <Input type="text" placeholder={product.price} />
            <Label>In Stock</Label>
            <Select name="inStock" id="idStock">
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
            {/* <Label>Active</Label>
            <Select name="active" id="active">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select> */}
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImage src={product.img} />
              <Label for="file">
                <Publish />
              </Label>
              <Input type="file" id="file" style={{ display: "none" }} />
            </Upload>
            <UpdateButton>Update</UpdateButton>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  );
};

export default Product;
