'use client'; // 에러 컴포넌트는 클라이언트 컴포넌트이어야 함

import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h2>This is caught in /app/dynamic/error.tsx!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
