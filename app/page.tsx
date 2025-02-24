import { prisma } from "@/prisma";
import React from "react";
import { HomeClient } from "./page.client";

export default async function Home() {
  // dateが今日のレコードを取得する
  const gte = new Date(new Date(Date.now()).setHours(0, 0, 0, 0));
  const lt = new Date(new Date(Date.now()).setHours(24, 0, 0, 0));
  // dateがなぜかstringなので
  let items = await prisma.calorie_intakes.findMany();
  items = items.filter((item) => new Date(item.date) >= gte && new Date(item.date) < lt);

  const sum = items.reduce((acc, item) => acc + item.calorie, 0);
  // 1900-2000
  const target = Math.floor(Math.random() * 100 + 1900);

  return (
    <HomeClient intakeCalories={sum}
      targetCalories={target}
    />
  )
}
