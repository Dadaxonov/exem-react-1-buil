import React from "react";
import { Add } from "../../assets/icons/add";
import { Trash } from "../../assets/icons/Trash";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "../../store/product";
export const CardCom = ({ id, img, name, price }) => {
  const { products } = useSelector((state) => state.product);
  const isValid = products?.find((item) => item.id == id);
  const dispatch = useDispatch();
  const delProduct = () => {
    dispatch(del(id));
  };
  const addProduct = () => {
    dispatch(add({ id, img, name, price }));
  };
  return (
    <div
      style={{
        maxWidth: "290px",
        padding: "10px",
        boxShadow: "0px 0px 11.83px 1.17px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ width: "270px", height: "270px" }}>
        <img
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={img}
          alt="sdsd"
        />
      </div>
      <p style={{ padding: "40px 0px" }}>{name}</p>
      <div
        style={{
          alignItems: "baseline",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>${price}</p>
        <p>
          {isValid ? (
            <Button
              onClick={delProduct}
              variant="outlined"
              style={{ borderRadius: "100px" }}
            >
              <Trash />
            </Button>
          ) : (
            <Button
              onClick={addProduct}
              variant="outlined"
              style={{ borderRadius: "100px" }}
            >
              <Add />
            </Button>
          )}
        </p>
      </div>
    </div>
  );
};
