import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/authOptions";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import {} from "next-auth";

export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (session) {
    const user_id = session.user.id;

    const passedItem = await prisma.passed
      .findUnique({
        where: {
          userId: parseInt(user_id),
        },
        select: {
          title: true,
          icon: true,
          date: true,
        },
      })
      .catch(() => {
        return {
          title: "",
          icon: "",
          date: new Date(),
        };
      });

    return NextResponse.json({ item: passedItem, error: "" });
  }
  const passedItem = {
    title: "",
    icon: "",
    date: new Date(),
  }

  return NextResponse.json({ item: passedItem, error: "not login" });
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  const data = await request.json();
  if (session) {
    const user_id = session.user.id;
    await prisma.user.update({
      where: {
        id: parseInt(user_id),
      },
      data: {
        name: data.user_name,
      },
    });

    const oldPassed = await prisma.passed.findFirst({
      where: {
        userId: parseInt(user_id),
      },
    });

    if (oldPassed) {
      await prisma.passed.updateMany({
        where: {
          userId: parseInt(user_id),
        },
        data: {
          title: data?.passed_title || 'new',
          icon: data.passed_icon,
          date: data.passed_date,
          updatedAt: new Date()
        }
      })
    } else {
      await prisma.passed.create({
        data: {
          userId: parseInt(user_id),
          title: data.passed_title,
          icon: data.passed_icon,
          date: data.passed_date,
          updatedAt: new Date()
        }
      })
    }

    return NextResponse.json({ item: {}, error: "" });
  }
  return NextResponse.json({ item: {}, error: "not login" });
}

export async function PUT(request) {}

export async function PATCH(request) {}
