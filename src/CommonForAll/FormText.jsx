import React from "react";
import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { Field, useField } from "formik";

const FormText = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <Field
        as={Input}
        {...field}
        {...props}
        variant="flushed"
        borderRadius="none"
        focusBorderColor="none"
        _placeholder={{
          color: "#000000",
          fontWeight: "400",
          fontFamily: "lato,Arial,sans-serif",
          fontSize: "13px",
        }}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormText;
