import FAQ from "../../components/FAQ/FAQ";
import { faqdata } from "../../data/faqdata";
function Contact() {
  return (
    <div className="">
      <div className="my-[10%] flex justify-center items-center">
        <form className="">
          <div className="flex">
            <div className="flex flex-col mr-5 ">
              <label>Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="p-3 border rounded my-3 w-full"
              />
            </div>
            <div className="flex flex-col ">
              <label>Email</label>
              <input
                type="email"
                placeholder="contact@email.com"
                className="p-3 border rounded my-3 w-full"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col mr-5 ">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="+1 345-678"
                className="p-3 border rounded my-3 w-full"
              />
            </div>
            <div className="flex flex-col ">
              <label>Company</label>
              <input
                type="text"
                placeholder="Add Company"
                className="p-3 border rounded my-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Message</label>
            <textarea
              placeholder="Please type your message here..."
              className="w-full p-4 border rounded my-3"
            />
          </div>
          <div>
            <button className="w-full border rounded py-4 my-3 hover:text-white hover:bg-primary">
              Get in Touch
            </button>
          </div>
        </form>
      </div>

      {/* FAQ */}
      <div className="grid sm:grid-cols-1">
        {faqdata.map((faq, index) => {
          return (
            <FAQ key={index} question={faq.questions} answer={faq.answers} />
          );
        })}
      </div>
      <p className="py-10">
        Didn’t find what you were looking for? Visit our Support Center or learn
        more about Event Template
      </p>
    </div>
  );
}

export default Contact;
