import { toast } from "react-toastify";
import SectionHeader from "../home/SectionHeader";
import { useState } from "react";

export default function Contact() {
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

  // state for service selection
  const [service, setService] = useState("");

  // state for package selection

  const [selectedPackage, setSelectedPackage] = useState("");

  // state for message
  const [message, setMessage] = useState("");

  const formData = {
    name: `${firstName} ${lastName}`,
    email,
    phone,
    service,
    selectedPackage,
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
      <form
        onSubmit={handleSubmit}
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20 pb-10"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border border-gray-300 p-8 rounded-lg ">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="
            block 
            w-full 
            rounded-md 
            border-0 
            px-3.5 
            py-2 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-indigo-600 
            sm:text-sm 
            sm:leading-6"
              />
            </div>
          </div>

          {/* last name input */}
          <div>
            <label
              htmlFor="last-name"
              className="
          block 
          text-sm 
          font-semibold 
          leading-6 
          text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* email input */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                name="phone"
                id="phone"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* service input */}
          <div className="sm:col-span-2">
            <label
              htmlFor="service"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Service
            </label>
            <div className="mt-2.5">
              <select
                onChange={(e) => setService(e.target.value)}
                value={service}
                type="text"
                name="service"
                id="service"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
            select"
              >
                <option disabled selected>
                  Select Service
                </option>
                <option>Marketing</option>
                <option>Pre-sales</option>
                <option>Sales </option>
                <option>Account management</option>
                <option>Strategic Alliances Partnerships </option>
                <option>Delivery</option>
                <option>Custom</option>
              </select>
            </div>
          </div>

          {/* package */}
          <div className="sm:col-span-2">
            <label
              htmlFor="package"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Package
            </label>
            <div className="mt-2.5">
              <select
                onChange={(e) => setSelectedPackage(e.target.value)}
                value={selectedPackage}
                type="text"
                name="package"
                id="package"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
            select"
              >
                <option disabled selected>
                  Select package
                </option>
                <option>Basic </option>
                <option>Premium</option>
                <option>Elite</option>
                <option>Custom</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Your message
            </label>
            <div className="mt-2.5">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let`s talk
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      id="contact-for-pricing"
      className="
      my-20
      relative
      backdrop-blur-md
      p-4
    "
    >
      <SectionHeader>Get In Touch</SectionHeader>
      {content}
    </div>
  );
}
