export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-background">
      <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/60 blur-[120px]" />
      <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-100/60 blur-[120px]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-teal-100/60 blur-[120px]" />
    </div>
  );
}
