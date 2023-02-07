import { useState } from "react";
import { omit } from "lodash";

const useForm = (callbackSubmitForm) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case "name":
        if (value.length === 0) {
          setErrors({
            ...errors,
            name: "Full name is required",
          });
        } else {
          let userField = omit(errors, "name");
          setErrors(userField);
        }
        break;

      case "email":
        const isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
        if (!isValidEmail) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let emailObj = omit(errors, "email");
          setErrors(emailObj);
        }
        break;
      case "password":
        if (value.length < 8) {
          setErrors({
            ...errors,
            password: "Password should contains atleast 8 charaters",
          });
        } else {
          let passwordObj = omit(errors, "password");
          setErrors(passwordObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.preventDefault();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callbackSubmitForm();
    } else {
      alert("Please provide valid inputs!!");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
