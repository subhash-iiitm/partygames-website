import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Downloads the Android APK file
 * Optimized for immediate download start
 * @param filename - The filename for the downloaded file (default: 'party-games.apk')
 */
export async function downloadAPK(filename: string = 'party-games.apk'): Promise<void> {
  const apkPath = '/party-games.apk';
  
  // Use direct download for faster start - browser handles the download
  // This provides immediate feedback to the user
  const link = document.createElement('a');
  link.href = apkPath;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  
  // Trigger download immediately
  link.click();
  
  // Clean up after a short delay
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
  
  // Optional: Verify download started (non-blocking)
  // This doesn't block the download but can log if there's an issue
  fetch(apkPath, { method: 'HEAD' }).catch((error) => {
    console.warn('APK file verification failed:', error);
  });
}
