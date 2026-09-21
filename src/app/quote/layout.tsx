import type { Metadata } from "next";

// Segment layout ONLY to carry the canonical. The page is a "use client"
// component, and Next IGNORES a metadata export from a client component — a
// page-level insert compiles, passes the gate, deploys and changes nothing.
// A layout is a server component, so the metadata is honoured.
//
// Only `alternates` is set: title and description still inherit from the root.
// The ROOT canonical is correct for the homepage and is NOT touched.
export const metadata: Metadata = {
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
