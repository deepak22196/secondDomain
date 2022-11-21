import "./App.css";
import { useRef } from "react";

function App() {
  window.addEventListener("message", (message) => {
    if (message.origin == "https://firstdomain.pages.dev/") {
      localStorage.setItem("firstDomainId", message.data);
    }
  });
  return (
    <>
      <div>this page is listening for message</div>
    </>
  );
}

export default App;
