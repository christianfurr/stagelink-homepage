"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/landing/announcement-bar";
import { Nav } from "@/components/landing/nav";

export function HeaderWithAnnouncement() {
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  return (
    <>
      <AnnouncementBar
        open={!announcementDismissed}
        onDismiss={() => setAnnouncementDismissed(true)}
      />
      <Nav hasAnnouncement={!announcementDismissed} />
    </>
  );
}
