import React from "react";

function ChaToFilePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return <div>ChaToFilePage: {id}</div>;
}

export default ChaToFilePage;
