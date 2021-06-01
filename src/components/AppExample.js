import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <h1>The Posts</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Card
              contact={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "First post",
                published: "Mei 2021",
              }}
            />
          </div>
          <div className="col-md-4">
            <Card
              contact={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "First post",
                published: "Mei 2021",
              }}
            />
          </div>
          <div className="col-md-4">
            <Card
              contact={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "First post",
                published: "Mei 2021",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
