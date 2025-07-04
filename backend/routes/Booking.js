const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const authMiddleware = require("../middleware/authmiddleware");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  authMiddleware,
  [
    body("venue").notEmpty().withMessage("Venue is required"),
    body("sport").notEmpty().withMessage("Sport is required"),
    body("date").isISO8601().withMessage("Valid date is required"),
    body("timeSlot").notEmpty().withMessage("Time slot is required"),
    body("duration").isNumeric().withMessage("Duration must be a number"),
    body("totalAmount").isNumeric().withMessage("Amount must be a number"),
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Create booking document
      const booking = new Booking({
        userId: req.user._id,
        venue: req.body.venue,
        sport: req.body.sport,
        date: new Date(req.body.date),
        timeSlot: req.body.timeSlot,
        duration: req.body.duration,
        totalAmount: req.body.totalAmount,
        paymentMode: req.body.paymentMode || 'pay_at_venue',
        status: 'confirmed'
      });

      // Save to MongoDB
      const savedBooking = await booking.save();
      
      // Return booking ID for redirection
      res.status(201).json({
        success: true,
        bookingId: savedBooking._id
      });

    } catch (err) {
      console.error("Booking error:", err);
      res.status(500).json({
        success: false,
        error: "Booking failed",
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    }
  }
);

// Add this to your booking routes
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    // Verify the booking belongs to the requesting user
    if (booking.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;