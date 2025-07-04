const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    default: 0
  },
  tax: {
    type: Number,
    default: 0
  },
  amount: {
    type: Number,
    default: 0
  },
  paymentMode: {
    type: String,
    enum: ['Online', 'Pay at Venue'],
    default: 'Pay at Venue'
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Cancelled'],
    default: 'Confirmed'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);
