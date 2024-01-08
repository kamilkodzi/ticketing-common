export enum OrderStatus {
  // When order has been created, but the
  // ticket it is trying to order hos not been reserved
  Created = 'created',

  // The ticket the order is trying to reserve has already
  // been reserved, or when the user has cancelled the order.
  // The order expires before payment
  Canceled = 'cancelled',

  // The order has succesfuly reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // The order has reserved the ticket and the user has
  // provide payment succesfully
  Complete = 'complete',
}
