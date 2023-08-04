import { TextField, makeStyles, Button } from '@material-ui/core'
import React,{useState} from 'react'
import rows from './rowsData';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//import axios from 'axios';
// import axios from 'axios';
//import * as axios from 'axios';
const axios = require('axios');

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


const Main = () => {
  const [rowsData, setRowsData] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age,setAge] = useState('');
  const [email,setEmail] = useState('');
  const navigate = useNavigate();


  // React.useEffect(() => {
  //   console.log('rowsData...hooks', rowsData);

  //   if (rowsData) {
  //     rows.push(rowsData)
  //   }
  //   // rowsData ? rowsData : '';
  //   console.log("afterpush elements...", rows);
  // })

  //const navigate = useNavigate();

  const postData = ()=>{
    console.log('firstName',firstName);
    console.log('lastName',lastName);
    console.log('age',age);
    console.log('email',email);

    let response; 
        try{
        response = axios.post(`https://645cce96250a246ae30eb3ae.mockapi.io/crupApi/`, {
          firstName,
          lastName,
          age,
          email
        })
        console.log('response...ok..200',response);
        //.then((response)=>{console.log('response...???',response)})
      }catch(err){
        console.log(err)
      }

      console.log('rows...???ExistingData..',rows);
      console.log('rows...???typeOf..',typeof rows);

      Object.preventExtensions(rows);

      rows.push({id:rows.length,firstName:firstName,lastName:lastName,age:age,email:email})

      navigate('/')

  }



  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <form  > */}
        <TextField id="outlined-secondary" type='text' required label="Enter your firstName" variant="outlined" color="secondary" onChange={(e)=>{setFirstName(e.target.value)}} />
        <TextField id="outlined-secondary" type='text' required label="Enter your lastName" variant="outlined" color="secondary" onChange={(e)=>{setLastName(e.target.value)}} />
        <TextField id="outlined-secondary" type='email' required label="Enter your email" variant="outlined" color="secondary" onChange={(e)=>{setAge(e.target.value)}} />
        <TextField id="outlined-secondary" type='number' required label="Enter your Age" variant="outlined" color="secondary" onChange={(e)=>{setEmail(e.target.value)}} />
        <Button size="large" type='submit' color='primary' variant='contained' className={classes.margin} onClick={postData}>Submit</Button>
      {/* </form> */}
    </div>
  )
}

export default Main



//handleSubmit function

// const handleSubmit = (event) => {
//   event.preventDefault();

//   // console.log('eventSubmitValue...',event);
//   // console.log('event.target[0].value..',event.target[0].value);
//   // console.log('event.target[1].value..',event.target[2].value);
//   // console.log('event.target[2].value..',event.target[4].value);
//   // console.log('event.target[3].value..',event.target[6].value);

//   // setRowsData({
//   //     id:rows.length+1,
//   //     firstName:event.target[0].value,
//   //     lastName:event.target[2].value,
//   //     age:event.target[6].value,
//   //     email:event.target[4].value
//   //   })


//   let uids = uuidv4();
//   const uniqueId = uids.slice(0, 8);
//   let firstName = event.target[0].value;
//   let lastName = event.target[2].value;
//   let age = event.target[6].value;
//   let email = event.target[4].value;
//   // let obj = {
//   //   id: uniqueId,
//   //   firstName: firstName,
//   //   lastName: lastName,
//   //   age: age,
//   //   email: email
//   // }

//   // const postData = () => {
//     let response; 
//     try{
//     response = axios.post(`https://645cce96250a246ae30eb3ae.mockapi.io/crupApi/`, {
//       firstName,
//       lastName,
//       age,
//       email
//     })
//     //.then((response)=>{console.log('response...???',response)})
//   }catch(err){
//     console.log(err)
//   }
//  // }

//   console.log('postDataInto..api',response);
//   //Object.preventExtensions(obj);
//   //Object.freeze(obj)
//   // rows.push(obj)

//   navigate('/');

//   console.log('rowsData...hooks', rowsData);

// }