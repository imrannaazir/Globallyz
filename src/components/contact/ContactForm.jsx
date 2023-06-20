import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  // state for loading
  const [isLoading, setIsLoading] = useState(false);

  // state for name
  const [firstName, setFirstName] = useState("");

  // state for name
  const [lastName, setLastName] = useState("");

  // state for email
  const [email, setEmail] = useState("");

  //state for phone
  const [phone, setPhone] = useState("");

  // state for message
  const [message, setMessage] = useState("");

  const formData = {
    name: `${firstName} ${lastName}`,
    email,
    phone,
    message,
  };

  // submit to server
  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    try {
      const response = await fetch(
        "https://globallyz-server.onrender.com/client",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Data submitted successfully");
        toast.success("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        console.error("Error submitting data");
        alert("Error submitting data");
      }
    } catch (error) {
      console.error("Error submitting data", error);
      alert("Error submitting data");
    }

    setIsLoading(false);
  };

  // decide what to render
  let content;
  if (isLoading) content = <p>Sending...</p>;

  if (!isLoading) {
    content = (
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="input-style"
              required
              placeholder="First name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="input-style"
              required
              placeholder="Last name"
              type="text"
              name="last-name"
              id="last-name"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input-style"
              required
              placeholder="E-mail"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="input-style"
              required
              placeholder="Phone"
              type="tel"
              name="phone"
              id="phone"
            />
          </div>
        </div>
        <div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="input-style"
            required
            name="message"
            placeholder="Write your message"
            id="message"
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" px-6 py-2 border btn btn-primary bg-primary max-w-sm "
        >
          Send Message
        </button>
      </form>
    );
  }

  return content;
}
