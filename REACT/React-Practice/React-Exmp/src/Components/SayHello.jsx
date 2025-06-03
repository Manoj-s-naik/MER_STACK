// import React, { useState, useEffect } from "react";

// function SayHello() {
//   const [boxes, setBoxes] = useState([{ id: 1, createdAt: new Date().toLocaleString() }]); // Initial box
//   const [nextBoxTime, setNextBoxTime] = useState(Date.now() + 4000); // Next box time (4 seconds later)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTime = Date.now();
//       if (currentTime >= nextBoxTime) {
//         // Add a new box
//         setBoxes((prevBoxes) => [
//           ...prevBoxes,
//           { id: prevBoxes.length + 1, createdAt: new Date().toLocaleString() },
//         ]);
//         // Update next box time
//         setNextBoxTime(currentTime + 4000);
//       }
//     }, 100); // Check every 100ms for smooth timing

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [nextBoxTime]);

//   return (
//     <div>
//       <h1>Dynamic Box Generator</h1>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {boxes.map((box) => (
//           <div
//             key={box.id}
//             style={{
//               width: "100px",
//               height: "100px",
//               backgroundColor: "lightblue",
//               border: "1px solid black",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//             }}
//           >
//             <p>Box {box.id}</p>
//             <small>{box.createdAt}</small>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SayHello;

import React from "react";

function SayHello() {
  const date = new Date(Date.now());
  console.log(date.getFullYear());

  return <div>SayHello</div>;
}

export default SayHello;
