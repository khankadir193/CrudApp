import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Button, makeStyles } from '@material-ui/core';
import rows from './rowsData';
import { Link, useNavigate } from 'react-router-dom';
import Edit from './Edit';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "26rem",
    margin: "4rem",
    '& .MuiButton-outlinedPrimary': {
      width: "100%",
      height: "3rem",
      backgroundColor: "blanchedalmond",
      color: "chocolate",
      fontSize: "xx-large"
    }
  }

}))


// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



const TableData = () => {
  const classes = useStyles();
  const navigate = useNavigate();


  const [name, setName] = React.useState();


  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 300,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 500,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 300,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditClick(params.row.id, params.row.firstName, params.row.lastName, params.row.age, params.row.email)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
          //onClick={() => handleButtonClick(params.row.id, params)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];


  const handleEditClick = (id, firstName, lastName, age, email) => {
    console.log('id...', id);
    console.log('firstName...', firstName);
    console.log('lastName...', lastName);
    console.log('age', age);
    console.log('email', email);
    localStorage.setItem('Id', id);
    localStorage.setItem('firstName', firstName ? firstName : '');
    localStorage.setItem('lastName', lastName ? lastName : '');
    localStorage.setItem('Age', age ? age : '');
    localStorage.setItem('email', email ? email : '');

    navigate('/Update')

  }



  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      <Link to='/create'>
        <Button color='primary' variant='outlined' onClick={() => { navigate('/create') }} >Add Item</Button>
      </Link>
      {/* {name ? <Edit name={name} /> : null} */}
    </div>
  )
}

export default TableData