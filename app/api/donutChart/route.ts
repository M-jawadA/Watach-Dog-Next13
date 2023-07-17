import { NextResponse } from "next/server";
import { donutChartData } from "@/lib/rawData";

export async function GET(request: Request, response: Response) {
  try {
    return NextResponse.json({
      message: "OK",
      status: 200,
      data: donutChartData,
    });
  } catch (err) {
    return NextResponse.json({ message: "not ok", status: 500, err });
  }
}