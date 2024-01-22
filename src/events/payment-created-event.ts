import { Subjects } from './subjects'

export interface PaymentCompletedEvent {
  subject: Subjects.PaymentCreated
  data: {
    id: string
    orderId: string
    stripeId: string
  }
}
