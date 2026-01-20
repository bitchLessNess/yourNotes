import React, { useDeferredValue } from "react";
import Navbar from "../components/navbar";
import { useState , useEffect } from "react";
import { MdAddToPhotos } from "react-icons/md";
import Notes from "../components/notes";
import Data from "../components/data";



const Home = () =>{

       const [data, setData] = useState([])
         const [show , setShow] = useState(false);

         useEffect(()=>{
            const storedNotes = JSON.parse(localStorage.getItem("notes"));
            if(storedNotes){
                setData(storedNotes)
            }
         }, [])

         const addNote =(note)=>{

            const updateNote = [...data, note];
            setData(updateNote);
            localStorage.setItem("notes", JSON.stringify(updateNote))

         }

        const handleClick = ()=>{

         setShow(true)

        }
     


    return(
        <>
        <Navbar />
        <main>
            <div className="notesContainer ">
                {data.map((note, index) => (
            <Data key={index} title={note.title} desc={note.desc} />
          ))}
            </div>
            <div className={`notesForm ${show ? "" : "hidden"}`}>
                <Notes onAddNotes={addNote} />
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