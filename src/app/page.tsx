// app/page.tsx
import PlanSelector from "@/components/PlanSelector";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
      <PlanSelector />
    </main>
  );
}
