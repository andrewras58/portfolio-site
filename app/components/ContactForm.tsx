"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/app/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea";

const schema = z.object({
  name: z.string().max(50).min(1, "Name is required"),
  email: z.string().email().max(100).min(1, "Email is required"),
  message: z.string().max(500).min(1, "Message is required"),
});

type formData = z.infer<typeof schema>;

const ContactForm = () => {

  const form = useForm<formData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (values: formData) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full h-full max-w-3xl p-5 flex flex-col items-center" >
        <FormDescription>
          You can get in touch with me by sending a message below!
        </FormDescription>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer w-full">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
