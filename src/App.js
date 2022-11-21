import "./App.css";
import { useRef } from "react";

function App() {
  console.log("in page 2");
  window.addEventListener("message", (message) => {
    console.log("got the message");
    console.log(message.origin);
    if (message.origin == "https://firstdomain.pages.dev") {
      console.log("malik", message.data);
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
