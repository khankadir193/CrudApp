import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Button, makeStyles,TextField } from '@material-ui/core';
import rows from './rowsData';
import { Link, useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '117ch',
            //   border:"1px solid blue"
            borderRadius: "1rem"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        // width:"103ch",
        // margin:"17px",
        alignItems: "center",
        height: "100vh"
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },

}));

const Edit = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [id,setId] = React.useState();
    const [firstName,setFirstName] = React.useState();
    const [lastName,setLastName] = React.useState();
    const [age,setAge] = React.useState();
    const [email,setEmail] = React.useState();

    React.useEffect(()=>{
        console.log('localStorage.getItem(Id)',localStorage.getItem('Id'));
        setId(localStorage.getItem('Id'));
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setAge(localStorage.getItem('Age'));
        setEmail(localStorage.getItem('email'));
    },[])

    const index = rows.map((element)=>{
        return element.id
    }).indexOf(Number(id));

    const handleUpdate = (event) => {
        event.preventDefault();

        let empItem = rows[index];

        empItem.firstName = firstName;
        empItem.lastName = lastName;
        empItem.age = age;
        empItem.email = email;

        console.log('empItem...',empItem);
        
        

        navigate('/');
    }

    const handleChange = (e)=>{
        console.log('eventValues..???',e.target.value);
    }

    return (
        <div>
            <form className={classes.root} onSubmit={handleUpdate}>
                <TextField id="outlined-secondary" type='text' required label="Enter your firstName" variant="outlined" color="secondary" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
                <TextField id="outlined-secondary" type='text' required label="Enter your lastName" variant="outlined" color="secondary" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
                <TextField id="outlined-secondary" type='email' required label="Enter your email" variant="outlined" color="secondary" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <TextField id="outlined-secondary" type='number' required label="Enter your Age" variant="outlined" color="secondary" value={age} onChange={(e)=>{setAge(e.target.value)}} />
                <Button size="large" type='submit' color='primary' variant='contained' className={classes.margin}>Update</Button>
            </form>
        </div>
    )
}

export default Edit