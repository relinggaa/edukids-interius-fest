import React from "react";
import Marquee from "./components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "Father of Sarah",
    body: "My daughter has been taking the Reading English course, and her progress has been remarkable. She used to struggle with reading, but now she loves books and enjoys reading out loud. Her confidence has grown so much, and I’m truly grateful for this platform.",
    course: "Member of Reading English Course",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "Mother of Lucas",
    body: "Lucas has been loving the Science course. He’s always excited to tell me about the new experiments and facts he learns. This course has sparked his curiosity, and he even started his own mini science projects at home.",
    course: "Member of Science Course",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "Father of Emily",
    body: "The Basic Mathematics course has been a great help for Emily. She’s much more confident in solving problems now, and I’ve noticed how much quicker she is at mental math. It’s a joy to see her improvement.",
    course: "Member of Basic Mathematics Course",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, course }) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <img className="w-12 h-12 rounded-full" src={img} alt={name} />
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <span className="text-gray-500">{username}</span>

          <span className="block text-sm text-gray-500 mt-1">{course}</span>
        </div>
      </div>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div
      id="testimoni"
      className="relative flex h-[100vh] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background "
    >
      {/* First marquee always visible */}
      <Marquee pauseOnHover vertical className="[--duration:40s] space-y-6">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Second marquee, hidden on small screens */}
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="hidden sm:block [--duration:60s] space-y-6"
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}

export default MarqueeDemoVertical;
