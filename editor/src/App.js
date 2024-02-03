import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


 function App() {
   console.log("first");
  // const [current, setCurrent] = useState('');
  const [value, setValue] = useState('');
 
    useEffect(()=>{
     fetch('contact.html').then(response=>response.text()).then(data=>setValue(data)).catch(error=>console.log(error));
    
  },[]);

  
  console.log("hello");
  // console.log(current);
  const modules= {
     toolbar:[[{header:[1,2,3,4,5]}], [{color:[]}],
     [{font: []}], ['bold','italic'], [{align:[]}]]
  }
  
  const handleChange = (event)=>{
    setValue(event);
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 edit">
          <ReactQuill className='edit' theme='snow' value={value} modules={modules} onChange={handleChange}>
          </ReactQuill>
        </div>
        <div className="col-lg-6 prev">
         {value}
        </div>
      </div>
    </div>
  );
}

export default App;
