import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../dummyData";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const EditContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & .userListDelete {
    color: red;
    cursor: pointer;
    padding: 5px 10px;
  }
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Container>
            <Image src={params.row.avatar} />
            {params.row.username}
          </Container>
        );
      },
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <EditContainer>
            <Link to={"/user/" + params.row.id}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </EditContainer>
        );
      },
    },
  ];

  return (
    <Box sx={{ flex: 4 }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default UserList;
