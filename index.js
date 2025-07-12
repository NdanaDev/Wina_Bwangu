// IIFE to encapsulate the script and avoid polluting the global scope
(() => {
  // Services specific to each booth
  const boothServices = {
      Wina1: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'],
      Wina2: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'FNB'],
      Wina3: ['Airtel Money', 'MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'],
      Wina4: ['Airtel Money', 'MTN Money', 'Zamtel Money'],
      Wina5: ['Airtel Money', 'MTN Money', 'Zanaco', 'FNB'],
      Wina6: ['Airtel Money', 'MTN Money', 'Zamtel Money']
  };

  const TAX_RATE = 0.16;  // Example tax rate (16%)

  const transactionForm = document.getElementById('transactionForm');
  const serviceSelect = document.getElementById('service');
  const transactionIDField = document.getElementById('transactionID');
  const boothSelect = document.getElementById('booth');
  const amountInput = document.getElementById('amount');
  const taxField = document.getElementById('tax');
  const revenueField = document.getElementById('revenue');

  // Function to generate a random transaction ID
  const generateTransactionID = () => {
      const randomNum = Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
      return `WB${randomNum}`;
  };

  // Function to clear and populate the service dropdown based on the selected booth
  const populateServices = (booth) => {
      // Clear current options
      serviceSelect.innerHTML = '';

      // Get services for the selected booth
      const services = boothServices[booth] || [];

      // Populate the services dropdown with the corresponding services
      services.forEach(service => {
          const option = document.createElement('option');
          option.value = service;
          option.textContent = service;
          serviceSelect.appendChild(option);
      });
  };

  // Function to calculate tax based on the transaction amount
  const calculateTax = (amount) => {
      return (amount * TAX_RATE).toFixed(2);  // Fixed to 2 decimal points
  };

  // Initialize form with default values and populate dropdowns
  const initForm = () => {
      transactionIDField.value = generateTransactionID();  // Set the transaction ID
      revenueField.value = '1.00';  // Default value for revenue per kwacha (can be dynamic)
      
      // Initially populate the services for the default booth
      populateServices(boothSelect.value);
  };

  // Event listener to update services when a new booth is selected
  boothSelect.addEventListener('change', () => {
      populateServices(boothSelect.value);
  });

  // Event listener to calculate tax when the amount is entered
  amountInput.addEventListener('input', () => {
      const amount = parseFloat(amountInput.value) || 0;
      const tax = calculateTax(amount);
      taxField.value = tax;
  });

  // Event listener for form submission (currently logs data for testing)
  transactionForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission for now

      const formData = {
          transactionID: transactionIDField.value,
          booth: boothSelect.value,
          service: serviceSelect.value,
          amount: amountInput.value,
          tax: taxField.value,
          revenue: revenueField.value
      };

      // For now, just log the form data (extend for actual form processing)
      console.log('Form Data:', formData);
  });

  // Call initialization function
  initForm();

})();

document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');  // Toggle 'hidden' class to show/hide the sidebar
});

