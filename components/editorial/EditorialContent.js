import { editorialList } from "../../data/editorialList";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const EditorialContent = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(editorialList);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {editorialList.map((image) => (
        <Image
          className="w-full h-full object-cover"
          src={image.imgURL}
          width={1000}
          height={1000}
          alt="portrait"
          key={image.id}
        />
      ))}
    </div>
  );
};

export default EditorialContent;
