"use client";

import { X } from "lucide-react";

interface AnnouncementBarProps {
  open: boolean;
  onDismiss: () => void;
}

export function AnnouncementBar({ open, onDismiss }: AnnouncementBarProps) {
  if (!open) return null;

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-center gap-4 border-b border-gold/50 bg-gold px-4 py-2.5 text-sm font-medium text-primary-foreground">
      <span>Early access</span>
      <button
        type="button"
        onClick={onDismiss}
        className="rounded-md p-1 text-primary-foreground/80 transition-colors hover:bg-black/10 hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
