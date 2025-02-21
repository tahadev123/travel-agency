import { object, string } from "yup";

const AccountInformationSchema = object({
  email: string().email().required("لطفا ایمیل را وارد کنید"),
});

const PersonalInformationSchema = object({
  firstName: string().required("لطفا نام خود را وارد کنید"),
  lastName: string().required("لطفا نام خانوادگی خود را وارد کنید"),
  nationalCode: string("لطفا عدد وارد کنید").min(10, "کد ملی باید حداقل ١٠ رقم باشد"),
  birthDate: string(),
  gender: string(),
});

const bankAccountSchema = object({
  shaba_code: string(),
  debitCard_code: string().length(16, "شماره کارت باید ۱۶ رقم باشد"),
  accountIdentifier: string().min(8, "باید حداقل ۸ کاراکتر باشد").max(16),
});

export {
  AccountInformationSchema,
  PersonalInformationSchema,
  bankAccountSchema,
};
