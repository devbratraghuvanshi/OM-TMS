import { Document, Schema,Model, model } from 'mongoose';

// Branch Interface 
export interface IBranchModel extends Document {
    Name: String;
    Code: String;
    Type: String;
    IsAgency: boolean;
    Email: String;
    ContactPerson: String;
    Address: String;
    State: String;
    District?: String;
    PIN?: Number;
    Telephone?: Number;
    Mobile?: Number;
    Id?: String;
    createdAt: Date;
    modifiedAt: Date;
};

//Branch Schema
export const BranchSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Code: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    IsAgency: {
        type: Boolean,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    ContactPerson: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: false
    },
    PIN: {
        type: Number,
        required: false
    },
    Telephone:{
        type: Number,
        required: false
    },
    Mobile:{
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}, { collection: 'Branchs' });

BranchSchema.pre('save', function(next) {
  if (this._doc) {
    let doc = <IBranchModel>this._doc;
    let now = new Date();
    if (!doc.createdAt) {
      doc.createdAt = now;
    }
    doc.modifiedAt = now;
  }
  next();
  return this;
});


export const BranchModel = model<IBranchModel>('Branch', BranchSchema);
// export default Branch;