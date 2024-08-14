import { FormEvent, useState } from "react";
import { supabase } from "./config/supabaseClient";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await supabase.from("test").insert([{ name, email }]);
    console.log("Data: ", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      ></input>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
