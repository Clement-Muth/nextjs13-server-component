"use client";

import { useState } from "react";

const ClientComponent = () => {
  const [firstName, setFirstName] = useState<string | null>(null);

  return (
    <div className="mt-10">
      <button type="button" className="bg-[lightGrey] p-2" onClick={() => setFirstName("Romanie")}>Display firstname</button>
      {firstName ? <p>{firstName}</p> : null}
    </div>
  );
};

export default ClientComponent;