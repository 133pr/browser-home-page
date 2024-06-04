import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/authOptions";
import prisma from "@/prisma/client";


export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  const id = params.id;
  if (session) {
    const item = await prisma.favorites.delete({
      where: {
        id: parseInt(id)
      }
    });
    return NextResponse.json({item: item, error: ''});

  }

  return NextResponse.json({item: {}, error: 'not login'});
}

export async function PATCH(request) {}