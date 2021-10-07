import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar/Navbar';
import IndexSections from '../components/IndexSections/IndexSections';

export default function Home() {
  return (
    <>
      <NextSeo title="BP Landing Page" description="" />
      <Navbar />
      <IndexSections />
    </>
  );
}
