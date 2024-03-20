import { Box, Card, CardContent, CardHeader, Container, TableCell, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const small = "0.75rem";
export const medium = "1.05rem";
export const large = "1.5rem";

export const spaceBetween = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
export const spaceAround = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
export const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const MyContainer = styled(Container)({
    // border: '1px solid red',
    minHeight: '80vh',
    background: '#e3dddd',
    boxSizing: 'border-box',
}); 
export const DoubleBox = styled(Box)({
  ...spaceAround,
//   border: "1.5px solid blue",
  width: "100%",
//   padding: "3px",
  minHeight: '40vh',
});

export const CBox = styled(Box)(({ flex }) => ({
//   border: "1px solid red",
  flex: flex,
  ...center,
  margin: "2px",
//   border: '1px solid red', 
  width: '100%',
  height: '40vh'
}));

export const MyCard = styled(Card)({
    width: '100%',
    height: '40vh',
//   border: '1px solid black',
  padding: "5px",
  "&:hover": {
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  },
});

export const MyCardHeader = styled(CardHeader)({
  flex: "1 1 auto",
  overflow: "hidden",
  // border: '1px solid red',
  borderBottom: "1px solid #ddd",
});

export const Text = styled("p")(({ size, bold, p, m, border, color }) => ({
  fontSize: !size
    ? medium
    : size === "large"
    ? large
    : size === "small"
    ? small
    : medium,
  fontWeight: bold && "bold",
  margin: m && m,
  padding: p && p,
  border: border && "1px dashed #ddd",
  color: color,
}));

export const HeaderAction = styled(NavLink)({
  "&:hover": {
    textDecoration: "none",
  },
});

export const MyCardContent = styled(CardContent)({
//   border: "1px solid  blue",
});



export const ClickCell = styled(TableCell)({
  cursor: 'pointer',
  // border: '1px solid red',
  '&:hover': {
    color: 'white',
    background: 'orange',
  },
  borderRadius: '4px',

});