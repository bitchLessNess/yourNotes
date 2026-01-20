import React from "react";


const Notes = () =>{


    return(
        <>
        <form action="">
            <div className="formComponent">
                <label htmlFor="">Name</label>
                <input type="text"  placeholder="Enter The Title "/>
            </div>
           


            <div className="formComponent">
                <label htmlFor="">Desc.</label>
                <textarea name="" id="descArea" placeholder="Add the Description"></textarea>
            </div>

            <input type="submit" value="Add" id="submitBtn" />


        </form>
        
        
        </>
    )
}

export default Notes;