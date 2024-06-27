export interface EmployeeData {
  data: {
    id?: string;
    name: string;
    email: string;
    phone: string;
    initial: string;
    color: string;
    hiredDate: string;
    isCalendarVisible: boolean;
    role: string;
  }[];
}
