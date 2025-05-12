export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="">This is Auth layout page</div>
        {children}
      </body>
    </html>
  );
}
