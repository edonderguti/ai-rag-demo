export async function GET() {
  try {
    const files = []; // Replace with your actual file listing logic
    // Example:
    // const files = await prisma.file.findMany();
    // or
    // const files = await listFilesFromS3();

    return NextResponse.json(files);
  } catch (error) {
    console.error("List error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
