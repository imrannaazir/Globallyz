import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import PrimaryBtnAlt from "../components/ui/PrimaryBtnAlt";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <Layout>
      <Banner title="Contact Us" />
      {/* contact us */}
      <div className="contact-us ">
        <div className="max-w-screen-xl mx-auto p-4 flex ">
          <div className="contact-bg-color w-[30%] p-10 text-white">
            <h3 className="uppercase text-[2rem]">Contact US</h3>
            <div className="h-[2px] w-[80px] -bottom-4 left-0 bg-white "></div>

            <div className="mt-10 flex flex-col gap-5">
              <p className="flex items-center gap-5">
                {" "}
                <BsEnvelopeFill className="text-4xl" /> support@epicize.com
              </p>
              <p className="flex items-center gap-5">
                {" "}
                <BsFillTelephoneFill className="text-4xl" />
                +919876543210
              </p>
              <p className="flex items-center gap-5">
                <AiFillLinkedin className="text-4xl" />
                linkedin.com
              </p>
            </div>
          </div>

          <div className="bg-white lg:w-[70%] p-10">
            <div>
              <h1 className="text-[1.7rem]">Send Us A Message</h1>
            </div>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <input
                    className="input-style"
                    required
                    placeholder="first name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
                    className="input-style"
                    required
                    placeholder="last name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <input
                    className="input-style"
                    required
                    placeholder="E-mail"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
                    className="input-style"
                    required
                    placeholder="phone"
                    type="tel"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div>
                <textarea
                  className="input-style"
                  required
                  name=""
                  placeholder="write your message"
                  id=""
                  cols="30"
                  rows="1"
                ></textarea>
              </div>
              <div className="text-end">
                <PrimaryBtnAlt>Send Message</PrimaryBtnAlt>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
