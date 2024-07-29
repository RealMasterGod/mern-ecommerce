import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Post = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;

  & .widgetSmIcon {
    font-size: 16px !important;
    margin-right: 5px;
  }
`;

const WidgetSm = () => {
  const [users, SetUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/user?new=true")
        SetUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  },[])
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {users.map(user => (
          <ListItem key={user._id}>
          <Image src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
          <UserContainer>
            <Name>{user.username}</Name>
            {/* <Post>Software Engineer</Post> */}
          </UserContainer>
          <Button>
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </ListItem>
        ))}
        
      </List>
    </Container>
  );
};

export default WidgetSm;
