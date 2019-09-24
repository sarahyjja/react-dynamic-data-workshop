import React from "react";
import UserHeader from "./UserHeader";
import { getUserData } from "../utils/getUserData";

function App() {
  const [placeholder, setPlaceholder] = React.useState(
    "Let's get started! You can delete this state as you won't need it going forward."
  );

  return (
    <div>
      {placeholder}
      <UserHeader />
    </div>
  );
}

export default App;
