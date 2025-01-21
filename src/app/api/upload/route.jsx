import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Get the file data from the request
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Get presigned URL
    const presignedResponse = await fetch(
      `/api/files/presigned-url?filename=${encodeURIComponent(file.name)}&type=${file.type}`,
    );

    if (!presignedResponse.ok) {
      throw new Error("Failed to get upload URL");
    }

    const { url, key } = await presignedResponse.json();

    // Upload to S3
    const s3Upload = await fetch(url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });

    if (!s3Upload.ok) {
      throw new Error("S3 upload failed");
    }

    // Complete upload
    await fetch(`/api/files/complete-upload?key=${encodeURIComponent(key)}`);

    return NextResponse.json({ success: true, key });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
