interface FlowersShellProps {
  children: React.ReactNode;
}

function FlowersShell({ children }: FlowersShellProps) {
  return (
    <>
      <>{children}</>
      <img
        className="absolute top-0 left-0 z-100 pointer-events-none"
        src="src/assets/succulents/upperSucculent.png"
      />
      <img
        className="absolute bottom-0 right-0 z-100 pointer-events-none"
        src="src/assets/succulents/bottomSucculent.png"
      />
    </>
  );
}

export default FlowersShell;
