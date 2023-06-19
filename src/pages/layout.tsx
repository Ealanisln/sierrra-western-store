import React, { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
