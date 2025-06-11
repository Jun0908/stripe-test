'use client';

const plans = [
  { name: "Starter", priceId: "price_1RYdsQJ1IQJtD25wdK9eIB8U", priceLabel: "$9/month" },
  { name: "Pro", priceId: "price_1RYdstJ1IQJtD25w67I6HJ7o", priceLabel: "$29/month" },
  { name: "Enterprise", priceId: "price_1RYdtNJ1IQJtD25wOp0srDMx", priceLabel: "$99/month" },
];

export default function PlanSelector() {
  const handleSubscribe = async (priceId: string) => {
    const res = await fetch("/subscribe", {
      method: "POST",
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {plans.map((plan) => (
        <div key={plan.name} className="border rounded-xl p-4 shadow">
          <h2 className="text-xl font-bold">{plan.name}</h2>
          <p className="text-gray-600 mb-4">{plan.priceLabel}</p>
          <button
            onClick={() => handleSubscribe(plan.priceId)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
}
