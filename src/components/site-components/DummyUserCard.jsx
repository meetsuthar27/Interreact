import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const dummyUsers = [
  {
    _id: "1",
    firstName: "Aisha",
    lastName: "Sharma",
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    age: 27,
    gender: "Female",
    skills: ["UI/UX", "React", "Figma"],
    about: "Creative designer with a knack for clean interfaces.",
  },
  {
    _id: "2",
    firstName: "Ravi",
    lastName: "Verma",
    photoUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    age: 29,
    gender: "Male",
    skills: ["Node.js", "Express", "MongoDB"],
    about: "Backend engineer passionate about scalable APIs.",
  },
  {
    _id: "3",
    firstName: "Sneha",
    lastName: "Patel",
    photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    age: 25,
    gender: "Female",
    skills: ["Branding", "Illustration", "Canva"],
    about: "Graphic designer and digital storyteller.",
  },
  {
    _id: "4",
    firstName: "Ravi",
    lastName: "Verma",
    photoUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    age: 29,
    gender: "Male",
    skills: ["Node.js", "Express", "MongoDB"],
    about: "Backend engineer passionate about scalable APIs.",
  },
  {
    _id: "5",
    firstName: "Sneha",
    lastName: "Patel",
    photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    age: 25,
    gender: "Female",
    skills: ["Branding", "Illustration", "Canva"],
    about: "Graphic designer and digital storyteller.",
  },
  {
    _id: "6",
    firstName: "Ravi",
    lastName: "Verma",
    photoUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    age: 29,
    gender: "Male",
    skills: ["Node.js", "Express", "MongoDB"],
    about: "Backend engineer passionate about scalable APIs.",
  },
  {
    _id: "7",
    firstName: "Sneha",
    lastName: "Patel",
    photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    age: 25,
    gender: "Female",
    skills: ["Branding", "Illustration", "Canva"],
    about: "Graphic designer and digital storyteller.",
  },
];

const DummyUserCard = () => {
  const [users, setUsers] = useState(
    dummyUsers.map((u) => ({ ...u, exitDirection: null }))
  );

  const [draggingId, setDraggingId] = useState(null);
  const dragDirectionRef = useRef(null);

  const handleSendRequest = (status, userId, direction) => {
    if (status === "interested") confetti({ particleCount: 100, spread: 70 });

    setUsers((prev) =>
      prev.map((user) =>
        user._id === userId ? { ...user, exitDirection: direction } : user
      )
    );

    setTimeout(() => {
      setUsers((prev) => prev.filter((user) => user._id !== userId));
      setDraggingId(null);
    }, 20);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
      <div className="relative w-full max-w-sm h-[600px]">
        {users.length === 0 ? (
          <div className="text-white text-center text-xl">No more users</div>
        ) : (
          <AnimatePresence>
            {[...users]
              .slice(0, 2)
              .reverse()
              .map((user, index) => {
                const isTopCard = index === 0;
                return (
                  <motion.div
                    key={user._id}
                    className={`absolute inset-0 rounded-3xl overflow-hidden border border-white/20  shadow-xl ${
                      isTopCard ? "z-20" : "z-10 scale-[0.95]"
                    } bg-radial-[at_25%_25%] from-zinc-900/40 to-zinc-800/60 to-95% flex flex-col shadow-2xl backdrop-blur-3xl`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      x:
                        user.exitDirection === "left"
                          ? -500
                          : user.exitDirection === "right"
                          ? 500
                          : 0,
                      rotate:
                        user.exitDirection === "left"
                          ? -30
                          : user.exitDirection === "right"
                          ? 30
                          : 0,
                      opacity: 0,
                      transition: { duration: 0.6 },
                    }}
                    drag={isTopCard ? true : false}
                    dragConstraints={{ left: 0, right: 0, bottom: 60, top: 60 }}
                    dragElastic={0.5}
                    onDragStart={() => {
                      setDraggingId(user._id);
                    }}
                    onDragEnd={(e, info) => {
                      setDraggingId(user._id);
                      if (info.offset.x < -50) {
                        handleSendRequest("ignored", user._id, "left");
                      } else if (info.offset.x > 50) {
                        handleSendRequest("interested", user._id, "right");
                      } else {
                        setDraggingId(null);
                      }
                    }}
                  >
                    <div className="px-5 pt-5">
                      <img
                        src={user.photoUrl}
                        alt="User"
                        className="w-full h-64 object-cover border-1 border-white/20 rounded-xl"
                      />
                    </div>
                    <div className="p-5 text-white flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-3xl font-semibold">
                          {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">
                          {user.age}, {user.gender}
                        </p>
                        <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                          {user.about}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {user.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/10 border border-white/20 px-2 py-1 rounded-full text-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between gap-4 mt-5">
                        <button
                          onClick={() => handleSendRequest("ignored", user._id)}
                          className="flex-1 bg-rose-500 text-white py-2 rounded-xl text-sm font-medium shadow-md hover:opacity-80 cursor-pointer transition border-2 border-white/20"
                        >
                          Ignore
                        </button>
                        <button
                          onClick={() =>
                            handleSendRequest("interested", user._id)
                          }
                          className="flex-1 bg-violet-600 text-white py-2 rounded-xl text-sm font-medium shadow-md hover:opacity-80 cursor-pointer transition border-2 border-white/20"
                        >
                          Interested
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default DummyUserCard;
