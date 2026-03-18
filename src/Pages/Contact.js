import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import Contacthero from "../Component/Contacthero";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");


  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?\d{7,15}$/.test(formData.phone))
      newErrors.phone = "Phone number is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  setSuccess("");

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSuccess(data.message || "Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    setSuccess("Server is not responding.");
  }
};




  return (
    <>
      <Navbar />
<Contacthero/>
      {/* Hero Section */}
     

      {/* Contact Section */}
      <div className=" bg-gray-100 flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Contact Info */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r bg-gray-50">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
              <p className="mb-8 text-gray-600">
                We’d love to hear from you. Reach out using the details below or
                send us a message.
              </p>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-semibold">Company Name</h4>
                  <p>Aizops Software Pvt. Ltd.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>
                    City Centre, Matigara, Siliguri, Dist- Darjeeling, West
                    Bengal - 734010
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+91 9046373358</p>
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>support@aizops.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12 bg-white">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>

              {success && <p className="mb-4 text-green-600">{success}</p>}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Write your message"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
