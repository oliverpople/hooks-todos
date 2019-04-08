import React, { useContext } from "react";
import { UserContext } from "./index.js";

export default function App() {
  const value = useContext(UserContext);
  return (
    <div>
      <div>Hello, {value}</div>
    </div>
  );
}
