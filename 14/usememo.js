import { useMemo, useEffect, useState } from 'react';

const App = () => {
  const [ number, setNumber ] = useState(0);
  const [ isKorea, setIsKorea ] = useState(true);

  const location = useMemo(() => {
    return { 
      country: isKorea ? 'Korea' : 'Other'
    }
  }, [number]);
  
  useEffect(() => {
    console.log('useEffect called');
  }, [location]);

  return (
    <div>
      <input type="number"  value={number} onChange={(e) => setNumber(e.target.value)}/>
      <br />

      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>Update</button>
    </div>
  );
};

export default App;