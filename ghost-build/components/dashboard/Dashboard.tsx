"use client";

import { useState } from "react";

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function upload() {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();

    console.log("UPLOAD RESPONSE:", json);

    setData(json);
    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Blueprint Dashboard</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={upload} disabled={loading || !file}>
        {loading ? "Processing..." : "Upload"}
      </button>

      {data && (
        <div style={{ marginTop: 20 }}>
          <p>Width: {data.width ?? "N/A"}</p>
          <p>Height: {data.height ?? "N/A"}</p>
          <p>Format: {data.meta?.format ?? "N/A"}</p>

          {data.buffer && (
            <img
              src={`data:image/png;base64,${data.buffer}`}
              style={{ maxWidth: "400px" }}
            />
          )}

          {data.analysis && (
            <div>
              <p>Edge Density: {data.analysis.edgeDensity}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}