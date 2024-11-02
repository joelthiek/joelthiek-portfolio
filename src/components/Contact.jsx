import { useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailJSServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJSTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

  // Email Validation
  const emailValidation = (email) => {
    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    // Validation
    if (!username) return setErrMsg("Username is required!");
    if (!phoneNumber) return setErrMsg("Phone number is required!");
    if (!email) return setErrMsg("Please provide your Email!");
    if (!emailValidation(email)) return setErrMsg("Enter a valid Email!");
    if (!subject) return setErrMsg("Subject is required!");
    if (!message) return setErrMsg("Message is required!");

    setErrMsg(""); // Clear error messages before sending

    // Sending email using EmailJS
    const templateParams = {
      username,
      phoneNumber,
      email,
      subject,
      message,
    };

    emailjs
      .send(emailJSServiceID, emailJSTemplateID, templateParams, emailJSPublicKey)
      .then(
        () => {
          setSuccessMsg(`Thank you, ${username}. Your message has been sent successfully!`);
          // Clear input fields after successful sending
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          setErrMsg("Failed to send message. Please try again.");
          console.error("Email sending error:", error);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={`${errMsg === "Username is required!" ? "outline-designColor" : ""} contactInput`}
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`${errMsg === "Phone number is required!" ? "outline-designColor" : ""} contactInput`}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${errMsg === "Please provide your Email!" ? "outline-designColor" : ""} contactInput`}
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`${errMsg === "Subject is required!" ? "outline-designColor" : ""} contactInput`}
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${errMsg === "Message is required!" ? "outline-designColor" : ""} contactTextArea`}
                    cols={30}
                    rows={8}
                    required
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
