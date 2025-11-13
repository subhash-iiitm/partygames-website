import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Downloads the Android APK file
 * @param filename - The filename for the downloaded file (default: 'party-games.apk')
 */
export async function downloadAPK(filename: string = 'party-games.apk'): Promise<void> {
  try {
    const response = await fetch('/party-games.apk');
    if (!response.ok) {
      throw new Error('Failed to download APK');
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download error:', error);
    // Fallback to direct link
    window.open('/party-games.apk', '_blank');
  }
}
