import React from "react";
import { contactInput } from "../constants/index.js";

const Contact = () => {
const ContactForms = () => {
  return(
    contactInput.map((item) => ( 
      <div key={item.id}>
        <label className="contact-label" htmlFor={item.name}>
          {item.label}
        </label>
        <input 
          name={item.name} 
          type={item.type}
          placeholder={item.placeholder}
          pattern={item.pattern}
          required={item.isRequired}
          className="contact-input"
        />
      </div>
    ))
  )
}

  return (
    <section>
      <div className="w-9/12 mx-auto pt-12">
        <h2 className="font-mono mb-6">Get In Touch</h2>
        <form>
          <div className="grid gap-6 mb-4 md:grid-cols-2 font-mono">
            <ContactForms />
          </div>
          <div className="flex items-start mb-4">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="checkbox"
                required
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-heading">
              I agree with the{" "}
              <a href="#" className="text-fg-brand hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
