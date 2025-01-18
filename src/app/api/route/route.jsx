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
    console.log("Raw API Response:", data);

    // Parse the nested body if it's a string
    let parsedBody;
    try {
      parsedBody =
        typeof data.body === "string" ? JSON.parse(data.body) : data.body;
      console.log("Parsed body:", parsedBody);
    } catch (parseError) {
      console.error("Error parsing body:", parseError);
      parsedBody = data.body;
    }

    // Return the retrieved_docs in a structured format
    return NextResponse.json({
      answer: parsedBody.retrieved_docs || "No answer available",
    });
  } catch (error) {
    console.error("Error in route handler:", error);
    return NextResponse.json(
      { error: "Something went wrong.", details: error.message },
      { status: 500 },
    );
  }
}
