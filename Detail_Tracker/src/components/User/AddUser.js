import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css"


const AddUser = (props) => {
const [enderedName, setEnderedName] = useState("");
const [enderedAge, setEnderedAge] = useState("");
const [error ,setError] = useState();


    const eventHandling = event =>{
        event.preventDefault();
        if(enderedName.trim().length ===0 || enderedAge.trim().length===0){
            setError(
                {
                    title: "Invalid Entry",
                    message:"PLease add a valid input before submitting."
                }
            )
            return;
        }
        if(+enderedAge<1){
            setError({
                title: "Invalid Age Input.",
                message:"Age can not be a negative number."
            })
            return;
        }
        //console.log(enderedName,enderedAge);
        props.onAddUser(enderedName,enderedAge);
        setEnderedName("");
        setEnderedAge("");
    };

    const userNameHandlerOnChange = event =>{
        setEnderedName(event.target.value)
    };

    const userAgeHandlerOnchange = event =>{
        setEnderedAge(event.target.value)
    };

    const errorHandler=()=>{
        setError(null);
    };
    

    return (
        <div>
        {error && <ErrorModal title= {error.title} message={error.message} errorHandler={errorHandler}/>}
        <Card className= {classes.input}>
            <form onSubmit={eventHandling}>
                <label htmlFor="userName">User Name:</label>
                <input type="text" id="userName" value={enderedName} onChange={userNameHandlerOnChange}/>
                <label htmlFor="userAge">User's Age(yr):</label>
                <input type="number" id="userAge" value={enderedAge} onChange={userAgeHandlerOnchange}/>
                <Button type="submit">Add User Details</Button>
            </form>
        </Card>
        </div>
       
    )
}

export default AddUser
