import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  (async function() {
    const res = await fetch('https://prod-qore-app.qorebase.io/2BNTmBhikwDYdar/allFeedback/rows?limit=50&offset=0&$order=asc', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '6252a308-6a5b-4ca1-b869-eec179e33482'
      }
    });
    const data = await res.json();
    setFeedbacks(data.nodes);
  })();
  return (
    <>
      <Header />
      <Main data={feedbacks}/>
      <Footer />
    </>
  );
}

export default App;
