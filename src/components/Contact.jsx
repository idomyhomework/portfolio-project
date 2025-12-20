import React from "react";
import { contactInput } from "../constants/index.js";

const Contact = () => {
const ContactForms = () => {
  return(
    contactInput.map((item) => ( 
      <div key={item.id}>
        <label className="block mb-2.5 text-sm font-medium text-heading" htmlFor={item.name}>
          {item.label}
        </label>
        <input 
          name={item.name} 
          type={item.type}
          placeholder={item.placeholder}
          pattern={item.pattern}
          required={item.isRequired}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
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
          <div class="grid gap-6 mb-4 md:grid-cols-2 font-mono">
            <ContactForms />
          </div>
          <div class="flex items-start mb-4">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                required
              />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-heading">
              I agree with the{" "}
              <a href="#" class="text-fg-brand hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            class="bg-slate-900 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
