import React from "react";

export default function PreviewCards() {


    return (
        <div className="container flex justify-center gap-2.5 h-[500px] w-full">
  {[
    {
      name: "Jane Doe",
      role: "UI & UX Designer",
      image:
        "https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Alex Smith",
      role: "CEO Expert",
      image:
        "https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Emily New",
      role: "Web Designer",
      image:
        "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Lisa Boley",
      role: "Marketing Coordinator",
      image:
        "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ].map((person, index) => (
    <div
      key={index}
      className="relative flex-none h-full w-[120px] rounded-md overflow-hidden transition-all duration-500 ease-in-out transform cursor-pointer shadow-lg hover:w-[250px] hover:shadow-xl hover:translate-y-[-30px]"
      style={{ backgroundImage: `url(${person.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4 text-white text-xl opacity-0 transition-opacity duration-500 ease-in-out transform translate-y-full visibility-hidden hover:opacity-100 hover:translate-y-0 hover:visibility-visible bg-gradient-to-t from-[rgba(2,2,46,0.68)] to-transparent">
        <h2>{person.name}</h2>
        <span className="text-lg mt-1">{person.role}</span>
      </div>
    </div>
  ))}
</div>

    )
}