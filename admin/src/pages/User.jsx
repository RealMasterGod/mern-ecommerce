import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Show = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const ShowImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ShowUsername = styled.span`
  font-weight: 600;
`;

const ShowUserTitle = styled.span`
  font-weight: 300;
`;

const ShowBottom = styled.div`
  margin-top: 20px;
`;

const ShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

const ShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;

  & .userShowIcon {
    font-size: 16px !important;
  }
`;

const ShowInfoTitle = styled.span`
  margin-left: 10px;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

const UpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UpdateLeft = styled.div``;

const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  & input {
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
  }
`;

const Label = styled.label``;

const Input = styled.input``;

const UpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
  & label .userUpdateIcon {
    cursor: pointer;
  }
`;

const UpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;

const User = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Edit User</Title>
        <Link to="/newUser">
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <UserContainer>
        <Show>
          <ShowTop>
            <ShowImage src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <ShowTopTitle>
              <ShowUsername>Anna Becker</ShowUsername>
              <ShowUserTitle>Software Engineer</ShowUserTitle>
            </ShowTopTitle>
          </ShowTop>
          <ShowBottom>
            <ShowTitle>Account Details</ShowTitle>
            <ShowInfo>
              <PermIdentity className="userShowIcon" />
              <ShowInfoTitle>annabeck99</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <CalendarToday className="userShowIcon" />
              <ShowInfoTitle>10.12.1999</ShowInfoTitle>
            </ShowInfo>
            <ShowTitle>Contact Details</ShowTitle>
            <ShowInfo>
              <PhoneAndroid className="userShowIcon" />
              <ShowInfoTitle>+1 123 456 67</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <MailOutline className="userShowIcon" />
              <ShowInfoTitle>annabeck99@gmail.com</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <LocationSearching className="userShowIcon" />
              <ShowInfoTitle>New York | USA</ShowInfoTitle>
            </ShowInfo>
          </ShowBottom>
        </Show>
        <UserUpdate>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </UpdateItem>
              <UpdateItem>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </UpdateItem>
              <UpdateItem>
                <Label>Email</Label>
                <Input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </UpdateItem>
              <UpdateItem>
                <Label>Phone</Label>
                <Input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </UpdateItem>
              <UpdateItem>
                <Label>Address</Label>
                <Input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </UpdateItem>
            </UpdateLeft>
            <UpdateRight>
              <UpdateUpload>
                <UpdateImage src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <Label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </Label>
                <Input type="file" id="file" style={{ display: "none" }} />
              </UpdateUpload>
              <UpdateButton>Update</UpdateButton>
            </UpdateRight>
          </UpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
