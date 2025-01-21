export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "No file key provided" },
        { status: 400 },
      );
    }

    // Delete file logic here
    // Example:
    // await deleteFileFromS3(key);
    // or
    // await prisma.file.delete({ where: { pathname: key } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
