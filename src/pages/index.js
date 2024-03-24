import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: 'poppins',
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={` ${poppins.variable}`}>
          {children}
        </body>
      </html>
    </>
  );
}
