import React from "react";
import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  // first li active
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &.active,
  &:hover {
    background-color: rgb(240, 240, 255);
  }
  & .sidebarIcon {
    margin-right: 5px;
    font-size: 20px !important;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link to="/" className="link">
              <ListItem className="active">
                <LineStyle className="sidebarIcon" />
                Home
              </ListItem>
            </Link>
            <ListItem>
              <Timeline className="sidebarIcon" />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp className="sidebarIcon" />
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link to="/users" className="link">
              <ListItem>
                <PermIdentity className="sidebarIcon" />
                Users
              </ListItem>
            </Link>
            <Link to="/products" className="link">
              <ListItem>
                <Storefront className="sidebarIcon" />
                Products
              </ListItem>
            </Link>
            <ListItem>
              <AttachMoney className="sidebarIcon" />
              Transactions
            </ListItem>
            <ListItem>
              <BarChart className="sidebarIcon" />
              Reports
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline className="sidebarIcon" />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutline className="sidebarIcon" />
              Manage
            </ListItem>
            <ListItem>
              <Timeline className="sidebarIcon" />
              Analytics
            </ListItem>
            <ListItem>
              <Report className="sidebarIcon" />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
