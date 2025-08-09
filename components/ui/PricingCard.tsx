import { PricingCardProps } from "@/models/pricingCardProps";
import Button from "./Button";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PricingCard = ({ title, price, subscriptionInfo }: PricingCardProps) => {
  return (
    <div
      className={`relative h-90 w-full rounded-2xl bg-black/10 p-8 ring-1 ring-white/60 backdrop-blur-2xl transition-all duration-300 ease-in-out hover:ring-indigo-500 ${title === "premiumSubscription" ? "mb-10 lg:mr-10 lg:mb-10" : ""} `}
    >
      <h1 className="mb-2 cursor-default text-2xl font-medium text-[oklch(0.90_0_0)]">
        {title === "premiumSubscription" ? "Premium" : "7-Day Free Trial"}
      </h1>
      <div className="mb-6">
        <span className="mr-2 cursor-default text-5xl font-bold text-[oklch(0.95_0_0)]">{`${title === "freeTrial" ? "Free" : "$" + price}`}</span>
        {title !== "freeTrial" ? (
          <span className="cursor-default text-[oklch(0.75_0_0)]">/mo</span>
        ) : null}
      </div>
      <div className="flex flex-col">
        {title === "freeTrial" ? (
          <span className="mb-1 text-[oklch(0.95_0_0)]">7-Day Access To</span>
        ) : null}
        {subscriptionInfo.map((info, index) => (
          <div key={index} className="flex items-center">
            <span className="mr-1 text-[oklch(0.75_0_0)]">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span className="cursor-default text-[oklch(0.75_0_0)]">
              {info}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute right-8 bottom-8 left-8">
        <Button
          text={`${title === "freeTrial" ? "Get Free Trial" : "Get Premium"}`}
          long={true}
        />
      </div>
    </div>
  );
};

export default PricingCard;
