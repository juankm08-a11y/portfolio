import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import React from "react";

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}
