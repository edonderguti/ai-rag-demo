import { NextResponse } from "next/server";

/**
 * A minimal POST handler that:
 * 1. Reads the user's last message
 * 2. Passes it to your API Gateway endpoint
 * 3. Returns the Gateway's response as JSON
 */
export async function POST(request) {
  console.log("Received request at /api/rag"); // <-- Add a console log

  try {
    // requestBody = await request.json();
    // console.log("Full request body:", requestBody);
    // 1. Extract the messages array from the incoming request
    const { messages = [] } = await request.json();
    console.log("Messages array from request:", messages);
    // 2. Get the user's most recent message content
    const userMessage =
      messages.length > 0 ? messages[messages.length - 1].content : "";

    console.log("Message-**", userMessage);

    // 3. Call your API Gateway with { question: userMessage }
    const response = await fetch(
      "https://7a5ekawljh.execute-api.us-east-1.amazonaws.com/prod/ask",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: JSON.stringify({ question: userMessage }),
        }),
      },
    );

    // 4. Return the Gateway's JSON response as the API response
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong.", details: error.message },
      { status: 500 },
    );
  }
}
