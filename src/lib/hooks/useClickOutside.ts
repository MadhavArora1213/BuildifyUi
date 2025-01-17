import { useEffect, useCallback, RefObject } from 'react';

/**
 * Custom hook to detect clicks outside a specified element and trigger a callback.
 * 
 * @param ref - The ref of the element to detect clicks outside of.
 * @param handler - The function to execute when a click occurs outside.
 */
export const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  // Memoized event listener to avoid re-creating it on every render
  const handleClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
    if (!ref.current || ref.current.contains(event.target as Node)) return;
    handler();
  }, [ref, handler]);

  useEffect(() => {
    if (!ref.current) return; // Ensure ref is valid before adding listeners

    // Attach event listeners for both mouse and touch interactions
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      // Cleanup event listeners when component unmounts or dependencies change
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]); // Dependencies ensure optimal re-attachment

  return null; // Hook does not return any values
};
