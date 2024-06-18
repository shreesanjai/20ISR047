// app/api/products/route.ts
import { fetchProducts } from '@/utils/api';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  const { token, filters } = await request.json();

  try {
    const products = await fetchProducts(token, filters);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
