import React, { useEffect, useState } from "react";
import axios from "axios";

import './courses.css'
  
const Views = props =>{
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
   useEffect(() => {
    axios
      .get(`http://localhost:8080/contents/${props.match.params.id}`)
      .then((res) => {
        settitle(res.data.title);
        setDescription(res.data.description);
      })      
      .catch((err) => { console.log(err); });
  }, [props]);

    return(
        <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-background nav-background-overlay">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">CareerGuide</a>
    </div>
  </nav>
            <h1>{title}</h1>
            <p>{description}</p>

        </div>
    )
}
export default Views