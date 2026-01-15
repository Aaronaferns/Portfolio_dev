// import { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import Alert from "../components/Alert";
// import { Particles } from "../components/Particles";
// import { trackContactForm, trackSectionView } from "../utils/analytics";

// const Contact = ({ id }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     title: "",
//     message: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertType, setAlertType] = useState("success");
//   const [alertMessage, setAlertMessage] = useState("");

//   // Track section view
//   useEffect(() => {
//     trackSectionView('Contact');
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const showAlertMessage = (type, message) => {
//     setAlertType(type);
//     setAlertMessage(message);
//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 5000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       console.log("Form submitted:", formData);

//       await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: formData.name,
//           to_name: "Aaron",
//           from_email: formData.email,
//           to_email: "aaronferns38@gmail.com",
//           title: formData.title,
//           message: formData.message,
//         },
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       );

//       setIsLoading(false);
//       setFormData({ name: "", email: "", title: "", message: "" });
//       showAlertMessage("success", "Your message has been sent!");
//       trackContactForm(); // Track successful form submission
//     } catch (error) {
//       setIsLoading(false);
//       console.error(error);
//       showAlertMessage("danger", "Something went wrong!");
//     }
//   };

//   return (
//     <section
//       id={id}
//       className="relative flex items-center c-space section-spacing"
//     >
//       <Particles
//         className="absolute inset-0 -z-50"
//         quantity={100}
//         ease={80}
//         color="#ffffff"
//         refresh
//       />

//       {showAlert && <Alert type={alertType} text={alertMessage} />}

//       <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
//         <div className="flex flex-col items-start w-full gap-5 mb-10">
//           <h2 className="text-heading">Let's Talk</h2>
//           <p className="font-normal text-neutral-400">
//             Whether you're looking to build a new website, improve your existing
//             platform, or bring a unique project to life, I'm here to help.
//           </p>
//         </div>

//         <form className="w-full" onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label htmlFor="name" className="feild-label">
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               className="field-input field-input-focus"
//               placeholder="John Doe"
//               autoComplete="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="email" className="feild-label">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               className="field-input field-input-focus"
//               placeholder="JohnDoe@email.com"
//               autoComplete="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="title" className="feild-label">
//               Title
//             </label>
//             <input
//               id="title"
//               name="title"
//               type="text"
//               className="field-input field-input-focus"
//               placeholder="Title of your message"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="message" className="feild-label">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               className="field-input field-input-focus"
//               placeholder="Share your thoughts..."
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
//           >
//             {!isLoading ? "Send" : "Sending..."}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };
import { mySocials } from "../constants";
import React, { useEffect } from "react";
import { Particles } from "../components/Particles";
import { trackSectionView } from "../utils/analytics";


const Contact = ({ id }) => {
  useEffect(() => {
    trackSectionView("Contact");
  }, []);

  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center c-space section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="flex flex-col items-center justify-center max-w-md p-10 mx-auto rounded-3xl grid-teal-color shadow-2xl border text-center">
        <h2 className="text-4xl font-bold mb-4 text-inherit">Connect with Me</h2>
        <p className="font-medium text-inherit opacity-80 mb-10">
          You can find me on GitHub and LinkedIn. Let’s connect and collaborate!
        </p>

        <div className="flex gap-10">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-500 hover:scale-125 hover:shadow-lg hover:-translate-y-2"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-12 h-12" // larger icons
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
