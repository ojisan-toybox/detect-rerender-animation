import { h, render } from "preact";
import { StateUpdater, useState } from "preact/compat";
import { setup, styled } from "goober";

setup(h);

const Component = (props: { cnt: number; setCnt: StateUpdater<number> }) => {
  return (
    <div>
      <span>cnt: {props.cnt}</span>
      <button onClick={() => props.setCnt(props.cnt + 1)}>count up</button>
    </div>
  );
};

const StyledComponent = styled(Component)`
  @keyframes rendered {
    0% {
      background-color: rgb(255, 255, 0, 1);
    }
    100% {
      background-color: rgb(255, 255, 0, 0);
    }
  }

  span {
    animation: rendered 1s ease;
    animation-iteration-count: 1;
  }
`;

const ContainerComponent = () => {
  const [cnt, setCnt] = useState(0);
  return <StyledComponent {...{ cnt, setCnt }}></StyledComponent>;
};

render(<ContainerComponent></ContainerComponent>, document.body);
