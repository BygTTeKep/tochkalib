export enum RefundStatus {
  WaitingForClientConfirm = 'WaitingForClientConfirm',
  Initiated = 'Initiated',
  WaitingForConfirm = 'WaitingForConfirm',
  Confirmed = 'Confirmed',
  WaitingForAccept = 'WaitingForAccept',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
}
