import cx from 'classnames';
import { RefObject, useRef, useState } from 'react';
import indexSections from '../../data/indexSections';
import ToIndexSectionConverter from './ToIndexSectionConverter';
import {
  useChangeScrollPosOnMouseWheel,
  useSetIsSnapping,
  useSetScrollPos,
} from './hooks';

export interface ITransition {
  y: number;
  isTransitioning: boolean;
}

const IndexSections = (): JSX.Element => {
  const [scrollPos, setScrollPos] = useState<ITransition>({
    y: 0,
    isTransitioning: false,
  });

  const container: RefObject<HTMLDivElement> = useRef(null);

  useChangeScrollPosOnMouseWheel(setScrollPos);

  const isSnapping = useSetIsSnapping();

  useSetScrollPos(container, isSnapping, scrollPos, setScrollPos);

  // if loading, return one section with only a "Loading..." heading
  if (isSnapping === null)
    return (
      <div className="h-screen">
        <ToIndexSectionConverter content={<h1>Loading...</h1>} bgImageUrl="" />
      </div>
    );

  return (
    <div className={cx('h-screen', { 'overflow-hidden': isSnapping })}>
      <div ref={container} className="h-full transition duration-700 ease-in">
        {indexSections.map(ToIndexSectionConverter)}
      </div>
    </div>
  );
};

export default IndexSections;
