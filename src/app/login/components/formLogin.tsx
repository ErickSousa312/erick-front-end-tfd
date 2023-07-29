'use client'
import React from "react";


interface FormFieldsState {
  username: string;
  password: string;
}

interface FormFieldsProps {
  onSubmit: (data: FormFieldsState) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({ onSubmit }) => {
  const [state, setState] = React.useState<FormFieldsState>({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormFields;
