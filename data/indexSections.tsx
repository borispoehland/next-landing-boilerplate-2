import { ReactNode } from 'react';
import Footer from '../components/Footer';

export interface IIndexSection {
  content: ReactNode;
  bgImageUrl: string;
}

const indexSections: IIndexSection[] = [
  {
    content: (
      <>
        <h1>This is the first section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          beatae consequuntur, dolor doloribus eius ex fugit laudantium magnam
          nostrum praesentium quia reiciendis repudiandae, suscipit, vel
          voluptatem. Consequuntur ipsa necessitatibus neque?
        </p>
      </>
    ),
    bgImageUrl: '/img/bg-2.svg',
  },
  {
    content: (
      <div className="text-gray-800">
        <h1>This is the second section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          beatae consequuntur, dolor doloribus eius ex fugit laudantium magnam
          nostrum praesentium quia reiciendis repudiandae, suscipit, vel
          voluptatem. Consequuntur ipsa necessitatibus neque?
        </p>
      </div>
    ),
    bgImageUrl: '/img/bg-3.svg',
  },
  {
    content: (
      <>
        <h1>This is the third section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          beatae consequuntur, dolor doloribus eius ex fugit laudantium magnam
          nostrum praesentium quia reiciendis repudiandae, suscipit, vel
          voluptatem. Consequuntur ipsa necessitatibus neque?
        </p>
        <Footer />
      </>
    ),
    bgImageUrl: '/img/bg-1.svg',
  },
];

export default indexSections;
