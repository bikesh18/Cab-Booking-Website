export const metadata = {
  title: 'CABGo - Premium Cab Booking Service',
  description: 'Book instant and reliable rides within seconds.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
