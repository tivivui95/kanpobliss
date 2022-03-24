import React, {useEffect, useState} from "react";
import EmblaCarousel from "../components/EmblaCarousel";
// import Footer from "./Footer";
// import "../css/base.css";
// import "../css/reset.css";

function App() {
    const [ winCheck, onWinCheck ] = useState(false);
    
    useEffect(() => {
        onWinCheck(true);
    }, []);

    return (
        <>
    {winCheck ? <div className="content">
      <EmblaCarousel autoplay delayLength={2000}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </EmblaCarousel>
    </div>: null}
    
    {/* <Footer /> */}
  </>
    )
  
};

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
