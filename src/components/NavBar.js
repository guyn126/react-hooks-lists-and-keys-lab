import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  let getLinks = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    );
  });
  return <nav>{getLinks}</nav>;
}

export default NavBar;