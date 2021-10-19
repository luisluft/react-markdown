import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}></textarea>
        <article className="result">{markdown}</article>
      </section>
    </main>
  );
}

export default App;
