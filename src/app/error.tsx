'use client'; // 에러 컴포넌트는 클라이언트 컴포넌트이어야 함

import { useEffect } from 'react';

// /app/error.tsx는 모든 하위 디렉토리에 있는 페이지 컴포넌트에 대한 에러 핸들링을 담당함 (우선순위는 가장 낮음)
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h2>This is caught in /app/error.tsx!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
