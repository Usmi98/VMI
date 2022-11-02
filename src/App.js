// import React, { useState, useEffect } from 'react';
import React from 'react';
import NavRoute from "./Routes/Routes";
// import{ useHistory, Navigate } from 'react-router-dom';
// import Header from "./Header/Header"
// import Footer from "./Footer/Footer"
// import Dashboard from "./Dashboard/Dashboard";
// import Content from "./Content/Content";
// import Login from "./Login/Login";
// import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <NavRoute />
    </div>
  );
}



// const gitHubUrl = "https://api.github.com/users/deekshasharma";

// function App() {
//   const [userData, setUserData] = useState();

//   useEffect(() => {
//     getGitHubUserWithFetch();
//   }, []);

//   const getGitHubUserWithFetch = async () => {
//     fetch(gitHubUrl)
//    .then(response => response.json())
//    .then((json) => {
//     console.log(json);
//     setUserData(json);
//     })
//   };

//   return (
//     <div className="App">
//       <div className="user-container">
//         <pre>
//           {JSON.stringify(userData)}
//         </pre>
   
//       </div>
//     </div>
//   );
// }

  export default App;