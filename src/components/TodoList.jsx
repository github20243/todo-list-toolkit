import { Box, Button, styled } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todoSlice/todoSlice";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      {todos?.map((item) => (
        <StyledListItem key={item.id}>
          <p>{item.text}</p>
          <img src={item.image} alt="" />
          <Button color="error" variant="outlined" onClick={() => handleDelete(item.id)}>Delete</Button>
        </StyledListItem>
      ))}
    </>
  );
};

export default TodoList;

const StyledListItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
  background-color: bisque;
  margin: 0 auto;
  padding: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: whitesmoke;
  }
`;
