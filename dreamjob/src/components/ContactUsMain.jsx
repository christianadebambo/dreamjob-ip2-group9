import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../firebaseConfig";

// Main component for the Contact Us page
export const ContactUsMain = () => {
  // State variables for form data, form validation errors, and form submission status
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset the specific field error message when the user types in the input field
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, push the form data to Firebase
      const contactsRef = ref(database, "contacts");
      push(contactsRef, formData);

      // Reset form fields and errors
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(true);
    } else {
      // If there are validation errors, set them in the state
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  // Function to validate form fields
  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email Address is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid Email Address";
    }
    if (!data.message.trim()) {
      errors.message = "Your Message is required";
    }
    return errors;
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div className="content-container">
        <div className="content">
          {isSubmitted ? (
            <div className="confirmation-message">
              Thank you for your submission! We will get back to you shortly.
              <br />
              <br />
              <br />
            </div>
          ) : (
            <div className="flex-row2">
              <form className="form-container" onSubmit={handleSubmit}>
                <div>
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="input-field"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <span className="error">{errors.firstName}</span>
                </div>
                <br />

                <div>
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="input-field"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <span className="error">{errors.lastName}</span>
                </div>
                <br />

                <div>
                  <label>Email Address:</label>
                  <input
                    type="text"
                    className="input-field"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="error">{errors.email}</span>
                </div>
                <br />

                <div>
                  <label>Your Message:</label>
                  <textarea
                    className="input-field"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <span className="error">{errors.message}</span>
                </div>
                <br />
                <input type="submit" value="Submit" className="butto" />
              </form>
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default ContactUsMain;
