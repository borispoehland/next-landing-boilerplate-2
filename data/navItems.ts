import { AiOutlineGithub } from 'react-icons/ai';
import { INavItem } from '../components/Navbar/Navbar';
import { BiBookBookmark } from 'react-icons/bi';

const getNavItems = (): INavItem[] => {
  return [
    {
      name: 'Source code',
      href: 'https://github.com/borispoehland/next-landing-boilerplate-2',
      icon: AiOutlineGithub,
    },
  ];
};

export default getNavItems;
