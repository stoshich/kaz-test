import React, { useState } from 'react'
import { Box, Button, Modal, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/listSlice'

const ModalInput = ({ open, setOpen }) => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onClickHandler = () => {
    if (inputValue) {
      const note = {
        id: Date.now(),
        body: inputValue
      }
      dispatch(addItem(note))
      setInputValue('')
      setOpen(false)
    }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };
  return (

    <Modal
      open={open}
      onClose={() => setOpen(false)}

    >
      <Box sx={style}>
        <TextField fullWidth margin='normal' label='Поле ввода' variant='outlined' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <div className='modal-btns'>
          <Button variant='outlined' onClick={onClickHandler}>Ок</Button>
          <Button variant='outlined' color='error' onClick={() => setOpen(false)}>Отмена</Button>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalInput