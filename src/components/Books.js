import React from "react";

export default function Books(props) {
  const { id, name, age } = props.person;

  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{test}</div>
    </div>
  );
}
