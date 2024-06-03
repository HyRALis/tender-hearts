import mongoose, { Document, Schema } from 'mongoose';

// TypeScript interface for Review
interface IReview {
  positive: string;
  negative: string;
}

// TypeScript interface for Donation
export interface IDonation extends Document {
  donationId: string;
  requestId: string; // Reference to the request
  donorName: string;
  donorEmail: string;
  amount: number;
  donationDate: string;
  paymentMethod: 'credit_card' | 'debit_card' | 'paypal';
  reviews: IReview[];
}

// Mongoose schema for Donation
const DonationSchema: Schema = new Schema({
  donationId: { type: String, required: true, unique: true },
  requestId: { type: String, required: true, ref: 'Request' },
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  donationDate: { type: String, required: true },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['credit_card', 'debit_card', 'paypal'],
  },
  reviews: [
    {
      positive: { type: String, required: true },
      negative: { type: String, required: true },
    },
  ],
});

// Exporting the Donation model
export default mongoose.models.Donation ||
  mongoose.model<IDonation>('Donation', DonationSchema);
