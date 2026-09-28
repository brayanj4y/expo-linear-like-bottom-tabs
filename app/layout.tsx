import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Linear Bottom Tabs",
  description: "A Linear-inspired expandable bottom navigation.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
