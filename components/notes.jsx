import React, { useState } from "react";
import Data from "./data";

const Notes = ({onAddNotes}) => {

    
    const [notes, setNotes] = useState({
        title: "",
        desc: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddNotes(notes); // send data to home
        setNotes({title: "", desc :""})
    }
    const handleChange = (e) => {

        setNotes({
            ...notes,
            [e.target.name]: e.target.value
            
        })
        
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="formComponent">
                    <label htmlFor="title">Name</label>
                    <input value={notes.title} type="text" name="title" placeholder="Enter The Title " onChange={handleChange} />
                </div>



                <div className="formComponent">
                    <label htmlFor="desc">Desc.</label>
                    <textarea name="desc" id="descArea" value={notes.desc} placeholder="Add the Description" onChange={handleChange}></textarea>
                </div>

                <input type="submit" value="Add" id="submitBtn"   />


            </form>
            <Data title ={notes.title} descc = {notes.desc}/>

        </>
    )
}

export default Notes;