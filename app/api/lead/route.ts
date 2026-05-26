import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  return NextResponse.json(
    {
      ok: true,
      message:
        "Lead received. Wire this route to your CRM, email automation, or Sanity dataset for production handling."
    },
    { status: 200 }
  );
}
