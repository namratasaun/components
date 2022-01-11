import { useEffect, useState } from 'react';
import comments from '../data';
import RecComments from './RecComments';

function App() {
  let [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    setCommentsData([...comments]);
  }, []);

  return <div>{commentsData.length && <RecComments data={commentsData} />}</div>;
}

export default App;
