export interface Reservation {
  id: string;
  customerId: string;
  status: string;
  date: string;
  time: string;
  partySize: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}