import { Simplify } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDayDetail(
  data: Simplify<Content.DayByDaySliceDefaultPrimaryItemsItem>
): IDayDetail[] {
  type KeysToCheck =
    | "welcome"
    | "meals"
    | "accommodation"
    | "arrival_transfer"
    | "departure_transfer";

  const keysToCheck: KeysToCheck[] = [
    "welcome",
    "meals",
    "accommodation",
    "arrival_transfer",
    "departure_transfer",
  ];
  const result: IDayDetail[] = [];

  keysToCheck.forEach((key) => {
    const value = data[key as keyof typeof data];

    if (value) {
      result.push({
        name: key,
        description: value as unknown as string,
      });
    }
  });

  return result;
}
