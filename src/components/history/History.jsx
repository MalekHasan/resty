import { useState } from "react";
import "./History.scss";
import Results from '../results/Results';

const History = ({ history }) => {
  const [nowDeatail,setNowDetail]=useState('')
  function handelHistoryClick(data){
    setNowDetail(data)
  }
  return (
    <>
    <h2 className="">Your History</h2>
      <div className="history">
        <div className="history-url">
          {history.map((item,idx ) => {
            return (<div className="methurl" key={idx}>
                <span className="method">{item.requestParams.method}</span>
                <span className="url" onClick={()=>handelHistoryClick(item.data)}>{item.requestParams.url}</span>
              </div>)
          })}
        </div>
          <Results data={nowDeatail}/>
      </div>
    </>
  );
};

export default History;
