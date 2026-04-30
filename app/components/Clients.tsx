import React from 'react'

const clients = [
  "BULK",
  "boaba",
  "MAGIC EDEN",
  "David Guetta",
  "SuperVerse",
  "GAMER SUPPS",
  "boba",
  "sanctum",
  "George Janko",
];

const Clients = () => {
  return (
    <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
        <div data-marquee-track className="flex w-max items-center gap-10 text-[20px] font-medium text-[#9a9a9a] opacity-70">
          {[...clients, ...clients].map((client, index) => (
            <span key={`${client}-${index}`} className="whitespace-nowrap">
              {client}
            </span>
          ))}
        </div>
      </div>
  )
}

export default Clients