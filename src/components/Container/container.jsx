import React from 'react'
import Form from '../form/Form';
import Results from '../results/Results';

export default function Container({handleApiCall,dispatch,data}) {
  return <>
    <Form handleApiCall={handleApiCall} dispatch={dispatch} />
    <Results data={data} />
  </>
}
