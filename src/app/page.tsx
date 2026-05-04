import { LandingPage } from "@/components/landing/LandingPage";
import { redirect } from "next/navigation";

// Mock auth state for UI structure. In production, this should use next-auth's auth() session
const isAuthenticated = false;

export default function Home() {
  if (isAuthenticated) {
    // Redirect authenticated users directly to their personalized dashboard
    redirect("/dashboard");
  }

  // Public state: show marketing landing page to unauthenticated users
  return <LandingPage />;
}
