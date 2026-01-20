import React, { useDeferredValue } from "react";
import Navbar from "../components/navbar";
import { useState , useEffect } from "react";
import { MdAddToPhotos } from "react-icons/md";
import Notes from "../components/notes";




const Home = () =>{

        const [notes , setNotes] = useState("");
         const [currentNote, setcurrentNote] = useState({ title: "", desc: "" })
         const [show , setShow] = useState(false);

        const handleClick = ()=>{

         setShow(true)

        }



    return(
        <>
        <Navbar />
        <main>
            <div className="notesContainer hidden">
            
            </div>
            <div className={`notesForm ${show ? "" : "hidden"}`}>
                <Notes/>
            </div>
            <div className={`waterMark ${show ? "hidden" : ""}`}>
                <p>Add Your Notes here</p>
            </div>
            <div className="addNotes"  onClick={handleClick}>
                <MdAddToPhotos  className="addIcon"/>
            </div>
        </main>
        </>
    )
}

export default Home;