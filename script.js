const unitRadios = document.querySelectorAll('input[name="unit"]');
const totalPrice = document.getElementById('totalPrice');

const prices = {
  1: "10.00",
  2: "18.00",
  3: "24.00"
};

let lastSelectedUnit = "1";
let dropdownOpen = true;

unitRadios.forEach(radio => {
  radio.addEventListener('click', () => {
    const selected = document.querySelector('input[name="unit"]:checked').value;

    const selectedBox = document.querySelector(`.unit-box[data-unit="${selected}"]`);
    const selectedDropdown = selectedBox.querySelector('.dropdowns');

    if (selected === lastSelectedUnit) {
      dropdownOpen = !dropdownOpen;
    } else {
      dropdownOpen = true;
    }

    document.querySelectorAll('.unit-box .dropdowns').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });

    if (dropdownOpen && selectedDropdown) {
      selectedDropdown.classList.remove('hidden');
    }

    totalPrice.textContent = `$${prices[selected]} USD`;

    document.querySelectorAll('.unit-box').forEach(box => {
      box.classList.remove('selected');
    });
    selectedBox.classList.add('selected');

    lastSelectedUnit = selected;
  });
});
