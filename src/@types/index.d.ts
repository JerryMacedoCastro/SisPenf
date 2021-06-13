import { Feather } from "@expo/vector-icons";

declare module "*.png";
export type IconName = keyof typeof Feather.glyphMap;
