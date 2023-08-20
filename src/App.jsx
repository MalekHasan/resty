import React ,{useEffect, useState} from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';

const App= ()=>{
const [data,setData]=useState(null)
const [requestParams,setRequestParams]=useState({})

useEffect(()=>{
  fetch(requestParams.url,{method:requestParams.method}).then((res)=>{
    res.json().then(()=>{
      const formData = {
        count: 3,
        inputData: [
          {name: 'fake thing 1', url:  requestParams.url ||'http://fakethings.com/1'},
          {name: 'fake thing 2', url:  requestParams.url ||'http://fakethings.com/2'},
          {result:data}
        ],
      };
      setData(formData)
      setRequestParams(requestParams)
    });
  });
},[])

 const callApi = async (requestParams) => {
    // mock output
    let res=await fetch(requestParams.url,{method:requestParams.method});
    let data= await res.json();
    const formData = {
      count: 3,
      inputData: [
        {url:  requestParams.url ||'http://fakethings.com/1'},
        {result:data}
      ],
    };
    setData(formData)
    setRequestParams(requestParams)
  }

    return (
      <>
        <Header />
        <div >Request Method: <span className="boolean data-span">{requestParams.method}</span> </div>
        <div>URL: <span className="string data-span">{requestParams.url}</span></div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );
  }

export default App;