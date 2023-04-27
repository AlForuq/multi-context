import React from "react";
import { GlobalStudentUseContext } from "../context/ContextStudents";

function Students() {
  console.log("Students");

  const [users, setUser] = GlobalStudentUseContext();
  // we just import GlobalStudentUseContext which returns useContext(createdGlobalContext),
  // so that we dont have to import useContext and createdGlobalContext anymore

  let onDelete = (id) => {
    let res = users.filter((v) => v.id !== id);
    setUser(res);
  };

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2 key={user.id}>{user.name}</h2>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Students;
