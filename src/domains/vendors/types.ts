export interface Vendor {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateVendorInput = Pick<Vendor, 'title'>;
export type UpdateVendorInput = Partial<CreateVendorInput>;