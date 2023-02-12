import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, setSelectedId } from '../redux/slices/listSlice'

const ModalConfirm = ({ open, setOpen }) => {

  const dispatch = useDispatch()
  const selectedId = useSelector(state => state.list.selectedId)

  const onClickHandler = () => {
    dispatch(removeItem(selectedId))
    dispatch(setSelectedId(''))
    setOpen(false)
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
        <Typography id="modal-modal-title" variant="h6" component="h2">Точно удалить запись?</Typography>
        <div className='modal-btns'>
          <Button variant='outlined' onClick={onClickHandler}>Да</Button>
          <Button variant='outlined' color='error' onClick={() => setOpen(false)}>Нет</Button>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalConfirm