import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import './App.css'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ModalInput from './components/ModalInput';

function App() {

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(false)
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="App">
      <div className='btns'>
        <Button variant='contained' onClick={() => setOpen(true)}>Добавить</Button>
        <Button variant='contained' color='error'>Удалить</Button>
      </div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <ModalInput open={open} setOpen={setOpen} />
    </div>
  )
}

export default App
