import { h, render } from "preact";
import { StateUpdater, useState } from "preact/compat";
import { setup } from "goober";

setup(h);

const Component = (props: { cnt: number; setCnt: StateUpdater<number> }) => {
  return (
    <div>
      <span>cnt: {props.cnt}</span>
      <button onClick={() => props.setCnt(props.cnt + 1)}>count up</button>
    </div>
  );
};

const ContainerComponent = () => {
  const [cnt, setCnt] = useState(0);
  return <Component {...{ cnt, setCnt }}></Component>;
};

render(<ContainerComponent></ContainerComponent>, document.body);
