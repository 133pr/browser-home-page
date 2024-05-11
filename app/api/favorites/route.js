import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/authOptions";
import prisma from "@/prisma/client";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (session) {
    const user_id = session.user.id;
    const items = await prisma.favorites.findMany({
      where: {
        userId: parseInt(user_id)
      }
    })
    return NextResponse.json({
      items: items,
      error: ''
    });
  }
  return NextResponse.json({items:[], error: 'not login'});

}

export async function HEAD(request) {}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  const data = await request.json();
  if (session) {
    const user_id = session.user.id;
    const countFavorites = await prisma.favorites.aggregate({
      where: {
        userId: parseInt(user_id)
      },
      _count: true
    });

    const item = await prisma.favorites.create({
      data: {
        userId: parseInt(user_id),
        icon: data.icon,
        url: data.url,
        title: data.title,
        order: countFavorites._count + 1
      }
    });
    return NextResponse.json({item: item, error: ''});

  }

  return NextResponse.json({item: {}, error: 'not login'});
}

export async function PUT(request) {}

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  const { id } = await request.params;
  if (session) {
    const user_id = session.user.id;
    const item = await prisma.favorites.delete({
      where: {
        id: id
      }
    });
    return NextResponse.json({item: item, error: ''});

  }

  return NextResponse.json({item: {}, error: 'not login'});
}

export async function PATCH(request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}