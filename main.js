function showHome() {
    const homeItems = document.getElementById('product');
    homeItems.innerHTML = '';

    home.forEach((item) => {
      const row = document.createElement('tr');

      const productCell = document.createElement('td');
      productCell.textContent = item.description;
      row.appendChild(productCell);

      const priceCell = document.createElement('td');
      priceCell.textContent = item.price + '€';
      row.appendChild(priceCell);

      homeItems.appendChild(row);
    });
  }

  const showHomeButton = document.getElementById('panier');
showHomeButton.addEventListener('click', showHome);