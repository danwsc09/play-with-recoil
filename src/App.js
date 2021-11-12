import React from "react";
import CurrentUserInfo from "./components/CurrentUserInfo";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CurrentUserInfo />
    </React.Suspense>
  );
}

export default App;
