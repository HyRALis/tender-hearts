import mongoose, { Document, Schema } from 'mongoose';
import { TRole } from '../types/shared';

// TypeScript interface for User
export interface IUser extends Document {
  userId: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  contactInformation: {
    phoneNumber: string;
    emailAddress: string;
  };
  homeAddress: {
    streetAddress: string;
    city: string;
    postalCode: string;
  };
  role: TRole;
}

// Mongoose schema for User
const UserSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, required: true },
  contactInformation: {
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
  },
  homeAddress: {
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  role: { type: String, required: true },
});

// Exporting the User model
export default mongoose.models.User ||
  mongoose.model<IUser>('User', UserSchema);
