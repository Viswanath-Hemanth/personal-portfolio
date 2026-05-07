import { cn } from "@/lib/cn";

interface SectionShellProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionShell({ id, children, className }: SectionShellProps): React.JSX.Element {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-6 py-10 sm:py-14", className)}>
      {children}
    </section>
  );
}
