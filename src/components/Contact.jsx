import React, { useState } from "react";
import axios from "axios";
import Resume from "../utils/Resume.pdf";

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mzbjjabe",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          "Thank you for your Message! We will respond as soon as possible.",
          form
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="components" id="contact-me">
      <h1 className="title-component">CONTACT ME</h1>
      <div className="contact-me-container">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline-danger"
            disabled={serverState.submitting}
          >
            Send
          </button>
          <div>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                <p>{serverState.status.msg}</p>
              </p>
            )}
          </div>
        </form>
        <div className="follow-me-box">
          <h4>
            If you want to know more about me and my experience, take a look at
            my Resume or access my social medias
          </h4>
          <div className="row social-medias">
            <div class="col">
              <a href={Resume}>
                Resume
                <i
                  id="resume"
                  class="fa fa-file-text fa-4x"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://www.github.com/marcellits">
                <i class="fa fa-github-square fa-4x" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/marcellits/">
                <i class="fa fa-linkedin-square fa-4x" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/_marcellits_">
                <i class="fa fa-twitter-square fa-4x" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
