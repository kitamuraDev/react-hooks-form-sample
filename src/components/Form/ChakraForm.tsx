import {
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "../Button/SubmitButton";

// 入力項目の型
export type TodoInputType = {
  title: string;
  value: string;
  group: string;
};

export default function ChakraForm() {
  const [todo, setTodo] = useState<TodoInputType[]>([]);
  console.table(todo);

  const { register, handleSubmit, reset, formState } = useForm<TodoInputType>({
    mode: "all"
  });

  const handleOnSubmit: SubmitHandler<TodoInputType> = useCallback(
    (data) => {
      setTodo((prev) => [...prev, data]);
      reset();
    },
    [reset]
  );

  return (
    <FormControl as="form" onSubmit={handleSubmit(handleOnSubmit)}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel m={0}>Title</FormLabel>
          <Input
            type="text"
            placeholder="someting todo hire"
            {...register("title", {
              required: true,
              minLength: 3
            })}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={0}>Value</FormLabel>
          <Textarea
            placeholder="Please write the contents of todo if necessary"
            {...register("value")}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={0}>Group</FormLabel>
          <Select
            placeholder="Select group"
            {...register("group", { required: true })}
          >
            <option value="work">仕事</option>
            <option value="daily">日常</option>
            <option value="high">優先度（高い）</option>
            <option value="low">優先度（低い）</option>
          </Select>
        </FormControl>
        <Divider />
        <SubmitButton formState={formState}>Create Todo</SubmitButton>
      </Stack>
    </FormControl>
  );
}
