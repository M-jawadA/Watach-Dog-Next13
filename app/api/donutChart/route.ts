import { NextResponse } from "next/server";
import { donutChartData } from "@/lib/rawData";

class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "CustomError";
    }
  }

  export async function GET(request: Request, response: Response) {
    try {
      // Simulating an error for demonstration purposes
      if (Math.random() < 0.5) {
        throw new CustomError("Custom Error occurred");
      }
  
      return NextResponse.json({ message: "OK", status: 200, data: donutChartData });
    } catch (err: any) {
      if (err instanceof CustomError) {
        return NextResponse.json({ message: "Custom Error", status: 400, error: err });
      } else if (err instanceof CustomError) {
        return NextResponse.json({ message: "Not Found", status: 404, error: err });
      } else {
        return NextResponse.json({ message: "Internal Server Error", status: 500, error: err });
      }
    }
  }