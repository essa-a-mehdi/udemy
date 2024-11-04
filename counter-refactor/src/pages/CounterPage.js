import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

    return <button onClick={increment}></button>
}

