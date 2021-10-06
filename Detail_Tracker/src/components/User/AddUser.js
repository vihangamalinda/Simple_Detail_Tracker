import React from 'react';
import Card from '../UI/Card';
import classes from "./AddUser.module.css"

const AddUser = () => {
    const eventHandling = event =>{
        event.preventDefault();
    };
    return (
        <Card className= {classes.input}>
            <form onClick={eventHandling}>
                <label htmlFor="userName">User Name:</label>
                <input type="text" id="userName"/>
                <label htmlFor="userAge">User's Age(yr):</label>
                <input type="number" id="userAge"/>
                <button type="submit">Add User Details</button>
            </form>
        </Card>
       
    )
}

export default AddUser
