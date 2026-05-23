"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Contact() {

const [form, setForm] = useState({
  Name: "",
  Email: "",
  Budget: "",
  Description: "",
});
const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("sending");

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!response.ok) {
    setStatus("error");
    return;
  }

  setStatus("sent");
  setForm({
    Name: "",
    Email: "",
    Budget: "",
    Description: "",
  });
};


  return (

    <section id="contact" className="bg-[#f0f0f0] px-5 pb-12 pt-14 sm:px-10 sm:pt-16 lg:px-16">
      <div data-reveal className="mx-auto max-w-[760px] text-center">
        <h2 className="text-[46px] font-medium leading-[0.92] text-[#1a1a1a] sm:text-[80px]">
          Let&apos;s start
          <br />
          <span className="text-[#1a1a1a]/40">your</span> project
        </h2>
        <p className="mx-auto mt-6 max-w-[430px] text-[17px] font-medium leading-[1.45] text-[#666] sm:mt-7 sm:text-[19px]">
          Fill out the form to get started, or book a call.
        </p>
      </div>

      <form onSubmit={handleSubmit} data-contact-form className="mx-auto mt-10 flex max-w-[700px] flex-col gap-3">

        <input value={form.Name} onChange={handleChange} data-form-field type="text" name="Name" placeholder="Your Name" required className="inp" />
        <input value={form.Email} onChange={handleChange} data-form-field type="email" name="Email" placeholder="Email Address" required className="inp" />
        <select value={form.Budget} onChange={handleChange} data-form-field name="Budget" required className="inp">
          <option value="" disabled>
            What&apos;s your Budget?
          </option>
          <option value="Under $100">Under $100</option>
          <option value="$$100 - $500">$100 - $500</option>
          <option value="$$500 - $1k">$500 - $1k</option>
          <option value="$1k - $5k">$1k - $5k</option>
          <option value="$5k+">$5k+</option>
        </select>
        <textarea
          value={form.Description}
          onChange={handleChange}
          data-form-field
          name="Description"
          placeholder="Describe Your Project"
          required
          rows={5}
          className="inp resize-none"
        />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1 block rounded-[16px] bg-[#dedede] px-6 py-4 text-center text-[17px] font-medium text-[#8f8f8f] transition hover:bg-[#1a1a1a] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:py-5 sm:text-[18px]"
          >
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </button>

          {status === "sent" && (
            <p className="text-center text-[15px] font-medium text-[#377f4f]">
              Inquiry sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-[15px] font-medium text-[#9f3b3b]">
              Something went wrong. Please try again.
            </p>
          )}
 
      </form>


      <p className="mt-12 text-center text-[15px] font-medium text-[#9a9a9a]">
        LeonMotion 2026
      </p>
    </section>
  );
}
