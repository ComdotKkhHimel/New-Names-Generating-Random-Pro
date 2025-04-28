import React, { useState } from "react";

const maleFirstNames = ["James", "Liam", "Noah", "William", "Elijah"];
const femaleFirstNames = ["Emma", "Olivia", "Ava", "Sophia", "Isabella"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];

function App() {
  const [gender, setGender] = useState("male");
  const [name, setName] = useState("");

  const generateName = () => {
    const first =
      gender === "male"
        ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
        : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    setName(`${first} ${last}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Random Name Generator</h1>
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={\`px-4 py-2 rounded-full font-semibold \${gender === "male" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}\`}
            onClick={() => setGender("male")}
          >
            Male
          </button>
          <button
            className={\`px-4 py-2 rounded-full font-semibold \${gender === "female" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}\`}
            onClick={() => setGender("female")}
          >
            Female
          </button>
        </div>
        <button
          onClick={generateName}
          className="px-6 py-2 bg-green-500 text-white rounded-xl font-bold mb-4 hover:bg-green-600"
        >
          Generate Name
        </button>
        {name && (
          <div className="text-2xl font-medium text-gray-800">{name}</div>
        )}
      </div>
    </div>
  );
}

export default App;
