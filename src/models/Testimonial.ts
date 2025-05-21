import { model, models, Schema } from "mongoose";

const TestimonialSchema = new Schema(
  {
    fullname: String,
    description: String,
    experience: String,
  },
  {
    collection: "testimonial",
  }
);

export const Testimonial =
  models.Testimonial || model("Testimonial", TestimonialSchema);
