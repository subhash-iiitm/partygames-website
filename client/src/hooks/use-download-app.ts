import { useState } from "react";
import { downloadAPK } from "@/lib/utils";

/**
 * Custom hook for handling app download with platform detection
 * Returns the download handler and iOS dialog state
 */
export function useDownloadApp() {
  const [showIOSDialog, setShowIOSDialog] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    // Detect platform and download APK or show coming soon dialog
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);
    
    if (isIOS) {
      // Show coming soon dialog for iOS users
      setShowIOSDialog(true);
    } else {
      // Download APK for Android and desktop devices
      setIsDownloading(true);
      try {
        await downloadAPK();
      } finally {
        // Reset loading state after a short delay to show feedback
        setTimeout(() => {
          setIsDownloading(false);
        }, 500);
      }
    }
  };

  return {
    handleDownload,
    showIOSDialog,
    setShowIOSDialog,
    isDownloading,
  };
}

