"use client";

import { useState } from "react";

export default function CreateEmployee() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Employee created: ${name}`);

    setName("");
    setRole("");
    setDepartment("");
  };

  return (
    <main>
      <h1>Create Employee</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Role: </label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Department: </label>
          <input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Create Employee</button>
      </form>
    </main>
  );
}