import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
// import Animation from '@/Animation'


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'SKYWAVE',
    description: 'Skywave',
    icons: {
        icon: '/images/favicon.ico',
      },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <body className={inter.className}>
            {/* <Animation /> */}
                {children}
            </body>
        </html>
    );
}