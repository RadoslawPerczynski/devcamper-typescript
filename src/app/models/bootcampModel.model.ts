import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Bootcamp {
  name: string;
  description: string;
  slug: string;
}

// 2. Create a Schema corresponding to the document interface.
const bootcampSchema = new Schema<Bootcamp>(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      minlength: [5, 'Name cannot be less than 5 characters, got {VALUE}'],
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    description: {
      type: String,
      required: true,
      maxlength: [500, 'Description cannot be more than 50 characters'],
    },
  },
  {
    timestamps: true, // adds created_at & updated_at
  }
);

// 3. Create a Model.
export const BootcampModel = model<Bootcamp>('Bootcamp', bootcampSchema);
