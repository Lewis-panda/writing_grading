// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // 引入 App.css 來應用樣式

function App() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/process', { text: inputText });
      setResponseText(response.data.generated_text); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="input-section">
        <h1>Your Answer</h1>
        <textarea 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="Write your TOEFL essay here..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      
      <div className="output-section">
        <h1>Result</h1>
        <div className="result-box">
          <p>{responseText}</p>
        </div>
      </div>
    </div>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
