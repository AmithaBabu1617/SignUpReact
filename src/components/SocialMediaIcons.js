import { styled, Button, Stack } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

export default function SocialMediaLinks() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#000",
    textAlign: "center",
    textTransform: "none",
    borderRadius: 5,
    boxShadow: "none",
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#FFDEDE",
    height: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      width="100%"
      spacing={{ xs: 1, md: 2 }}
    >
      <ColorButton
        variant="contained"
        startIcon={<GoogleIcon mx={0} />}
        href="https://www.google.com/"
        target="_blank"
      >
        Sign in with Google
      </ColorButton>
      <ColorButton
        variant="contained"
        href="https://www.facebook.com/"
        target="_blank"
      >
        <FacebookIcon mx="0px" sx={{ marginRight: "0px", color: "#455A94" }} />
      </ColorButton>
      <ColorButton
        variant="contained"
        href="https://www.apple.com/ae/"
        target="_blank"
      >
        <AppleIcon />
      </ColorButton>
    </Stack>
  );
}
