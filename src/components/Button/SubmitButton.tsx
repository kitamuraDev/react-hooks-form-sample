import { Button } from "@chakra-ui/react";
import React, { ReactNode, VFC } from "react";
import { FormState } from "react-hook-form";
import { TodoInputType } from "../Form/ChakraForm";

type Props = {
  children: ReactNode;
  formState: FormState<TodoInputType>;
};

const SubmitButton: VFC<Props> = ({ children, formState }) => (
  <Button
    type="submit"
    disabled={!formState.isValid}
    isLoading={formState.isSubmitting}
    bg={"blue.300"}
    color={"white"}
    _hover={{
      bg: "blue.500"
    }}
  >
    {children}
  </Button>
);

export default SubmitButton;
