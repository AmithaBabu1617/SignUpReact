import {
  styled,
  Container,
  Box,
  Grid,
  Paper,
  Stack,
  Link,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";

import ToggleTheme from "../components/DarkMode";
import LeftSideImage from "../components/LeftSideImage";
import RegistrationForm from "../components/RegistrationForm";
import SocialMediaLinks from "../components/SocialMediaIcons";

const Layout = ({ children }) => {
  const ColoredLine = styled(Box)(({ theme }) => ({
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.divider,
    height: 1,
  }));

  const LineBetweenText = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: 500,
    color: theme.palette.mode === "light" ? "#372463" : "#B5B5C0",
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "20px",

    "&:before": {
      content: "''",
      height: 1,
      width: 20,
      background: theme.palette.divider,
      display: "block",
      position: "absolute",
      top: "50%",
      left: "40%",
    },

    "&:after": {
      content: "''",
      height: 1,
      width: 20,
      background: theme.palette.divider,
      display: "block",
      position: "absolute",
      top: "50%",
      right: "40%",
    },
  }));

  return (
    <Container
      className="example-anime"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          minWidth: "100%",
        }}
      >
        <Grid container>
          <LeftSideImage />
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            component={Paper}
            elevation={6}
            square
            className="gradientBg"
            sx={{
              background: (theme) =>
                theme.palette.mode === "light"
                  ? "radial-gradient(ellipse at 51% 83%, #FFFFFF 82%, #DCEAF3 91%, #FAE2FD 100%);"
                  : "radial-gradient(circle at 51% 88%, #1E0B4C 42%, #31316B 81%, #451351 99%)",
            }}
          >
            <Box
              sx={{
                mx: "30px",
                my: "20px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                marginBottom={2}
              >
                <Box
                  component="h2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    m: 0,
                    color: "#DC6371",
                    textTransform: "capitalize",
                    fontSize: 12,
                  }}
                >
                  travelguru{" "}
                  <ExploreIcon
                    sx={{ color: "#DC6371", fontSize: 12, marginLeft: 1 }}
                  />
                </Box>
                <ToggleTheme />
              </Stack>
              <ColoredLine component="div" />
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="start"
                textAlign="left"
                margin="20px 0px"
              >
                <Box
                  component="h1"
                  sx={{ mb: 0, mt: 0, fontSize: 24, fontWeight: 900 }}
                >
                  Sign in to TravelGuru
                </Box>
                <Box
                  component="p"
                  sx={{
                    mb: 0,
                    mt: 0,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#C1C4D1",
                  }}
                >
                  Don't have an account?
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      color: "#DC6371",
                      fontSize: 14,
                      fontWeight: 600,
                      marginLeft: 1,
                    }}
                  >
                    {"Sign up"}
                  </Link>
                </Box>
              </Stack>
              <ColoredLine component="div" />
              <RegistrationForm />
              <ColoredLine component="div" />
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="start"
                textAlign="left"
                margin="20px 0px"
              >
                <LineBetweenText component="div" className="">
                  OR
                </LineBetweenText>
                <SocialMediaLinks />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Layout;
