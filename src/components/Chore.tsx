import React from "react";

type Chore = {
  name: string;
  description: string;
};

export interface Props {
  chore: Chore;
}

export default function Chore({ chore }: Props) {
  return (
    <li>
      <article
        style={{
          borderRadius: ".5rem",
          border: "1px solid #cecece",
          marginBottom: ".5rem",
          padding: ".5rem"
        }}
      >
        <header>
          <h2 style={{ margin: "0 0 .5rem 0" }}>{chore.name}</h2>
        </header>
        {chore.description}
      </article>
    </li>
  );
}
