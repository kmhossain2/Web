console.log("Entered Script");

document.addEventListener('DOMContentLoaded', () => {
    const textForm = document.getElementById('right');

    document.getElementById('inquiryType').addEventListener('change', () => {
        const selectedType = document.querySelector('input[name="type"]:checked');

        // Clear existing hourlyRate elements if present
        const existingHourlyRateLabel = document.getElementById('hourlyRateLabel');
        const existingHourlyRateInput = document.getElementById('hourlyRateInput');

        if (existingHourlyRateLabel) {
            textForm.removeChild(existingHourlyRateLabel);
        }
        if (existingHourlyRateInput) {
            textForm.removeChild(existingHourlyRateInput);
        }

        // Add hourlyRate elements if 'hiring' is selected
        if (selectedType && selectedType.value === "hiring") {
            const rateLabel = document.createElement('label');
            rateLabel.setAttribute('for', 'hourlyRate');
            rateLabel.setAttribute('id', 'hourlyRateLabel');
            rateLabel.textContent = "Hourly Rate";

            const rateBox = document.createElement('input');
            rateBox.setAttribute('type', 'text');
            rateBox.setAttribute('id', 'hourlyRateInput');
            rateBox.setAttribute('name', 'hourlyRate');
            rateBox.setAttribute('class', 'hourlyRate');
            rateBox.required = true;

            textForm.appendChild(rateLabel);
            textForm.appendChild(rateBox);
        }
    });
});

function scroll2contact(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
