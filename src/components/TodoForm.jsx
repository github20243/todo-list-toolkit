import { Button, styled, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice/todoSlice';

const TodoForm = () => {
    const [text,setText] = useState("")
    const [image,setImage] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: Math.floor(Math.random() * 1000).toString(),
            text,
            image,
        }
        dispatch(addTodo(newTask))
    }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField label="New task" variant='outlined' value={text}  onChange={(e) => setText(e.target.value)}/>
      <TextField label="Image url" variant='outlined' type='url' value={image} onChange={(e) => setImage(e.target.value)}/>
      <StyledButton type="submit" variant="contained" color="primary">
        Add
      </StyledButton>
    </FormContainer>
  )
}

export default TodoForm

const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;
  margin: 0 auto;
  height: 250px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
  margin-top: 20px;
`;


const StyledButton = styled(Button)`
  padding: 8px 70px;
`;
