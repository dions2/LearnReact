// shortcut untuk import function dan export => rsf
import React from "react";
import { useRecoilState } from "recoil";
import { theme } from "../store";

function Home(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  
  return (
    
      <div className="container">
        <div className="row">
          <div className="col-md-4">
           
              <select type="checkbox" value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              </select>
           
          </div>
        </div>
      </div>
    
  );
}

export default Home;
