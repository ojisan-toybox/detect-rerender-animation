import { h } from "preact";
import { styled } from "goober";

const Component = (props: { cnt: number; className?: string }) => {
  return (
    <div className={props.className} key={props.cnt}>
      <span>cnt: {props.cnt}</span>
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

const ContainerComponent = (props: { cnt: number }) => {
  return <StyledComponent {...{ cnt: props.cnt }}></StyledComponent>;
};

export const Count = ContainerComponent;
