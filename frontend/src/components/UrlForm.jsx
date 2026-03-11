import { useState } from "react";

const UrlForm = () => {
  const [formInput, setFormInput] = useState("");
  const [shortUrl, setShortUrl] = useState("");


  const submitHandler = async (e) => {

    e.preventDefault();
    const data = await fetch("http://localhost:4000/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({url:formInput }),
    });

    const result = await data.json();
    setShortUrl(result.shortUrl);

    setFormInput("")
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="url"
            placeholder="Enter The URL"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
          />
          <button>Generate Short URL</button>
        </form>
      </div>

      {shortUrl && (
        <p>
          Short URL:
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </p>
      )}
    </>
  );
};

export default UrlForm;
