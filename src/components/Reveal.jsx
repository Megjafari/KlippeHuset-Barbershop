import { useInView } from "../hooks/useInView";

const transforms = {
  up: "translateY(48px)",
  left: "translateX(-48px)",
  right: "translateX(48px)",
};

export default function Reveal({ children, delay = 0, direction = "up" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : transforms[direction],
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
