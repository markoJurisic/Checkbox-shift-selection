const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	let inBetween = false;
	// check if shift is pressed and that box is being checked (not unchecked)
	if (e.shiftKey && this.checked) {
		// loop over all checkboxes, look for the first one checked, the lasto one checked and check all boxes in between
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}

			if (inBetween) {
				checkbox.checked = true;
			}
		})
	}

	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))