/*
 npm install axios
 import axios from 'axios';

 axios automatically parses the response data for you, so you directly access 
 the parsed JSON data from the response.data property.


*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Post #{data?.id}</h1>
          <h2>{data?.title}</h2>
          <p>{data?.body}</p>
        </div>
      )}
    </div>
  );
}

export default AxiosExample;
