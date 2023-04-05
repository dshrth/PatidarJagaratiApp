import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Matrominal() {
  const navigate = useNavigate();

  const userList = [
    {
      id: 1,
      name: "निकिता पाटीदार",
      age: "22",
      address: "नीमच, मध्यप्रदेश.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80 ",
    },
    {
      id: 2,
      name: "निकिता पाटीदार",
      age: "22",
      address: "नीमच, मध्यप्रदेश.",
      image:
        "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
    },
    {
      id: 3,
      name: "निकिता पाटीदार",
      age: "22",
      address: "नीमच, मध्यप्रदेश.",
      image:
        "https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg",
    },
    {
      id: 4,
      name: "निकिता पाटीदार",
      age: "22",
      address: "नीमच, मध्यप्रदेश.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_JFyn7eTXr65JZuKwK5dgcxmwaVQleud_g&usqp=CAU ",
    },
    {
      id: 5,
      name: "निकिता पाटीदार",
      age: "22",
      address: "नीमच, मध्यप्रदेश.",
      image:
        "https://yohohindi.com/wp-content/uploads/2022/08/1-girls-dp-yohohindi.com_-1024x1024.jpeg ",
    },
  ];
  const listItems = userList.map((user) => {
    return (
      <div
        className="matromonialItem"
        key={user.id}
        onClick={() => navigate(`/matrominal/${user.id}`)}
      >
        <div
          className=" matromonialImage "
          style={{ backgroundImage: `url(${user.image})` }}
        >
          <p className="matrominalName">{user.name}</p>
          <p className="matrominalAge">
            आयु <br /> {user.age}
          </p>

          <p className="matrominalAddress">{user.address}</p>
        </div>
      </div>
    );
  });

  return <div className="matrominalContainer">{listItems}</div>;
}
