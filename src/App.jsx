import React, { useEffect, useState, useReducer } from "react";

import "./App.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import History from "./components/history/History";
import { Route, Routes } from 'react-router-dom';
import Container from "./components/Container/container";

function reduce(state, actions) {
  switch (actions.type) {
    case "add_data":
      return { data: actions.data, requestParams: [] };
    case "clear_all":

      break;

    default:
      break;
  }
}
const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [history, setHistory] = useState([]);

  const [state, dispatch] = useReducer(reduce, { data: "", requestParams: [] });


  useEffect(() => {
    requestParams && fetch(requestParams.url, { method: requestParams.method }).then((res) => {
      res.json().then(() => {
        const formData = {
          count: 3,
          inputData: [
            {
              name: "fake thing 1",
              url: requestParams.url || "http://fakethings.com/1",
            },
            {
              name: "fake thing 2",
              url: requestParams.url || "http://fakethings.com/2",
            },
            { result: data },
          ],
        };
        setData(formData);
        setRequestParams(requestParams);
      });
    });
  }, []);

  const callApi = async (requestParams) => {
    // mock output
    let res = await fetch(requestParams.url, { method: requestParams.method });
    let data = await res.json();
    const formData = {
      count: 3,
      inputData: [
        { url: requestParams.url || "http://fakethings.com/1" },
        { result: data },
      ],
    };
    setData(formData);
    const fetchData = {
      requestParams: requestParams,
      data: data,
    };
    setHistory([...history,fetchData])
    dispatch({ type: "add_data", payload: fetchData });

    setRequestParams(requestParams);
  };
console.log(history);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Container handleApiCall={callApi} dispatch={dispatch} data={data}/>}/>
        <Route path="/history" element={<History history={history}/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
