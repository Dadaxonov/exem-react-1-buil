import React from "react";
import { Text } from "../../../../components/text/Text";
import { CardCom } from "../../../../components/card/card-com";
import { Button } from "@mui/material";
export const OurProduct = () => {
  const arrText = [
    {
      title: "Our products",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?",
    },
  ];

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const newProductBtn = () => {};
  const classicProductBtn = () => {};
  const nimadurProductBtn = () => {};
  const all = () => {};

  return (
    <>
      <div id="idShop" style={{ paddingTop: "80px" }}>
        {arrText.map((item, index) => (
          <Text key={index} {...item} />
        ))}

        <div style={{ textAlign: "center", paddingTop: "57px" }}>
          <Button onClick={all}>
            <a href="#idShop">All Product </a>
          </Button>
          <Button onClick={all}>
            <a href="#newProduct"> New Product</a>
          </Button>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            display: "flex",
            margin: "0 auto",
            paddingTop: "60px",
            flexWrap: "wrap",
          }}
        >
          {data.map((item, index) => (
            <CardCom key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
