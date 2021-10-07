import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { ITransition } from './IndexSections';
import indexSections from '../../data/indexSections';
import { isDesktop } from 'react-device-detect';

type ScrollPosSetter = Dispatch<SetStateAction<ITransition>>;

type IsSnappingType = boolean | null;

export const useChangeScrollPosOnMouseWheel = (
  setScrollPos: ScrollPosSetter
) => {
  useEffect(() => {
    const $window = $(window);
    const windowHeight = $window.height() as number;

    const changeSectionOnMouseWheel = function (event: WheelEvent) {
      if (event.deltaY < 0) {
        // scrolling up
        setScrollPos((prevState) => {
          if (prevState.isTransitioning) return prevState;
          return {
            y: Math.max(0, prevState.y - windowHeight),
            isTransitioning: true,
          };
        });
      } else if (event.deltaY > 0) {
        // scrolling down
        setScrollPos((prevState) => {
          if (prevState.isTransitioning) return prevState;
          return {
            y: Math.min(
              (indexSections.length - 1) * windowHeight,
              prevState.y + windowHeight
            ),
            isTransitioning: true,
          };
        });
      }
    };

    window.addEventListener('wheel', changeSectionOnMouseWheel);

    return () => {
      window.removeEventListener('wheel', changeSectionOnMouseWheel);
    };
  }, [setScrollPos]);
};

export const useSetIsSnapping = (): IsSnappingType => {
  const [isSnapping, setIsSnapping] = useState<IsSnappingType>(null);

  useEffect(() => {
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      );
    };

    setIsSnapping(!isTouchDevice());
  }, []);

  return isSnapping;
};

export const useSetScrollPos = (
  element: RefObject<HTMLDivElement>,
  isSnapping: IsSnappingType,
  scrollPos: ITransition,
  setScrollPos: ScrollPosSetter
) => {
  useEffect(() => {
    if (isSnapping && element.current) {
      const { y, isTransitioning } = scrollPos;
      $(element.current).css('transform', `translateY(-${y}px)`);
      if (isTransitioning) {
        setTimeout(() => {
          setScrollPos((prevState) => ({
            ...prevState,
            isTransitioning: false,
          }));
        }, 700);
      }
    }
  }, [element, isSnapping, scrollPos, setScrollPos]);
};
