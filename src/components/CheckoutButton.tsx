'use client';

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const res = await fetch("/checkout", {
      method: "POST",
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Buy Now ($20)
    </button>
  );
}
