// Get the serviceId from the URL (we'll just simulate it for now)
const serviceId = "random-service-1"; // Simulating a service ID

// Random data generator for service details
function generateRandomData() {
  const levels = ["Beginner", "Intermediate", "Advanced"];
  const deliveryTimes = ["1-day", "2-days", "3-days", "1-week"];
  const descriptions = [
    "This service offers a fantastic experience with great quality and fast delivery.",
    "Highly rated service with exceptional customer satisfaction and professional delivery.",
    "Affordable and reliable service, perfect for all your needs.",
    "Expert service offering top-notch quality and premium delivery times."
  ];

  const priceRanges = [50, 100, 200, 300, 500]; // Price options

  const ratings = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3 and 5
  const reviewsCount = Math.floor(Math.random() * 500 + 20); // Random number of reviews between 20 and 500

  // Randomly select data
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  const randomPrice = priceRanges[Math.floor(Math.random() * priceRanges.length)];
  const randomDeliveryTime = deliveryTimes[Math.floor(Math.random() * deliveryTimes.length)];

  // Set the service details in the DOM
  document.getElementById("service-title").innerText = `Random Service: ${serviceId}`;
  document.getElementById("service-description").innerText = randomDescription;
  document.getElementById("service-rating").innerText = `${ratings} ⭐`;
  document.getElementById("service-reviews").innerText = `(${reviewsCount} reviews)`;
  document.getElementById("service-level").innerText = randomLevel;
  document.getElementById("service-price").innerText = randomPrice;
  document.getElementById("service-delivery").innerText = randomDeliveryTime;
}

// Simulate Payment Gateway
function showPaymentGateway() {
  alert("Redirecting to payment gateway...");
}

// Call the function to generate random data when the page loads
generateRandomData();
