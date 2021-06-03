import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Index(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row">
          {users.map((user, index) => {
            return (
              <div class="col-md-4" key={index}>
                <div class="card mb-4">
                  <div class="card-header">{user.name}</div>
                  <div class="card-body">
                    <a href={`http://${user.website}`} target="_blank" rel="noreferrer" class="d-block mb-2">{user.website}</a>
                  <NavLink class="btn btn-primary" to={`/users/${user.id}`}>View Profile</NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
