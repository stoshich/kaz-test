import { Button } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import './App.css'
import ItemsList from './components/ItemsList';
import ModalConfirm from './components/ModalConfirm';
import ModalInput from './components/ModalInput';

function App() {


  const [open, setOpen] = useState(false)
  const [openConfirm, setOpenConfirm] = useState(false)
  const selectedId = useSelector(state => state.list.selectedId)

  const deleteHandler = () => {
    setOpenConfirm(true)
  }


  return (
    <div className="App">
      <div className='btns'>
        <Button variant='contained' onClick={() => setOpen(true)}>Добавить</Button>
        <Button variant='contained' color='error' onClick={deleteHandler} disabled={!selectedId}>Удалить</Button>
      </div>
      <ItemsList />
      <ModalInput open={open} setOpen={setOpen} />
      <ModalConfirm open={openConfirm} setOpen={setOpenConfirm} />
    </div>
  )
}

export default App
