"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  name: z.string().max(50).min(1, "Name is required"),
  email: z.string().email().max(100).min(1, "Email is required"),
  message: z.string().max(500).min(1, "Message is required"),
});

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // call to the api
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" placeholder="Name" />
      {errors.name && <div>{errors.name.message}</div>}
      <input {...register("email")} type="text" placeholder="Email" />
      {errors.email && <div>{errors.email.message}</div>}
      <textarea {...register("message")} placeholder="Message" />
      {errors.message && <div>{errors.message.message}</div>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default ContactForm;
