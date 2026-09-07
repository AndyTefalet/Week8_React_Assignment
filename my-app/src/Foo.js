import { useState } from 'react';

function Foo() {
  // כאן אנחנו יוצרים את הזיכרון הפנימי של הקומפוננטה
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ margin: '10px' }}>
      <button onClick={() => setCounter(counter + 1)}>
        Andy clicked me {counter} times!
      </button>
    </div>
  );
}

export default Foo;