const API_KEY = "iF3Ge4fH5gnQnBkHf1Om5ISYndVwoj5hNkaSBPKAoxc"; // Unsplash Access Key
let services = [];
const categories = ["under-25", "25-50", "50-80", "above-80"];
const categoryKeywords = {
  "under-25": "logo design",
  "25-50": "modern websites",
  "50-80": "branding and identity",
  "above-80": "luxury designs",
};

// Fetch images from Unsplash API
const fetchImages = async (query, count = 10) => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&per_page=${count}&client_id=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((result) => result.urls.small);
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

// Generate services with API images
const generateServices = async () => {
  for (const category of categories) {
    const images = await fetchImages(categoryKeywords[category], 10);
    console.log(`Fetched images for "${category}":`, images);

    for (let i = 0; i < 10; i++) {
      const priceRange = category.split("-").map(Number);
      const price =
        priceRange.length > 1
          ? Math.floor(Math.random() * (priceRange[1] - priceRange[0] + 1) + priceRange[0])
          : Math.floor(Math.random() * 50 + 80);

      const service = {
        id: `${category}-${i + 1}`, // Unique ID for each service
        category,
        title: `${category.replace("-", " ").toUpperCase()} Service ${i + 1}`,
        price,
        rating: (Math.random() * 1 + 4).toFixed(1),
        reviews: `(${Math.floor(Math.random() * 500 + 20)} reviews)`,
        description: `This is a detailed description for ${category.replace(
          "-",
          " "
        )} Service ${i + 1}. It includes high-quality work and exceptional delivery.`,
        image: images[i] || "https://via.placeholder.com/300x200",
        level: ["Beginner", "Intermediate", "Advanced"][Math.floor(Math.random() * 3)],
        deliveryTime: ["1-day", "2-days", "3-days", "1-week"][Math.floor(Math.random() * 4)],
      };
      services.push(service);
    }
  }

  console.log("Generated services:", services); // Debug log
  renderFilteredServices(); // Initial render with all services
};

// Render services dynamically
const renderFilteredServices = (filters = {}) => {
  let filteredServices = services;
  if (filters.price) {
    const [min, max] = filters.price.split("-").map(Number);
    filteredServices = filteredServices.filter(
      (s) => s.price >= min && (max ? s.price <= max : true)
    );
  }
  if (filters.category) {
    filteredServices = filteredServices.filter((s) => s.category === filters.category);
  }
  if (filters.level) {
    filteredServices = filteredServices.filter((s) => s.level === filters.level);
  }
  if (filters.rating) {
    filteredServices = filteredServices.filter((s) => parseFloat(s.rating) >= parseFloat(filters.rating));
  }
  if (filters.deliveryTime) {
    filteredServices = filteredServices.filter((s) => s.deliveryTime === filters.deliveryTime);
  }

  document.querySelectorAll(".service-list").forEach((list) => (list.innerHTML = ""));

  categories.forEach((category) => {
    const categoryServices = filteredServices.filter((s) => s.category === category);
    const serviceList = document.getElementById(category);

    categoryServices.forEach((service) => {
      const card = document.createElement("div");
      card.className = "service-card";

      card.innerHTML = `
        <a href="details.html?id=${service.id}" class="service-link">
          <img src="${service.image}" alt="${service.title}">
          <div class="content">
            <h3>${service.title}</h3>
            <p><strong>${service.level}</strong></p>
            <div class="details">
              <span>⭐ ${service.rating} ${service.reviews}</span>
              <span class="price">From $${service.price}</span>
            </div>
          </div>
        </a>
      `;

      serviceList.appendChild(card);
    });
  });
};

// Initialize services with images
generateServices();
// Get references to the buttons
const studentButton = document.getElementById('student');
const professionalButton = document.getElementById('professional');

// Add event listeners to both buttons
studentButton.addEventListener('click', function() {
  toggleSelection('Student');
});

professionalButton.addEventListener('click', function() {
  toggleSelection('Professional');
});

// Toggle the active class between the two buttons
function toggleSelection(selected) {
  // Remove active class from both buttons
  studentButton.classList.remove('active');
  professionalButton.classList.remove('active');

  // Add active class to the selected button
  if (selected === 'Student') {
    studentButton.classList.add('active');
  } else {
    professionalButton.classList.add('active');
  }

  // Optionally, update some content based on the selection
  document.getElementById('selected-role').textContent = selected;
}
