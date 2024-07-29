import React, { useEffect } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../dummyData";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { deleteProduct, getProducts } from "../features/apiCalls";

const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const EditContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & .productListDelete {
    color: red;
    cursor: pointer;
  }
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

const ProductList = () => {
const dispatch = useDispatch()
  // const [data, setData] = useState(productRows);
  const products = useSelector(store => store.product.products)

  useEffect(() => {
    getProducts(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteProduct(dispatch, id)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220},
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <ListItem>
            <Image src={params.row.img} alt="" />
            {params.row.title}
          </ListItem>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <EditContainer>
            <Link to={"/product/" + params.row._id}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </EditContainer>
        );
      },
    },
  ];
  return (
    <Box sx={{ flex: 4 }}>
      <DataGrid
        rows={products}
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
        getRowId={row => row._id}
      />
    </Box>
  );
};

export default ProductList;
