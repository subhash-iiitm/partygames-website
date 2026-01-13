import { useState } from "react";

/**
 * Custom hook for handling app download with platform detection
 * Opens the appropriate app store based on the user's platform
 */
export function useDownloadApp() {
  const [showIOSDialog, setShowIOSDialog] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    // Detect platform and open appropriate store
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    
    if (isIOS) {
      // Open App Store for iOS users
      window.open("https://apps.apple.com/in/app/partygames-vibe-with-friends/id6756569990", "_blank");
    } else {
      // Open Play Store for Android and desktop users
      window.open("https://play.google.com/store/apps/details?id=com.homeground.partygames", "_blank");
    }
  };

  return {
    handleDownload,
    showIOSDialog,
    setShowIOSDialog,
    isDownloading,
  };
}

