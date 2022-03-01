import * as React from 'react';
import useWindowSize from './useWindowSize';


export const useIsOverflow = (ref: React.RefObject<HTMLDivElement>, callback?:Function) => {
  const [isOverflow, setIsOverflow] = React.useState(false);
  const {width} = useWindowSize()

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
     if (current) {
        let hasOverflow:boolean = current?.scrollWidth > current?.clientWidth;

        setIsOverflow(hasOverflow);
  
        if (callback) callback(hasOverflow);
     }
    };

    if (current) {
      trigger();
    }
  }, [callback, ref, width]);

  return isOverflow;
};