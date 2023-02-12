import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedId } from '../redux/slices/listSlice';
import { createTheme, ThemeProvider } from '@mui/material';

const ItemsList = () => {
  const selectedId = useSelector(state => state.list.selectedId)
  const notes = useSelector(state => state.list.items)
  const dispatch = useDispatch()
  const handleListItemClick = (id) => {
    dispatch(setSelectedId(id))
  }

  const theme = createTheme({
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              "backgroundColor": "#90caf9"
            }
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <List>
        {notes.map(item => (
          <ListItemButton
            key={item.id}
            selected={selectedId === item.id}
            onClick={() => handleListItemClick(item.id)}
          >
            <ListItemText primary={item.body} />
          </ListItemButton>
        ))}
      </List>
    </ThemeProvider>

  )
}

export default ItemsList