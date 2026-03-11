import { useState } from "react";

const UrlForm = () => {
  const [formInput, setFormInput] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:4000/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: formInput }),
    });
    const result = await data.json();
    setShortUrl(result.shortUrl);
    setFormInput("");
  };

  const copyHandler = (e) => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={submitHandler} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="url"
          placeholder="Paste your long URL here..."
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
          className="flex-1 px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-sm font-semibold shadow-md transition-all duration-150 whitespace-nowrap"
        >
          Shorten URL
        </button>
      </form>

      {shortUrl && (
        <div className="mt-5 flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-violet-50 border border-violet-200">
          
           <a href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="text-violet-700 font-medium text-sm truncate hover:underline"
          >
            {shortUrl}
          </a>

           <button
            onClick={copyHandler}
            className="shrink-0 px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition-all active:scale-95"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
         
        </div>
      )}
    </div>
  );
};


export default UrlForm;
