import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraFormContainer from "./components/Form";

/**
 * Todoアプリのフォームを想定
 */
export default function App() {
  return (
    <ChakraProvider>
      <ChakraFormContainer />
    </ChakraProvider>
  );
}
