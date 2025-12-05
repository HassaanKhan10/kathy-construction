import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/contact", form);
    alert("Message sent");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Your Name" />
      <input name="email" onChange={handleChange} placeholder="Your Email" />
      <textarea name="message" onChange={handleChange}></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
