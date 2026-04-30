export default function Contact() {
  return (
    <section id="contact" className="bg-[#f0f0f0] px-5 pb-12 pt-16 sm:px-10 lg:px-16">
      <div data-reveal className="mx-auto max-w-[760px] text-center">
        <h2 className="text-[54px] font-medium leading-[0.9] text-[#1a1a1a] sm:text-[80px]">
          Let&apos;s start
          <br />
          <span className="text-[#1a1a1a]/40">your</span> project
        </h2>
        <p className="mx-auto mt-7 max-w-[430px] text-[19px] font-medium leading-[1.45] text-[#666]">
          Fill out the form to get started, or book a call.
        </p>
      </div>

      <form data-contact-form className="mx-auto mt-10 flex max-w-[700px] flex-col gap-3">
        <input data-form-field type="text" name="Name" placeholder="Your Name" required className="inp" />
        <input data-form-field type="email" name="Email" placeholder="Email Address" required className="inp" />
        <select data-form-field name="Budget" required className="inp" defaultValue="">
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
          data-form-field
          name="Description"
          placeholder="Describe Your Project"
          required
          rows={5}
          className="inp resize-none"
        />

        <button
          data-form-field
          type="submit"
          className="mt-1 rounded-[16px] bg-[#dedede] px-6 py-5 text-[18px] font-medium text-[#8f8f8f] transition hover:bg-[#1a1a1a] hover:text-white"
        >
          Send Inquiry
        </button>
      </form>


      <p className="mt-12 text-center text-[15px] font-medium text-[#9a9a9a]">
        LeonMotion 2026
      </p>
    </section>
  );
}
