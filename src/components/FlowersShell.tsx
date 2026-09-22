import upperSucculent from "/src/assets/succulents/upperSucculent.png";
import bottomSucculent from "/src/assets/succulents/bottomSucculent.png";

interface FlowersShellProps {
  children: React.ReactNode;
}

function FlowersShell({ children }: FlowersShellProps) {
  return (
    <>
      <>{children}</>
      <img
        className="absolute top-0 left-0 z-100 pointer-events-none"
        src={upperSucculent}
      />
      <img
        className="absolute bottom-0 right-0 z-100 pointer-events-none"
        src={bottomSucculent}
      />
    </>
  );
}

export default FlowersShell;
