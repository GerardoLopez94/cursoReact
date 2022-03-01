
import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';



describe('Pruebas en useCounter', () => {

   test('debe de retornar valores por defecto', () => {
      const { result } = renderHook( () => useCounter());

      //console.log(result.current);
      expect(result.current.state).toBe(10);
      expect(typeof result.current.decrement).toBe('function');
      expect(typeof result.current.increment).toBe('function');
      expect(typeof result.current.reset).toBe('function');
   }); 

   test('debe de tener el counter en 100', () => {
      const { result } = renderHook(()  => useCounter(100));

      expect(result.current.state).toBe(100);
   });

   test('debe de incrementar el counter en 1', () => {
      const { result } = renderHook(() => useCounter(100));

      const { increment } = result.current;

      act(() => {
         increment();
      });

      expect(result.current.state).toBe(101);

   });

   test('debe de decrementar el counter en 1', () => {
      const { result } = renderHook(() => useCounter(100));

      const { decrement } = result.current;

      act(() => {
         decrement();
      });

      expect(result.current.state).toBe(99);

   });

   test('debe de setear al valor por defecto', () => {
      const { result } = renderHook(() => useCounter());

      const { reset, increment } = result.current;

      act(() => {
         increment();
         increment();
         reset();
      });
      

      expect(result.current.state).toBe(10);

   });
	
});
