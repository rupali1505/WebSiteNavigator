import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [urls, setUrls] = useState([]);
  const [index, setIndex] = useState(0);
  const [sheetUrl, setSheetUrl] = useState("");

  // 🔹 Upload file
  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);

      setUrls(res.data.data.urls);
      setIndex(0);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔹 Google Sheet
  const handleSheet = async () => {
    try {
      const res = await axios.post("http://localhost:5000/sheet", {
        url: sheetUrl,
      });

      setUrls(res.data.data.urls);
      setIndex(0);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔹 Navigation
  const next = () => {
    if (index < urls.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Website Navigator</h2>

      {/* Upload Excel/CSV */}
      <input type="file" onChange={handleUpload} />

      <br />
      <br />

      {/* Google Sheet */}
      <input
        type="text"
        placeholder="Paste Google Sheet URL"
        value={sheetUrl}
        onChange={(e) => setSheetUrl(e.target.value)}
      />
      <button onClick={handleSheet}>Load Sheet</button>

      <br />
      <br />

      {/* Navigation */}
      {urls.length > 0 && (
        <>
          <div>
            <button onClick={prev} disabled={index === 0}>
              Previous
            </button>

            <span style={{ margin: "0 10px" }}>
              {index + 1} / {urls.length}
            </span>

            <button onClick={next} disabled={index === urls.length - 1}>
              Next
            </button>
          </div>

          <br />

          {/* Website Display */}
          <iframe
            src={urls[index]}
            title="website"
            width="100%"
            height="500px"
          />

          {/* Fallback */}
          <p>
            If not visible:{" "}
            <a href={urls[index]} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default Home;
