export interface Client {
    id: string;
    ruc: number;
    companyName: string;
    startId: string;
    password: string;
    contributorType: string;
    regime: string;
    responsiblePersonName: string;
    phoneNumber1: number;
    phoneNumber2: number;
    email1: number;
    email2: number;
    fiscalAddress: string;
    economicActivity1: string;
    economicActivity2: string;
    economicActivity3: string;
    lastDigit?: number;
}