import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [transform, setTransform] = useState("");

  // useEffect to handle text transformation based on the 'transform' state
  useEffect(() => {
    if (transform === "uppercase") {
      setText((prevText) => prevText.toUpperCase());
    } else if (transform === "lowercase") {
      setText((prevText) => prevText.toLowerCase());
    }
   
    // not the right approch ////////

    // if (transform === 'uppercase') {
    //   setText(text.toUpperCase());
    // } else if (transform === 'lowercase') {
    //   setText(text.toLowerCase());
    // }




    // Reset transform to avoid re-triggering the effect
    setTransform("");
  }, [transform]);
   

  const handleUppercase = () => setTransform("uppercase");
  const handleLowercase = () => setTransform("lowercase");

  return (
    <div className="p-4 container mx-auto">
      <label htmlFor="textarea" className="block text-gray-700 font-bold mb-2">
        Analyze your text
      </label>
      <textarea
        id="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write something here..."
      ></textarea>
      <div className="text-right text-gray-500 mt-1"></div>
      <button
        onClick={handleUppercase}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-transparent hover:text-black transition-all border"
      >
        Convert to uppercase
      </button>

      <button
        onClick={handleLowercase}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-transparent hover:text-black transition-all border ml-2"
      >
        Convert to lowercase
      </button>
    </div>
  );
}

export default Home;
