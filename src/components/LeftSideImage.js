import Grid from "@mui/material/Grid";

import Image from "../assets/leftBannerImage.png";
import DarkImage from "../assets/DarkModeBannerImage.png";

const LeftSideImage = () => {
  return (
    <Grid
      item
      xs={false}
      sm={6}
      md={7}
      sx={{
        backgroundImage: (t) =>
          t.palette.mode === "light" ? `url(${Image})` : `url(${DarkImage})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        borderRadius: "25px 0 0 25px",
      }}
    />
  );
};

export default LeftSideImage;
