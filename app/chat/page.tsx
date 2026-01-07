"use client";

import { useState } from "react";

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [actualHtml, setActualHtml] = useState("");

    const generate = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await res.json();
            const text = data.result;
            setResult(text);

            const regex = /```html\n([\s\S]*?)\n```/;
            const match = text.match(regex);

            if (match && match[1]) {
                setActualHtml(match[1]);
            } else {
                setActualHtml("");
            }
        } catch (error) {
            console.error("Error generating content:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="p-6 max-w-2xl mx-auto">
      <textarea
          className="w-full border p-3"
          rows={5}
          placeholder="Ask OpenAI to generate code..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
      />

            <button
                onClick={generate}
                className="mt-4 bg-black text-white px-4 py-2"
            >
                {loading ? "Generating..." : "Generate"}
            </button>

            <div className="flex justify-between items-start">
                <div>
                    {result && (
                        <div className="overflow-y-scroll h-96">
                    <pre className="mt-6 bg-gray-100 p-4 whitespace-pre-wrap rounded">
                    {result}
                </pre>
                        </div>
                    )}
                </div>
                <div>
                    {actualHtml && (
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Preview</h2>
                            <div
                                className="border p-4 rounded bg-white"
                                dangerouslySetInnerHTML={{ __html: actualHtml }}
                            />
                        </div>
                    )}
                </div>
            </div>




        </main>
    );
}
