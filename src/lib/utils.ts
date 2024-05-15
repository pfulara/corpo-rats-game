import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useLocale } from 'next-intl';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(slug : string) {
  const lang = useLocale() || 'en';
  const res = `/${lang}/${slug}`
  return res;
}