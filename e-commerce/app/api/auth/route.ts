// app/api/auth/route.ts
import { login } from '@/utils/auth';
import { NextResponse } from 'next/server';


export async function POST() {
  try {
    const token = await login();
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to authenticate' }, { status: 500 });
  }
}
