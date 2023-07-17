'use client';

import axios from 'axios';
import useSWR from 'swr';

const Home = () => {
  const { data, error, isLoading } = useSWR('fetchData', async () => {
    const { data } = await axios.get(
      'http://localhost:8081/music/top?filter=title&keyword=&page=1&limit=25&time=2023032607'
    );

    return data;
  });

  if (isLoading) return <div>Loading..</div>;

  return <>This is Main Area</>;
};

export default Home;
