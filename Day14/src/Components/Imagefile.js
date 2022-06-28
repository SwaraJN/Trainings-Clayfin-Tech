import React,{useState} from 'react'
import "./imageassign.css"
function Imagefile() {
    const[image,setImage]=useState();
    const handleChange=(e)=>{
      setImage(URL.createObjectURL(e.target.files[0]))
      // creates a DOMString containing a URL representing the object given in the parameter of the method. The new object URL represents the specified File object or Blob object.
    }  
    console.log("image",image)
  return (
    <div>
        <div className="img"></div>
        <input type="file"
        accept="image/*"
        name="image"
        onChange={handleChange}
         />
         {image &&(
         <img src={image} alt="images" />)}
    </div>
  )
}

export default Imagefile