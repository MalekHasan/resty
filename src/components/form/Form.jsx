import { useState } from 'react';
import './form.scss';

const Form=(props)=> {
  const [method,setMethod]=useState("GET");
  const [url,setUrl]=useState("");


 const handleSubmit = e => {
    e.preventDefault();

    // console.log(data);
    const formData = {
      method:method,
      url: url,
    };
    props.handleApiCall(formData);
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span className='url-span'>URL:</span> 
            <input name='url' type='text' onChange={(e)=>setUrl(e.target.value)} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods" >
            <span id="get"  onClick={(e)=>setMethod(e.target.textContent)}>GET</span>
            <span id="post" onClick={(e)=>setMethod(e.target.textContent)}>POST</span>
            <span id="put" onClick={(e)=>setMethod(e.target.textContent)}>PUT</span>
            <span id="delete" onClick={(e)=>setMethod(e.target.textContent)}>DELETE</span>
          </label>
        </form>
      </>
    );
  }

export default Form;