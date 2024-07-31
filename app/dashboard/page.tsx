import Documents from "@/components/Documents";
import React from "react";

export const dynamic = "force-dynamic";

function Dashboard() {
  return (
    <div className="h-full max-w-7xl  mx-auto">
      <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-blue-600">
        Mes documents
      </h1>

      <Documents />
    </div>
  );
}
export default Dashboard;
