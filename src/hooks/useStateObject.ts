import { useState } from 'react';

export default function useStateObject(initial: any) {
  const [state, setState] = useState(initial);

  function set(key: string, value: any) {
    setState({ ...state, [key]: value });
  }
  return [state, set];
}