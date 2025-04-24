import { Button, styled, Typography } from "@mui/material";
import { useColorMode } from "../../../context";

const Wrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  transition: "all 0.3s ease-in-out",
}));

const Card = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: theme.shadows[3],
  textAlign: "center",
  maxWidth: "400px",
  width: "100%",
}));

const Home = () => {
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Wrapper>
      <Card>
        <Typography variant="h4" gutterBottom>
          Welcome Home 🏡
        </Typography>
        <Typography variant="body1" gutterBottom>
          Current Theme: <strong>{mode}</strong>
        </Typography>
        <Button variant="contained" onClick={toggleColorMode}>
          Toggle Theme
        </Button>
      </Card>
    </Wrapper>
  );
};

export default Home;
