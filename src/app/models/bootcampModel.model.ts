import { Schema, model } from 'mongoose';

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
  formattedAddress: String,
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
});

interface Bootcamp {
  name: string;
  description: string;
  website: string;
  email: string;
  slug: string;
  address: string;
  location: object; // GeoJson point
  careers: string[];
  averageRating: number;
  averageCost: number;
  photo: string;
  housing: boolean;
}

const BootcampSchema = new Schema<Bootcamp>(
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
    slug: String,
    website: {
      type: String,
      required: true,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please input a valid website address',
      ],
    },
    email: {
      type: String,
      required: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please add a valid email'],
    },
    address: {
      type: String,
      required: [true, 'Please add an address'],
    },
    location: {
      type: pointSchema,
      // required: true,
      index: '2dsphere',
    },
    careers: {
      type: [String],
      required: true,
      enum: ['Web Development', 'Mobile Development', 'UI/UX'],
    },
    averageRating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [1, 'Rating must not be more than 10'],
    },
    averageCost: Number,
    photo: {
      type: String,
      default: 'no-photo.jpg',
    },
    housing: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // adds created_at & updated_at
  }
);

// 3. Create a Model.
export const BootcampModel = model<Bootcamp>('Bootcamp', BootcampSchema);
