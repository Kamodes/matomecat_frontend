"use client";
import { useRouter } from "next/router";

export default function Page({ title, date }: { title: string; date: string }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
}
