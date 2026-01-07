import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { pool } from "@/lib/prisma";

export async function POST(req: Request) {
    const { prompt } = await req.json();
    await pool.connect().then(() => {
        console.log("Connected to the database successfully.");
    })
        .catch((err) => {
            console.error("Could not connect to the database", err);
        })

    if (!prompt) {
        return NextResponse.json(
            { error: "Prompt is required" },
            { status: 400 }
        );
    }

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful coding assistant." },
            { role: "user", content: prompt },
        ],
    });

    return NextResponse.json({
        result: response.choices[0].message.content,
    });
}
