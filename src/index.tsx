import { h, render } from "preact";
import { useState } from "preact/compat";
import { setup } from "goober";
import { Count } from "./count";

setup(h);

const Component = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      <Count cnt={cnt}></Count>
      <button onClick={() => setCnt(cnt + 1)}>count up</button>
    </div>
  );
};

render(<Component></Component>, document.body);
