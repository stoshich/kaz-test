import React from 'react'
import { Box, Modal, Typography } from '@mui/material'

const ModalInput = ({ open, setOpen }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'primary.dark',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };
  return (

    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">modal</Typography>
      </Box>
    </Modal>
  )
}

export default ModalInput