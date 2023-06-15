import { Button, Stack, Typography, Dialog } from "@mui/material";
import { Link } from "react-router-dom";
import { Strelka } from "../../assets/icons/strelka";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Trash } from "../../assets/icons/Trash";
import { Dollor } from "../../assets/icons/dollor";
import { incrimend, dicriment, del } from "../../store/product";
import React from "react";

export const Card = () => {
  const dispacht = useDispatch();
  const { products } = useSelector((state) => {
    return state.product;
  });
  let qiymat = 0;

  return (
    <>
      <Stack style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Stack
          style={{ padding: "110px", backgroundColor: "#F6F6F6" }}
          alignItems={"center"}
        >
          <Typography variant="h4" paddingBottom={"22px"}>
            <Link to="/card">Card</Link>
          </Typography>
          <span
            style={{
              backgroundColor: "#5A5AC9",
              height: "2px",
              width: "60px",
            }}
          ></span>
          <Typography paddingTop={"22px"} variant="p">
            <Link to="/">Home</Link>
          </Typography>
          <Strelka />
          <Typography variant="p">
            <Link to="/card">
              <p style={{ color: "#5A5AC9" }}>Card</p>
            </Link>
          </Typography>
        </Stack>
        <Typography padding={"50px 50px"} variant="h4">
          Your cart items
        </Typography>
        <hr style={{ marginBottom: "30px" }} />
        <Stack>
          <table style={{ width: "100%" }}>
            <tr
              style={{
                padding: "10px 15px",
                direction: "row",
                justifyContent: "space-between",
                backgroundColor: "#5A5AC9",
              }}
            >
              <th>
                <Typography color={"#fff"} variant="p">
                  Product Image
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="p">
                  Product Name
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="p">
                  Product Caunt
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="p">
                  Product Price
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="p">
                  Delete Product
                </Typography>
              </th>
            </tr>
            {products?.map((item) => {
              {
                qiymat += item.price * item.count;
              }
              return (
                <tr key={item.id}>
                  <th style={{ padding: "30px 20px" }}>
                    <div style={{ width: "300px", height: "300px" }}>
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={item.img}
                        alt="img"
                      />
                    </div>
                  </th>
                  <th>
                    <p>{item.name}</p>
                  </th>
                  <th>
                    <Button
                      onClick={() => dispacht(incrimend(item.id))}
                      variant="outlined"
                    >
                      +
                    </Button>
                    <p>{item.count}</p>
                    <Button
                      onClick={() => dispacht(dicriment(item.id))}
                      variant="outlined"
                    >
                      -
                    </Button>
                  </th>
                  <th>
                    <p>{item.price * item.count}$</p>
                  </th>

                  <th>
                    <Button onClick={() => dispacht(del(item.id))}>
                      <Trash />
                    </Button>
                  </th>
                </tr>
              );
            })}
          </table>
        </Stack>
        <Stack
          bgcolor={"#46e416"}
          paddingTop={"50px"}
          paddingBottom={"50px"}
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Typography variant="h4">Total Price:</Typography>
          <Typography variant="h4">{qiymat}$</Typography>
          <Button onClick={() => {}} variant="outlined">
            BUY
            <Dollor />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
