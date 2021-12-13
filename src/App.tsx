import React, { useState } from "react";
import ListPeople from "./components/ListPeople";
import AddPeople from "./components/AddPeople";

export interface People {
  name: string;
  age: number;
  married: boolean;
  gender: string;
}

function App() {
  const [name, setName] = useState<string>("Truong");
  const [people, setPeople] = useState<People[]>([
    {
      name: "Truong",
      age: 24,
      married: true,
      gender: "male",
    },
  ]);

  const changeName = (newName: string) => {
    setName(newName);
  };

  return (
    <>
      <div className=''>{name}</div>{" "}
      <button onClick={() => changeName("Minh NK")}>click me</button>
      <ListPeople people={people} />
      <AddPeople people={people} setPeople={setPeople} />
    </>
  );
}

export default App;
