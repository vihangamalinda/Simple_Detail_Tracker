import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from "./AddUser.module.css"


const AddUser = (props) => {
const [enderedName, setEnderedName] = useState("");
const [enderedAge, setEnderedAge] = useState("");


    const eventHandling = event =>{
        event.preventDefault();
        if(enderedName.trim().length ===0 || enderedAge.trim().length===0){
            return;
        }
        if(+enderedAge<1){
            return;
        }
        //console.log(enderedName,enderedAge);
        props.onAddUser(enderedName,enderedAge);
        setEnderedName("");
        setEnderedAge("");
    };

    const userNameHandlerOnChange = event =>{
        setEnderedName(event.target.value)
    }

    const userAgeHandlerOnchange = event =>{
        setEnderedAge(event.target.value)
    }

    

    return (
        <Card className= {classes.input}>
            <form onSubmit={eventHandling}>
                <label htmlFor="userName">User Name:</label>
                <input type="text" id="userName" value={enderedName} onChange={userNameHandlerOnChange}/>
                <label htmlFor="userAge">User's Age(yr):</label>
                <input type="number" id="userAge" value={enderedAge} onChange={userAgeHandlerOnchange}/>
                <Button type="submit">Add User Details</Button>
            </form>
        </Card>
       
    )
}

export default AddUser
