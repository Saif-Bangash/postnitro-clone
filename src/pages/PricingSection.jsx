import React from "react";

const plans = [
  {
    title: "STARTER PLAN",
    price: "$10/month",
    features: [
      "Watermark-free exports",
      "Access to basic AI models (GPT-4o, Claude Haiku)",
      "30 downloads/month",
      "8 AI Generated Slides per Carousel",
    ],
    button: "Get Started",
    highlight: false,
    subtext: "Perfect for getting started.",
  },
  {
    title: "SOLOPRENEUR PLAN",
    oldPrice: "Previously: $20/month",
    price: "$10/month",
    savings: "Saves you $120 per year.",
    features: [
      "Watermark-free exports",
      "Access to advanced AI models (GPT-4, Claude Sonnet)",
      "15 AI Generated Slides per Carousel",
      "Up to 5 Brands",
      "Unlimited downloads",
      "Access to all templates",
      "Custom color palettes",
      "Create custom templates",
    ],
    button: "Get Started",
    highlight: true,
    subtext: "Perfect for solo creators.",
  },
  {
    title: "TEAM PLAN",
    oldPrice: "Previously: $50/month",
    price: "$25/month",
    savings: "Saves you $300 per year.",
    features: [
      "100 AI generated images per month",
      "Up to 5 workspaces",
      "Up to 20 slides per carousel",
      "15 custom templates",
    ],
    button: "Get Started",
    highlight: false,
    subtext: "Perfect for small teams.",
  },
];

const freePlan = {
  title: "FREE PLAN",
  price: "$0/month",
  features: [
    "Access to GPT 4o-Mini",
    "5 downloads per month",
    "Access to basic templates",
  ],
};

export default function PricingSection() {
    return (
      <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Plans for Your Carousel Creation Needs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            From solo creators to agencies, we have a plan that fits your requirements.
          </p>
          <p className="mt-4 text-green-600 font-semibold text-sm sm:text-base">
            50% OFF ON YEARLY SUBSCRIPTION - ANNUAL50OFF
          </p>
        </div>
  
        {/* Plans Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-5 sm:p-6 shadow-sm transition-all duration-300 ${
                plan.highlight
                  ? "border-green-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-sm font-semibold text-green-700 uppercase mb-1 sm:mb-2">
                {plan.title}
              </h3>
              {plan.oldPrice && (
                <p className="text-sm text-red-500 line-through">
                  {plan.oldPrice}
                </p>
              )}
              <p className="text-xl sm:text-2xl font-bold mb-1">{plan.price}</p>
              {plan.savings && (
                <p className="text-sm text-green-600 font-medium mb-2">
                  {plan.savings}
                </p>
              )}
              <p className="text-gray-500 text-sm mb-4">{plan.subtext}</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
  
        {/* Add-ons text */}
        <div className="mt-10 sm:mt-12 text-center text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          If you require additional limits, you can{" "}
          <span className="text-green-600 font-medium cursor-pointer underline">
            add them as Add-Ons
          </span>{" "}
          to your subscription.
        </div>
  
        {/* Free Plan */}
        <div className="mt-10 sm:mt-12 max-w-md mx-auto border rounded-xl p-5 sm:p-6 border-gray-200">
          <h4 className="text-sm font-semibold text-green-700 uppercase mb-2">
            {freePlan.title}
          </h4>
          <p className="text-xl sm:text-2xl font-bold mb-4">{freePlan.price}</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            {freePlan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span>✅</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  
