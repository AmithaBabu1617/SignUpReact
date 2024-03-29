import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  InputAdornment,
  Box,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/system";

import useForm from "../Hooks/useForm";
import { getUser } from "../store/authSlice";

const CssTextField = styled(TextField)(({ theme }) => ({
  marginBottom: 20,
  marginTop: 10,
  ".MuiInputBase-root": {
    height: 40,
    border: "none",
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 500,
    backgroundColor: theme.palette.background.secondary,
    fieldset: {
      border: "none",
    },
  },
  "& .MuiFormHelperText-root": {
    position: "absolute",
    bottom: "-1.4rem",
  },
}));

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("testing");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formLogin = () => {
    setName("amithaBabu");
    setName("mariyamma");
    setName("babu");
    setName("babu");
    console.log("name--", name);
    // dispatch(getUser(values))
    //   .unwrap()
    //   .then(() => navigate("/welcome"))
    //   .catch((err) => {
    //     alert("User Not Found");
    //   });
    navigate("/welcome");
  };
  // const obj = {
  //   name: "amitha",
  //   address: {
  //     country: "India",
  //     pinCode: "000dsad",
  //   },
  // };
  // obj.qualification = "BTech";
  // const obj2 = obj;
  // obj.experience = "2";
  // console.log(obj2);
  // // const { name, address } = obj;
  // // console.log(" address--", address);
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <CssTextField
          type="text"
          name="name"
          sx={{ fieldset: { border: "none" } }}
          onChange={(event) => handleChange(event)}
          error={errors.name && errors.name.length > 0}
          helperText={errors.name}
          margin="normal"
          placeholder="Full name"
          size="small"
          hiddenLabel
          fullWidth
          required
        />
        <CssTextField
          type="mail"
          name="email"
          placeholder="Email"
          onChange={(event) => handleChange(event)}
          error={errors.email && errors.email.length > 0}
          helperText={errors.email}
          size="small"
          margin="normal"
          hiddenLabel
          fullWidth
          required
        />
        <CssTextField
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          hiddenLabel
          size="small"
          placeholder="Password"
          margin="normal"
          onChange={(event) => handleChange(event)}
          error={true}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: "1rem" }} />
                  ) : (
                    <Visibility sx={{ fontSize: "1rem" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            background:
              "linear-gradient(202deg, rgba(255,73,87,1) 39%, rgba(254,102,81,1) 91%)",
            textTransform: "capitalize",
            fontWeight: "600",
            color: "#ffffff",
            borderRadius: "10px",
            height: 40,
          }}
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
