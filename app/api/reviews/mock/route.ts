import { NextResponse } from 'next/server';

// Mock API endpoint for testing without Google Sheets
export async function GET() {
  const mockReviews = [
    {
      name: "John Doe",
      rating: 5,
      content: "Amazing extension! It has made form filling so much easier.",
      timestamp: new Date().toISOString(),
    },
    {
      name: "Jane Smith",
      rating: 4,
      content: "Great tool, saves me a lot of time. Highly recommended!",
      timestamp: new Date().toISOString(),
    },
    {
      name: "Mike Johnson",
      rating: 5,
      content: "Perfect for my daily workflow. The auto-fill feature is fantastic.",
      timestamp: new Date().toISOString(),
    },
  ];

  return NextResponse.json({ reviews: mockReviews });
}

export async function POST() {
  // Mock successful submission
  return NextResponse.json({ success: true });
}