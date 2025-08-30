export interface FormData {
  fullName: string;
  college: string;
  branch: string;
  year: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface FormErrors {
  fullName?: string;
  college?: string;
  branch?: string;
  year?: string;
  email?: string;
  phone?: string;
  consent?: string;
}
