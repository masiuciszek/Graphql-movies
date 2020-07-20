import { fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useKeyEvent from '../hooks/useKeyEvent';

test('useKeyEvent', () => {
  const hook = renderHook(() => useKeyEvent());

  // act(() => {
  //   result.current;
  // });

  expect(hook.result.current).toBe('');
  expect(hook.result.error).toBe(undefined);
  fireEvent.keyDown(window);
  // expect(typeof hook.result).toBe('function')

  // expect(typeof result.current.increment).toBe('function')
});
