import { keyframes } from "../styles";

export const ExpandKeyframe = keyframes({
  from: {
    opacity: 0,
    scale: 0,
  },
  to: {
    opacity: 1,
    scale: 1,
  },
})

export const UnExpandKeyframe = keyframes({
  from: {
    opacity: 1,
    scale: 1,
  },
  to: {
    opacity: 0,
    scale: 0,
  },
})

