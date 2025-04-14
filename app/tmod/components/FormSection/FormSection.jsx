import { useRef } from "react";
import { sendEmailData } from "@/app/services/sendEmail.service";

export default function FormSection() {
  const contactForm = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const btnText = useRef(null);
  const spinner = useRef(null);
  const submitModal = useRef(null);
  const tvIcon = useRef(null);
  const submitModalMessage = useRef(null);
  const whatsup = useRef(null);
  const okBtn = useRef(null);

  const okSubmitMessage =
    "Thank you for reaching out! We’ve received your request and will be in touch shortly. We appreciate your interest and look forward to working with you.";

  const errorSubmitMessage =
    "Oops, something went wrong! We’re really sorry for the inconvenience. Please reach out to us on WhatsApp for a direct response.";

  const showModal = function (message, tv, showBtn) {
    submitModalMessage.current.textContent = message;
    tvIcon.current.src = tv;
    whatsup.current.classList.add("display-none");
    okBtn.current.classList.add("display-none");

    if (showBtn === "whatsup") {
      whatsup.current.classList.remove("display-none");
    } else {
      okBtn.current.classList.remove("display-none");
    }

    submitModal.current.classList.remove("is-hidden");
  };

  const toogleSpinner = function (isLoading) {
    if (isLoading) {
      spinner.current.classList.add("active");
      btnText.current.textContent = "Sending...";
      btnText.current.disabled = true;
    } else {
      spinner.current.classList.remove("active");
      btnText.current.textContent = "Send";
      btnText.current.disabled = false;
    }
  };

  const handlerSubmit = async function (e) {
    e.preventDefault();

    toogleSpinner(true);

    const data = {
      project: "TMOD",
      to: ["a.nikitin@kivismart.com"],
      subject: "TMOD",
      text: `Name: ${nameRef.current.value}, Email: ${emailRef.current.value}, Message: ${messageRef.current.value}`,
    };

    try {
      const responce = await sendEmailData(data);
      //   console.log(responce);
      if (!responce) {
        toogleSpinner(false);
        showModal(errorSubmitMessage, "/tmod/img/tv-sad-icon.svg", "whatsup");
      } else {
        toogleSpinner(false);
        showModal(okSubmitMessage, "/tmod/img/tv-smile-icon.svg", "ok");
        contactForm.current.reset();
      }
    } catch (error) {
      console.error(error);
      toogleSpinner(false);
      showModal(errorSubmitMessage, "/tmod/img/tv-sad-icon.svg", "whatsup");
    }
  };

  return (
    <>
      <div className="backdrop-submit is-hidden" ref={submitModal}>
        <div className="submit-message-wrap">
          <div className="submit-menu-close">
            <img src="/tmod/img/close-icon.svg" alt="close icon" />
          </div>
          <div className="tv-icon-wrap">
            <img
              src="/tmod/img/tv-smile-icon.svg"
              alt="tv icon"
              id="tv-icon"
              ref={tvIcon}
            />
          </div>
          <p className="submit-menu-message" ref={submitModalMessage}></p>
          <a
            href="https://wa.me/48781464422?text=Hello%20Anton!%20I’d%20like%20to%20discuss%20a%20B2B%20inquiry%20about%20KidsTV.%20Could%20you%20please%20provide%20more%20information%20on%20partnership%20options%20and%20how%20we%20can%20move%20forward?%20Thank%20you!"
            target="_blank"
            className="submit-message-btn link display-none"
            ref={whatsup}
            id="whatsup"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="submit-message-btn display-none"
            ref={okBtn}
            id="ok-btn"
          >
            OK
          </button>
        </div>
      </div>
      <section
        className="contact-us section-top-border"
        id="contact-us-section"
      >
        <div className="container">
          <p className="info-text-mob">
            We believe our partners’ success is our own. We’re committed to
            supporting your business with flexible solutions, seamless
            integration, and maximum efficiency. Our experts work closely with
            you to adapt the KidsTV product to your specific business model,
            helping you easily leverage its full market potential.
          </p>
          <div className="contacts-wrap">
            <div className="conacts-backdrop">
              <form
                id="contact-form"
                className="contact-form-style"
                ref={contactForm}
                onSubmit={handlerSubmit}
              >
                <div className="inputs-wrap">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name*"
                    ref={nameRef}
                    required
                  />
                  <span id="name-error" className="error-message"></span>
                </div>
                <div className="inputs-wrap">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email*"
                    ref={emailRef}
                    required
                  />
                  <span id="email-error" className="error-message"></span>
                </div>
                <div className="inputs-wrap">
                  <textarea
                    id="message"
                    placeholder="Message*"
                    ref={messageRef}
                    required
                  ></textarea>
                  <span id="message-error" className="error-message"></span>
                </div>
                <div className="checkbox-container-wrap">
                  <label className="checkbox-container">
                    <input type="checkbox" id="legal" />
                    <span className="checkbox-custom"></span>
                    <span className="legat-text">
                      By submitting this form, you confirm and consent to the
                      processing, storage and transfer of your personal data in
                      accordance with the laws of the European Union 
                      <a
                        className="link"
                        href="https://gdpr-info.eu/"
                        target="_blank"
                      >
                        https://gdpr-info.eu/
                      </a>
                      . You can contact our Customer Care team regarding any
                      request related to our products and services (service,
                      return, warranty). The personal data is collected and
                      processed solely for the purposes stated above and to
                      assess the quality of the service. If you do not fill in
                      the required data, you will not be able to access all or
                      part of the Customer Care Services.
                    </span>
                  </label>
                  <div className="checkbox-container-icon">
                    <img src="/tmod/img/legal-icon.svg" alt="show more" />
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled>
                  <span className="button-text" ref={btnText}>
                    Send
                  </span>
                  <span className="spinner" ref={spinner}></span>
                </button>
              </form>
            </div>
            <div className="conacts-backdrop">
              <div className="contact-info">
                <div className="contact-photo-wrap">
                  <img src="/tmod/img/contacts/photo.png" alt="manager photo" />
                </div>
                <div className="contact-info-wrap">
                  <p className="manager-name">Anton Nikitin</p>
                  <p className="manager-position">B2B Sales Director</p>
                  <div className="manager-socials-wrap">
                    <a
                      href="https://wa.me/48781464422?text=Hello%20Anton!%20I’d%20like%20to%20discuss%20a%20B2B%20inquiry%20about%20KidsTV.%20Could%20you%20please%20provide%20more%20information%20on%20partnership%20options%20and%20how%20we%20can%20move%20forward?%20Thank%20you!"
                      target="_blank"
                      className="manager-contact whatsup"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="mailto:a.nikitin@kivismart.com"
                      className="manager-contact mail"
                    >
                      a.nikitin@kivismart.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <h2 className="section-title section-title-mb">
              Feel free to contact us at any time
            </h2>
            <p className="white-color">
              KidsTV Service
              <br />
              and Support for Partners
            </p>
            <p className="info-text first-info-text">
              We believe our partners’ success is our own. We’re committed to
              supporting your business with flexible solutions, seamless
              integration, and maximum efficiency. Our experts work closely with
              you to adapt the KidsTV product to your specific business model,
              helping you easily leverage its full market potential.
            </p>
            <p className="info-text second-info-text">
              Schedule a meeting or demo to explore the commercial opportunities
              KidsTV offers and discuss how we can help your business grow and
              boost profitability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
