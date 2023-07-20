'use client';

import { useEffect } from 'react';

// import axios from 'axios';
// import useSWR from 'swr';

const Dynamic = () => {
  // const { data, error, isLoading } = useSWR('fetchData', async () => {
  //   const { data } = await axios.get(
  //     'http://localhost:8081/music/top?filter=title&keyword=&page=1&limit=25&time=2023032607'
  //   );

  //   return data;
  // });

  useEffect(() => {
    throw new Error();
  }, []);

  return <div>This is Dynamic Page</div>;
};

export default Dynamic;
