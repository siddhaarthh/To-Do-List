import { Document } from "mongoose"

// a Todo interface that extends the Document type provided by mongoose.
// https://mongoosejs.com/docs/documents.html
export interface ITodo extends Document {
    name: String,
    description: String,
    status: Boolean,
}