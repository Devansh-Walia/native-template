import { z } from "zod";
const BYTE = 24;
const AVATAR_MAX_SIZE = 5 * BYTE; // 5mb in bytes

const Email = z.string().email({ message: "Invalid email address" });
const Password = z.string().trim().min(8, { message: "Password should be at least 8 characters" });
const UserFullName = z
  .string()
  .trim()
  .min(2, { message: "Name must be 2 or more characters long" })
  .max(20, { message: "Name should not exceed 20 characters" });

const SignIn = z.object({
  email: Email,
  password: z.string(),
});

const ForgotPassword = z.object({
  email: Email,
});

const SignUp = z
  .object({
    email: Email,
    password: Password,
    confirmPassword: Password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const NewUserDetails = z.object({
  name: UserFullName,
  bio: z
    .string()
    .trim()
    .min(8, { message: "Bio should be at least 8 characters" })
    .max(100, { message: "Bio should not exceed 80 characters" }),
});

export { AVATAR_MAX_SIZE, Email, ForgotPassword, NewUserDetails, Password, SignIn, SignUp };
