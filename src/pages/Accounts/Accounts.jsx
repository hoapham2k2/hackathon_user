import { Box } from "@mui/material";
import React from "react";
import coverImg from "../../assets/coverImg.jpg";
import avatarImg from "../../assets/avatar.jpg";

const Accounts = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "350px",
          backgroundColor: "red",
          position: "relative",
        }}
      >
        <img
          src={coverImg}
          alt="coverImg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          position: "absolute",
          top: "50%",
          left: "2%",
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "green",
            borderRadius: "50%",
            border: "5px solid white",
            backgroundImage: `url(${avatarImg})`,
            backgroundSize: "cover",
          }}
        ></Box>
      </Box>
    </div>
  );
};

export default Accounts;
