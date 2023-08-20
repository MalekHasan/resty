import React ,{useState} from 'react';

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

 const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 3,
      results: [
        {name: 'fake thing 1', url:  requestParams.url ||'http://fakethings.com/1'},
        {name: 'fake thing 2', url:  requestParams.url ||'http://fakethings.com/2'},
        {result:requestParams.data}
      ],
    };
    setData(data)
    setRequestParams(requestParams)
  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );
  }

export default App;