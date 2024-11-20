// Trainer Data Array
const trainers = [];

// Add Trainer Button Functionality
document.getElementById('addTrainerButton').addEventListener('click', () => {
    const trainerName = prompt('Enter Trainer Name:');
    const expertise = prompt('Enter Trainer Expertise:');
    const availability = prompt('Enter Trainer Availability:');
    const contact = prompt('Enter Trainer Contact Information:');
    if (trainerName && expertise && availability && contact) {
        trainers.push({ trainerName, expertise, availability, contact });
        updateTrainerTable();
    }
});

// Update Trainer Table
function updateTrainerTable() {
    const tableBody = document.querySelector('#trainerTable tbody');
    tableBody.innerHTML = '';
    trainers.forEach((trainer, index) => {
        const row = `
            <tr>
                <td>${trainer.trainerName}</td>
                <td>${trainer.expertise}</td>
                <td>${trainer.availability}</td>
                <td>${trainer.contact}</td>
                <td>
                    <button class="edit" onclick="editTrainer(${index})">Edit</button>
                    <button class="delete" onclick="deleteTrainer(${index})">Delete</button>
                </td>
            </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Edit Trainer
function editTrainer(index) {
    const trainer = trainers[index];
    const trainerName = prompt('Edit Trainer Name:', trainer.trainerName);
    const expertise = prompt('Edit Trainer Expertise:', trainer.expertise);
    const availability = prompt('Edit Trainer Availability:', trainer.availability);
    const contact = prompt('Edit Trainer Contact Information:', trainer.contact);
    if (trainerName && expertise && availability && contact) {
        trainers[index] = { trainerName, expertise, availability, contact };
        updateTrainerTable();
    }
}

// Delete Trainer
function deleteTrainer(index) {
    if (confirm('Are you sure you want to delete this trainer?')) {
        trainers.splice(index, 1);
        updateTrainerTable();
    }
}

// Opportunities Data
const opportunities = [
    { id: 1, type: 'Technical', location: 'Remote', title: 'Advanced JavaScript Training' },
    { id: 2, type: 'Soft Skills', location: 'Onsite', title: 'Effective Communication' },
    { id: 3, type: 'Leadership', location: 'Remote', title: 'Leadership 101' }
];

// Display Opportunities
function displayOpportunities(type = 'all') {
    const list = document.getElementById('opportunitiesList');
    list.innerHTML = '';
    opportunities
        .filter(op => type === 'all' || op.type === type)
        .forEach(op => {
            const listItem = `
                <li>
                    <strong>${op.title}</strong> (${op.type}, ${op.location})
                    <button onclick="expressInterest(${op.id})">Express Interest</button>
                </li>`;
            list.insertAdjacentHTML('beforeend', listItem);
        });
}

// Express Interest
function expressInterest(opportunityId) {
    alert(`You have expressed interest in Opportunity ID: ${opportunityId}`);
}

// Filter Opportunities
document.getElementById('applyFilter').addEventListener('click', () => {
    const selectedType = document.getElementById('filterType').value;
    displayOpportunities(selectedType);
});

// Initial Load
displayOpportunities();
