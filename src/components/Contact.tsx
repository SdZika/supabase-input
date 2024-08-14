import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://ilodkngefaaxtdsoyyje.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsb2RrbmdlZmFheHRkc295eWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2Mjk0OTksImV4cCI6MjAzOTIwNTQ5OX0.yRK9zkMQe4uSg0p_UW7bP3v3vVkVWnyRHeBkE6wFqkQ")

export const Contact = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")

const handleSubmit = async () => {

    
 
    const {error} = await supabase
    .from("test")
    .insert([{name, email}])

    if (error) {
        console.error("error inerting data", error)
    } else {
        console.log("Data inserted successefully")
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"></input>
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"></input>
        <button type="submit">Submit</button>
    </form>
  )
}
