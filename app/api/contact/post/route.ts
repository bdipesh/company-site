import { NextResponse } from 'next/server';
import { createClient } from "@/app/lib/db";


export async function POST(request: Request) {
    const supabase = await createClient();
    const payload = await request.json(); // Read the request body

    const { data, error } = await supabase
        .from('contact_information')
        .insert([
            payload
        ])
        .select()
    // Process the data (e.g., save to a database)
    console.log('Received data:', payload);
    if(error) {
        return NextResponse.json(error);
    }
    if(data) {
        return NextResponse.json({ message: 'Post created successfully', data }, { status: 201 });
    }

    // Return a response
}
