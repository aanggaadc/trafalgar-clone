import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDayDetails<T>(
  obj: T,
  day: number,
  prefix: string
): T[keyof T] | undefined {
  const key = `${prefix}_day_${day}` as keyof typeof obj;
  console.log(obj[key]);
  return obj[key];
}
