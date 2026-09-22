interface BackgroundProps {
  children: React.ReactNode;
}

function Background({ children }: BackgroundProps) {
  return (
    <div
      className={
        "bg-linear-to-b from-[#B3E6C4] to-[#409D5E] h-dvh overflow-y-auto scrollbar-none"
      }
    >
      <>{children}</>
    </div>
  );
}

export default Background;
