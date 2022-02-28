import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle

} from '@mui/material';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks'
import { MarvelForm } from '../../components'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Full Name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'A description of the marvel',
    sortable: false,
    width: 160,
    
  },
  {
    field: 'comics_appeared',
    headerName: 'Comics Appeared In',
    width: 150,
    editable: true,
  },
  {
    field: 'super_power',
    headerName: 'Super Power',
    type: 'number',
    width: 110,
    editable: true,
  }
];

interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable = () => {
      let { marvelData, getData } = useGetData();
      let [ open, setOpen ] = useState(false);
      let [ gridData, setData ] = useState<GridSelectionModel>([ ])

      let handleOpen = () => {
        setOpen(true)
      }
      let handleClose = () => {
        setOpen(false);
      }

      let deleteData = async() => {
        for (let id in gridData){
          await server_calls.delete(`${gridData[id]}`)
        }
        
        window.location.reload()
      }
      console.log(gridData)
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Your Marvel Characters</h2>
        <DataGrid
          rows={marvelData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(newSelectionModel)=>{setData(newSelectionModel);}}
        />
        <Button onClick={handleOpen}>Update Character</Button>
        <Button variant='contained' color='secondary' onClick={deleteData}>Delete Character</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
          <DialogTitle id='form-dialog-title'>Update a Character</DialogTitle>
          <DialogContent>
            <DialogContentText>Character Id: {gridData[0]}</DialogContentText>
            <MarvelForm id={ `${gridData[0]}` } />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}