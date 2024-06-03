import mongoose, { Document, Schema } from 'mongoose';

// TypeScript interface for Request
export interface IRequest extends Document {
  requestId: string;
  userId: string; // Reference to the user
  medicalInformation: {
    diagnosis: {
      description: string;
      dateOfDiagnosis: Date;
    };
    prescribedTreatment: {
      description: string;
      healthcareProvider: string;
      estimatedDate: Date;
    };
  };
  financialInformation: {
    estimatedCostOfTreatment: {
      totalCost: number;
      breakdown: {
        surgery: number;
        hospitalStay: number;
        medication: number;
        postOperativeCare: number;
      };
    };
    insuranceInformation: {
      hasInsurance: boolean;
      coverageAmount: number;
    };
    currentFinancialSituation: {
      monthlyIncome: number;
      monthlyExpenses: number;
      existingDebts: number;
    };
  };
  supportingDocumentation: {
    medicalReports: string;
    costEstimates: string;
    insuranceDetails: string;
  };
  personalStory: {
    situationDescription: string;
    previousSteps: string;
  };
  assistanceRequest: {
    reasonForAssistance: string;
    previousFundraisingEfforts: string;
  };
  referencesAndVerification: {
    references: {
      name: string;
      contactInfo: string;
    }[];
    identityVerification: string;
  };
  consentAndAgreement: {
    consentToShareInformation: boolean;
    agreement: string;
    signature: string;
    date: Date;
  };
}

// Mongoose schema for Request
const RequestSchema: Schema = new Schema({
  requestId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, ref: 'User' },
  medicalInformation: {
    diagnosis: {
      description: { type: String, required: true },
      dateOfDiagnosis: { type: Date, required: true },
    },
    prescribedTreatment: {
      description: { type: String, required: true },
      healthcareProvider: { type: String, required: true },
      estimatedDate: { type: Date, required: true },
    },
  },
  financialInformation: {
    estimatedCostOfTreatment: {
      totalCost: { type: Number, required: true },
      breakdown: {
        surgery: { type: Number, required: true },
        hospitalStay: { type: Number, required: true },
        medication: { type: Number, required: true },
        postOperativeCare: { type: Number, required: true },
      },
    },
    insuranceInformation: {
      hasInsurance: { type: Boolean, required: true },
      coverageAmount: { type: Number, required: true },
    },
    currentFinancialSituation: {
      monthlyIncome: { type: Number, required: true },
      monthlyExpenses: { type: Number, required: true },
      existingDebts: { type: Number, required: true },
    },
  },
  supportingDocumentation: {
    medicalReports: { type: String, required: true },
    costEstimates: { type: String, required: true },
    insuranceDetails: { type: String, required: true },
  },
  personalStory: {
    situationDescription: { type: String, required: true },
    previousSteps: { type: String, required: true },
  },
  assistanceRequest: {
    reasonForAssistance: { type: String, required: true },
    previousFundraisingEfforts: { type: String, required: true },
  },
  referencesAndVerification: {
    references: [
      {
        name: { type: String, required: true },
        contactInfo: { type: String, required: true },
      },
    ],
    identityVerification: { type: String, required: true },
  },
  consentAndAgreement: {
    consentToShareInformation: { type: Boolean, required: true },
    agreement: { type: String, required: true },
    signature: { type: String, required: true },
    date: { type: Date, required: true },
  },
});

// Exporting the Request model
export default mongoose.models.Request ||
  mongoose.model<IRequest>('Request', RequestSchema);
