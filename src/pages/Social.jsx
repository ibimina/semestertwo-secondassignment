import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function Social() {
 return (
   <>
     <p>Site developed by: Ibimina Hart</p>
     <div className="social">
       <a href="https://github.com/ibimina" target="_blank" rel="noreferrer">
         <FaGithub />
       </a>
       <a
         href="https://linkedin.com/in/ibimina-hart"
         target="_blank"
         rel="noreferrer"
       >
         <AiFillLinkedin />
       </a>
       <a
         href="mailto: ibimina.c.hart@gmail.com"
         target="_blank"
         rel="noreferrer"
       >
         <AiOutlineMail />
       </a>
       <a
         href="https://ibimina.github.io/ibimina-portfolio/"
         target="_blank"
         rel="noreferrer"
       >
         <BsLink45Deg />
       </a>
       <a href="https://twitter.com/ibimina" target="_blank" rel="noreferrer">
         <FiTwitter />
       </a>
     </div>
   </>
 );

}
