import "../assets/scss/form.scss";
import React, { useState } from "react";
import { People } from "../App";

interface AProps {
  people: People[];
  setPeople: React.Dispatch<React.SetStateAction<People[]>>;
}

const AddPeople: React.FC<AProps> = ({ people, setPeople }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "",
    married: false,
  });

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleClick = (e: any): void => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      !formData.married
    ) {
      return;
    }
    setPeople([...people, formData]);
  };

  return (
    <div>
      <form action=''>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        Gender:
        <label>
          <input
            type='radio'
            name='gender'
            value='1'
            checked={formData.gender === "1"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='2'
            checked={formData.gender === "2"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        Married:
        <label>
          <input
            type='radio'
            onChange={handleChange}
            name='married'
            value='1'
          />
          YES
        </label>
        <label>
          <input
            type='radio'
            onChange={handleChange}
            name='married'
            value='2'
          />
          NO
        </label>
        <button type='button' onClick={handleClick}>
          Add people
        </button>
      </form>
    </div>
  );
};

export default AddPeople;
