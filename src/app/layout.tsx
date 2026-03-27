import './globals.css'

export const metadata = {
  title: 'AxiraTech — Software Development Agency',
  description: 'AxiraTech is a full-spectrum software development agency creating scalable web platforms, AI-powered tools, and enterprise solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
