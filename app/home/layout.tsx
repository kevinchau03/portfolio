import Nav from "@/app/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}