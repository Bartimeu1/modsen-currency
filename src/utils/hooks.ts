import { useEffect, RefObject } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@store/store';

export const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: TouchEvent | MouseEvent) => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: TouchEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);

  return ref;
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
