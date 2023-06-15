import React from "react";
import "./style.css";
import { useRef, useEffect, useState } from "react";
const BASE_URL = "http://localhost:3001/products";

export const Updata = () => {
  const [data, setData] = useState({});
  const productIdPut = useRef();
  const productNamePut = useRef();
  const productPricePut = useRef();
  const productImgPut = useRef();
  const productCategoryPut = useRef();

  useEffect(() => {
    fetch(`${BASE_URL}/${productIdPut}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const putSubmit = (evt) => {
    evt.preventDefault();
    fetch(`${BASE_URL}/${productIdPut.current.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productNamePut.current.value
          ? productNamePut.current.value
          : data.name,
        price: productPricePut.current.value
          ? productPricePut.current.value
          : data.price,
        img: productImgPut.current.value
          ? productImgPut.current.value
          : data.img,
        category: productCategoryPut.current.value
          ? productCategoryPut.current.value
          : data.category,
      }),
    });
    productIdPut.current.value = "";
    productNamePut.current.value = "";
    productPricePut.current.value = "";
    productImgPut.current.value = "";
    productCategoryPut.current.value = "";
  };
  return (
    <div>
      <div className="divBlock">
        <h1 style={{ paddingBottom: "55px" }}>Update product</h1>
        <form className="form" onSubmit={putSubmit}>
          <input
            type="number"
            className="input"
            ref={productIdPut}
            name="id"
            placeholder="The id of the product to update"
            required
          />
          <input
            type="text"
            className="input"
            ref={productNamePut}
            name="name"
            placeholder="The name of the product to update"
          />
          <input
            type="text"
            className="input"
            ref={productPricePut}
            name="price"
            placeholder="The price of the product to update"
          />
          <input
            type="text"
            className="input"
            ref={productImgPut}
            name="img"
            placeholder="The img of the product to update"
          />
          <input
            type="text"
            className="input"
            ref={productCategoryPut}
            name="category"
            placeholder="The category of the product to update"
          />
          <button className="postBtn" type="submit">
            <h3>UpData</h3>
          </button>
        </form>
      </div>
    </div>
  );
};
