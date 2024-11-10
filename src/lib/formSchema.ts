import validator from "validator";
import { unknown, z } from "zod";

export const AddPropertyFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  typeId: z
    .string()
    .min(1, "Type is required")
    .transform((data: unknown) => Number(data)),
  statusId: z
    .string()
    .min(1, "Status is required")
    .transform((data: unknown) => Number(data)),
  price: z
    .string()
    .min(1, "Location is required")
    .regex(new RegExp("^[0-9]+$"), "Please enter a number")
    .transform((data: unknown) => Number(data)),
  location: z.object({
    streetAddress: z.string().min(1, "Street Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z
      .string()
      .refine(
        (data) => validator.isPostalCode(data, "US"),
        "Enter a valid US zip code",
      ),
    region: z.string().min(1, "Region is required"),
    landmark: z.string(),
  }),
  propertyFeature: z.object({
    bedrooms: z
      .string()
      .regex(new RegExp("^[0-9]+$"), "Please enter a valid bedroom number")
      .transform((data: unknown) => Number(data)),
    bathrooms: z
      .string()
      .regex(new RegExp("^[0-9]+$"), "Please enter a valid bathroom number")
      .transform((data: unknown) => Number(data)),
    parkingSpots: z
      .string()
      .regex(new RegExp("^[0-9]+$"), "Please enter a valid parking spot number")
      .transform((data: unknown) => Number(data)),
    area: z
      .string()
      .regex(new RegExp("^[0-9]+$"), "Please enter a valid area number")
      .transform((data: unknown) => Number(data)),
    hasSwimmingPool: z.boolean(),
    hasGardenYard: z.boolean(),
    hasBalcony: z.boolean(),
  }),
  contact: z.object({
    name: z.string().min(1, "Name is required"),
    phone: z
      .string()
      .refine(validator.isMobilePhone, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
  }),
});
