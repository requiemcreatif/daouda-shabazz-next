// import React from "react";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { portraitList } from "../data/portraitList";

// const CardGrid = () => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     setList(portraitList);
//   }, []);
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//       {list.map((image) => (
//         <Image
//           className="w-full h-full object-cover"
//           src={image.imgURL}
//           width={1000}
//           height={1000}
//           alt="portrait"
//           key={image.id}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardGrid;

import React from "react";
import Image from "next/image";
import { portraitList } from "../data/portraitList";

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {portraitList.map((image) => (
        <Image
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

export default CardGrid;