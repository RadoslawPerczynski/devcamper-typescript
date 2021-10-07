import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Bootcamp {
  name: string;
  description: string;
  slug: string;
}

// 2. Create a Schema corresponding to the document interface.
const bootcampSchema = new Schema<Bootcamp>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// 3. Create a Model.
export const BootcampModel = model<Bootcamp>('Bootcamp', bootcampSchema);
