import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constant";

const SideBar = (props) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, ind) => (
        <button
          onClick={() => props.setSelectedCategory(category.name)}
          key={ind}
          className="category-btn"
          style={{
            background: category.name === props.selectedCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color:
                category.name === props.selectedCategory ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === props.selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
