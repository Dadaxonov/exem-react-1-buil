import React, { useEffect, useState } from "react";
import { Text } from "../../../../components/text/Text";
import { CardCom } from "../../../../components/card/card-com";
import { Button } from "@mui/material";
const BASE_URL = "http://localhost:3001/products";
export const NewProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const arrText = [
    {
      title: "New Arrival products",
      subTitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.",
    },
  ];
  const arrCard = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
  ];
  return (
    <div id="newProduct" style={{ paddingTop: "80px" }}>
      {arrText.map((item, index) => (
        <Text key={index} {...item} />
      ))}

      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          margin: "0 auto",
          paddingTop: "60px",
          gap: "10px",
        }}
      >
        {data.map((item, index) =>
          item.category == "new" ? <CardCom key={index} {...item} /> : ""
        )}
      </div>
    </div>
  );
};
