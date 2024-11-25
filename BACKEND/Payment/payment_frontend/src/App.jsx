function loadScript() {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject("Failed to load Razorpay script");
    };
    document.body.appendChild(script);
  });
}

function App() {
  async function openpaymentCheckout() {
    try {
      // Making a request to the backend
      const resp = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();

      const order = await data.order;

      // Load Razorpay script
      await loadScript();

      const finalOrderObject = {
        key: "rzp_test_VKXcZZmPgsLNnU",
        amount: order.amount,
        currency: order.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        order_id: order.id,
        callback_url: "http://localhost:3000/payment-success",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };
      const rzp = new Razorpay(finalOrderObject);
      rzp.open();
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  return (
    <>
      <div>Payment Demo</div>
      <button onClick={openpaymentCheckout}>Pay for 100</button>
    </>
  );
}

export default App;
