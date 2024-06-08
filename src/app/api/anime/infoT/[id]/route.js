import axios from "axios";
import { redis } from "@/lib/rediscache";
import { NextResponse } from "next/server";

axios.interceptors.request.use((config) => {
  config.timeout = 9000;
  return config;
});

async function fetchRecent(id) {
  try {
    const { data } = await axios.get(
      `https://api-aniwatch.onrender.com/anime/info?id=${id}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching Recent Episodes:", error);
    return [];
  }
}

export async function GET(req, { params }) {
  let cached;
  if (redis) {
    console.log("using redis");
    cached = await redis.get(`info-${params.id}`);
  }
  if (cached) {
    return NextResponse.json(JSON.parse(cached));
  } else {
    const data = await fetchRecent(params.id);
    if (data) {
      if (redis) {
        await redis.set(`info-${params.id}`, JSON.stringify(data), "EX", 18000);
      }
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ message: "Recent Episodes not found" });
    }
  }
}
