'use client';
import GenericDashboardLayout from '@/app/Shared/GenericDashboardLayout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DonorDashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <GenericDashboardLayout>{children}</GenericDashboardLayout>;
}
