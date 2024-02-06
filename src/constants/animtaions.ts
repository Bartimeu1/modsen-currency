import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(-10px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

export const blink = keyframes`
  25% { 
    opacity: 1;
  }
  50% {
    opacity: 0
  }
  100% {
    opacity 1;
  }
`;

export const rotate = keyframes`
  0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
`;
