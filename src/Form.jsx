import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DataListContext } from "./ContextFile";
import { nanoid } from "nanoid";

export function Form() {
  const { register, handleSubmit } = useForm({ mode: "onchange" });
  const [data, setData] = useContext(DataListContext);
  const [name, setName] = useState("");
  const [isValid, setValid] = useState(false);

  const onSubmit = (input) => {
    const id = nanoid();
    setData([...data, { id, name: input.name }]);
    setName("");
  };

  useEffect(() => {
    const isValid = name.length ? true : false;
    setValid(isValid);
  }, [name]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form-style"
        type="text"
        placeholder="Item"
        {...register("name")}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type="submit" disabled={!isValid}>
        Add
      </button>
    </form>
  );
}
