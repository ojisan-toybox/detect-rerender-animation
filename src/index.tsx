import { h, render } from "preact";
import { StateUpdater, useState } from "preact/compat";
import { setup } from "goober";
import { Count } from "./count";

setup(h);

const Component = (props: { cnt: number; setCnt: StateUpdater<number> }) => {
  return (
    <div>
      <Count cnt={props.cnt}></Count>
      <button onClick={() => props.setCnt(props.cnt + 1)}>count up</button>
    </div>
  );
};

const ContainerComponent = () => {
  const [cnt, setCnt] = useState(0);
  return <Component {...{ cnt, setCnt }}></Component>;
};

render(<ContainerComponent></ContainerComponent>, document.body);
