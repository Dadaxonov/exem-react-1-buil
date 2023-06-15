import React from "react";
import { Text } from "../../../../components/text/Text";
import blog1 from "../../../../assets/imgs/blog1.svg";
import blog2 from "../../../../assets/imgs/blog2.svg";
import blog3 from "../../../../assets/imgs/blog3.svg";
import blog4 from "../../../../assets/imgs/blog4.svg";
export const Blog = () => {
  const arrText = [
    {
      title: "From Our Latest Blogs",
      subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        {arrText.map((item, index) => (
          <Text key={index} {...item} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <div style={{ width: "290px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src={blog1}
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src={blog2}
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src={blog3}
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src={blog4}
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
      </div>
    </div>
  );
};
