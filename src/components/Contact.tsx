import { FormEvent, useState } from "react";
import { supabase } from "./config/supabaseClient";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setError] = useState<string | null>(null)
  const [successMessage, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!supabase) {
      setError("Service is currently unavailable. Please try again later.");
      return;
    }

    try {

    } catch(err) {
      console.error("unespected error", err)
      setError("Unespected error, try again later")
    }

    const {data, error} = await supabase.from("test").insert([{ name, email }]);
    console.log("Data: ", data);
    if(error) {
      console.error(error)
      setError("Please try again, there was an issue with sending data to the server")
    } else {
      setSuccess("You sent data to the server")
    }
  };

  return (
    <>
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
    {errorMessage && <p>{errorMessage}</p>}
    {successMessage && <p>{successMessage}</p>}
    </>

  );
};
