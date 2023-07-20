'use client';

import { useEffect } from 'react';

const Static = () => {
  useEffect(() => {
    throw new Error();
  }, []);

  return <div>This is Static Page</div>;
};

export default Static;
