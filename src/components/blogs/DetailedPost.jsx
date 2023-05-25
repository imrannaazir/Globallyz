import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaThumbsUp, FaUserEdit } from "react-icons/fa";

export default function DetailedPost() {
  return (
    <main className="max-w-screen-xl  mx-auto p-5 w-[60%] bg-white/70">
      <img
        src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/blogl-1.jpg"
        alt=""
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        {/* post meta data */}
        <div className="flex justify-between my-5">
          <span className="flex items-center gap-3">
            <FaUserEdit className="text-primary" /> by Admin
          </span>

          <span className="flex items-center gap-3">
            <BsFillCalendarDateFill className="text-primary" /> Feb 21, 2018
          </span>

          <span className="flex items-center gap-3">
            <FaThumbsUp className="text-primary" /> 02
          </span>
        </div>
        <h1 className="mt-6 text-2xl text-primary">
          2018 UK Consumer Spending Habits: Convenience and Confidence
        </h1>

        <div className="mt-6 text-justify ">
          <p>
            At Integrative Nutrition, we teach the concept of Primary Food which
            is everything that nourishes your life perspiciatis unde omnis iste
            natus error sit voluptatem accusantiums doloremqu seds laudantium,
            totam rem aperiams, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo how all this
            mistaken idea of denouncing pleasure and pain was born and I will
            give you a complete account system. Which toil and pain can procure
            him some great pleasure. To take a trivial example, which of us ever
            how all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you how mistaken idea of denouncing and
            praising pain advantage from it. to Succeed in an Online Course
            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ala. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute or in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proid sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
}
