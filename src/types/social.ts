import type { ReactNode } from "react";

export interface SocialLink {
  id: number;
  name: string;
  icon: ReactNode;
  link: string;
}
