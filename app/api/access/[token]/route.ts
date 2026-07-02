import { NextResponse } from "next/server";
import {
  createCourseSignedUrl,
  markAccessTokenUsed,
  validateAccessToken
} from "@/lib/access/tokens";

type AccessRouteContext = {
  params: Promise<{
    token: string;
  }>;
};

export async function GET(_request: Request, context: AccessRouteContext) {
  const { token } = await context.params;
  const access = await validateAccessToken(token);

  if (!access.ok) {
    return NextResponse.json({ error: access.reason }, { status: 403 });
  }

  const signedUrl = await createCourseSignedUrl();
  await markAccessTokenUsed(access.accessToken.id);

  return NextResponse.redirect(signedUrl);
}
