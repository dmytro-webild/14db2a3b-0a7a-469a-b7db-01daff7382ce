import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Social Spark Agency | Ignite Your Brand\'s Social Media Presence',
  description: 'Social Spark Agency is a premium social media marketing agency specializing in content strategy, paid ads, and community management to drive measurable results and growth for your brand.',
  keywords: ["social media agency, digital marketing, social media marketing, content strategy, paid social ads, influencer marketing, community management, brand growth, social media management"],
  openGraph: {
    "title": "Social Spark Agency | Ignite Your Brand's Social Media Presence",
    "description": "Social Spark Agency is a premium social media marketing agency specializing in content strategy, paid ads, and community management to drive measurable results and growth for your brand.",
    "url": "https://www.socialsparkagency.com",
    "siteName": "Social Spark Agency",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/business-executives-reading-sticky-notes_1170-1720.jpg",
        "alt": "Social media marketing team brainstorming"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Social Spark Agency | Ignite Your Brand's Social Media Presence",
    "description": "Social Spark Agency is a premium social media marketing agency specializing in content strategy, paid ads, and community management to drive measurable results and growth for your brand.",
    "images": [
      "http://img.b2bpic.net/free-photo/business-executives-reading-sticky-notes_1170-1720.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
