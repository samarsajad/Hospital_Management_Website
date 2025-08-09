const express = require('express');
const router = express.Router();

// Static emergency contacts data
const emergencyContacts = [
  {
    id: 1,
    name: "Ambulance Hotline",
    number: "Hospital Ambulance Dispatch",
    icon: "🚑"
  },
  {
    id: 2,
    name: "Emergency Room Reception",
    number: "Immediate Medical Assistance",
    icon: "🏥"
  },
  {
    id: 3,
    name: "ICU Hotline",
    number: "Critical Patient Inquiries",
    icon: "🏥"
  },
  {
    id: 4,
    name: "Blood Bank Contact",
    number: "Urgent Blood Donation Requests",
    icon: "🩸"
  },
  {
    id: 5,
    name: "Hospital Security",
    number: "Safety Concerns",
    icon: "🛡️"
  },
  {
    id: 6,
    name: "National Emergency Helpline",
    number: "112",
    icon: "📞"
  },
  {
    id: 7,
    name: "Ambulance",
    number: "102 / 108",
    icon: "🚑"
  },
  {
    id: 8,
    name: "Police",
    number: "100",
    icon: "👮"
  },
  {
    id: 9,
    name: "Fire Brigade",
    number: "101",
    icon: "🔥"
  },
  {
    id: 10,
    name: "Women’s Helpline",
    number: "1091",
    icon: "♀️"
  },
  {
    id: 11,
    name: "Child Helpline",
    number: "1098",
    icon: "👶"
  },
  {
    id: 12,
    name: "Disaster Management",
    number: "108",
    icon: "🌪️"
  }
];

// GET /emergency-contacts
router.get('/emergency-contacts', (req, res) => {
  res.json(emergencyContacts);
});

module.exports = router;
