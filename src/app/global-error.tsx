// 'use client'; // 에러 컴포넌트는 클라이언트 컴포넌트이어야 함

// // /app/global-error.tsx는 /app/layout.tsx에서 발생한 에러 핸들링을 담당한다고 하는데, 동작 안 함 (13.4.10 Version까지도)
// const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
//   return (
//     <html>
//       <body>
//         <h2>Something went wrong!</h2>
//         <h2>This is caught in /app/global-error.tsx!</h2>
//         <button onClick={() => reset()}>Try again</button>
//       </body>
//     </html>
//   );
// };

// export default GlobalError;
