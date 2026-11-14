import "./globals.css";

export const metadata = {
  title: "Fold Ethos",
  description: "Fold Ethos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
