import mongoose, {Schema, Document} from 'mongoose'
import validator from "validator"


export interface IDialog extends Document {
  partner: string,
  author: string,
  lastMessage: string,
}

const DialogSchema = new Schema({
  partner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  lastMessage: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {
  timestamps: true
})

const DialogModel = mongoose.model<IDialog>('Dialog', DialogSchema)

export default DialogModel