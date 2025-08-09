import PricingCard from "@/components/ui/PricingCard";

export default function Home() {
  return (
    <main className="absolute top-65 flex w-full flex-col items-start justify-center px-12 lg:flex-row">
      <PricingCard
        title={"premiumSubscription"}
        price={2}
        subscriptionInfo={[
          "AI-Powered Personal Trainer",
          "Workout & Progression Tracker",
          "Calorie & Weight Tracker",
        ]}
      />
      <PricingCard
        title={"freeTrial"}
        price={0}
        subscriptionInfo={[
          "AI-Powered Personal Trainer",
          "Workout & Progression Tracker",
          "Calorie & Weight Tracker",
        ]}
      />
    </main>
  );
}
