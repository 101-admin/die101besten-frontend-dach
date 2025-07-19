"use client";
import Link from "next/link";
import React, { useState, FormEvent } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import type { Newsletter } from "@/lib";
const Form = ({ id }: Newsletter) => {
  const [email, setEmail] = useState("");
  const [isGdprAccepted, setIsGdprAccepted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !isGdprAccepted) {
      setFormError("Bitte füllen Sie beide Pflichtfelder aus.");
      return;
    }

    // If validation passes, submit the form
    e.currentTarget.submit();
  };

  return (
    <section className="bg-[#F9F8FA] max-w-[1920px] mx-auto w-full flex flex-col justify-center items-center">
      <div className=" w-full max-w-[1440px] flex flex-col lg:flex-row gap-8 lg:gap-4 px-6 pt-20 pb-10 md:p-16">
        <div className="w-full flex flex-col gap-6">
          <h3 className="heading-3-lg">Erfahren Sie es als Erster!</h3>

          <form
            action="https://die-101-besten-hotels-deutschlands.us19.list-manage.com/subscribe/post?u=e3e327fd9e9ee7a4fbf2d7802&amp;id=68c4148e1d&amp;f_id=000a37e7f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate={true}
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="name" className="label-lg">
                  E-Mail Adresse
                </label>
                <div className="w-full flex-wrap sm:flex-nowrap flex gap-4 ">
                  <input
                    id="mce-EMAIL"
                    name="EMAIL"
                    className="border-2 border-black h-16 w-full min-w-[300px] max-w-[500px] pl-3 text-[20px] font-bold font-montserrat"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn-primary btn-primary-hover-de w-full max-w-[200px] pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                    value="Anmelden"
                    disabled={!email || !isGdprAccepted}
                  />
                </div>
              </div>

              <label className="w-full max-w-[498px] flex items-start gap-4">
                <input
                  type="checkbox"
                  id="gdpr_122578"
                  name="gdpr[122578]"
                  required
                  checked={isGdprAccepted}
                  onChange={(e) => setIsGdprAccepted(e.target.checked)}
                  className="min-w-8 min-h-8 border-2 border-black rounded-none"
                />
                <span className="bodycopy-4-lg text-black">
                  Ich bin mit der Verarbeitung meiner Daten im Rahmen des
                  Kontaktformulars einverstanden. Es gilt die
                  Datenschutzerklärung{" "}
                  <Link
                    target="_blank"
                    className="underline"
                    href="https://die-101-besten.de/datenschutz"
                  >
                    (https://die-101-besten.de/datenschutz).
                  </Link>
                </span>
              </label>

              {formError && (
                <p className="text-red-500 text-sm mt-2">{formError}</p>
              )}
            </div>
          </form>
        </div>
        <div className="flex items-end lg:justify-end gap-2">
          <Link
            href="https://www.facebook.com/die101bestenhotelsde"
            target="_blank"
            className="btn-socialmedia group text-black border-black hover:border-none hover:border-gradient-de"
          >
            <FaFacebookF className="text-[20px] group-hover:text-[#866A41]" />
          </Link>
          <Link
            href="https://www.instagram.com/die101bestenhotels/"
            className="btn-socialmedia group text-black border-black hover:border-none hover:border-gradient-de"
          >
            <FaInstagram className="text-[20px] group-hover:text-[#866A41]" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/86932290/admin/"
            target="_blank"
            className="btn-socialmedia group text-black border-black hover:border-none hover:border-gradient-de"
          >
            <FaLinkedin className="text-[20px] group-hover:text-[#866A41]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Form;
