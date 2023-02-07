import { useSelector } from "react-redux";
import { Container, Button } from "@mui/material";

const WelcomePage = () => {
  const user = useSelector((state) => state.auth.loggedInUser);

  return (
    <Container>
      <h1>Welcome {user.firstName}</h1>
      <Button
        component="a"
        href="/"
        sx={{ color: (theme) => theme.palette.text.primary }}
      >
        Back to Login
      </Button>
    </Container>
  );
};

export default WelcomePage;
