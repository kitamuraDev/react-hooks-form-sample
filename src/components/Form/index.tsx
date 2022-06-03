import React from "react";
import { Flex, Box, Stack, Heading, useColorModeValue } from "@chakra-ui/react";

import ChakraForm from "./ChakraForm";

export default function ChakraFormContainer() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        w="container.sm"
        maxW={"container.md"}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Create Your Todo</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <ChakraForm />
        </Box>
      </Stack>
    </Flex>
  );
}
