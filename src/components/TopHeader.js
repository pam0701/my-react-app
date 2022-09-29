import React from "react";

function TopHeader(props) {
  const { text, name, href } = props;

  return (
    <div>
      <h1>{name}님 반값습니다.</h1>
      <a href={href}>{text}</a>
    </div>
  );
}

export default TopHeader;

/* export default function TopHeader(props) {
  const { text, name, href } = props;

  return (
    <div>
      <h1>{name}님 반갑습니다! </h1>
      <a href={href}>{text}</a>
    </div>
  );
} */
