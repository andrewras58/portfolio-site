"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import z from "zod";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().max(50).min(1, "Name is required"),
  email: z.string().email().max(100).min(1, "Email is required"),
  message: z.string().max(500).min(1, "Message is required"),
  captcha: z.string().min(1, "Captcha is required"),
});
const siteKey = process.env.NEXT_PUBLIC_CAPTCHA as string;
type formData = z.infer<typeof schema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const form = useForm<formData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      captcha: "",
    },
  });

  const onSubmit = async (values: formData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok){
        throw new Error(res.statusText);
      }
      toast.success("Form successfully submitted!")
      setHasSubmitted(true);
    } catch (err) {
      toast.error("Form failed " + err);
    } finally {
      setLoading(false);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold mb-4">Thank you for your message!</h2>
        <p className="text-lg">I will get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full h-full max-w-3xl p-5 flex flex-col items-center"
      >
        <FormDescription className="md:text-2xl text-center">
          You can get in touch by filling out the form below!
        </FormDescription>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="md:text-2xl">Name</FormLabel>
              <FormControl>
                <Input {...field} className="md:text-4xl h-fit"/>
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
              <FormLabel className="md:text-2xl">Email</FormLabel>
              <FormControl>
                <Input {...field} className="md:text-4xl h-fit"/>
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
              <FormLabel className="md:text-2xl">Message</FormLabel>
              <FormControl>
                <Textarea {...field} className="resize-none md:text-4xl md:h-48" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="captcha"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col items-center justify-center">
              <FormControl>
                <ReCAPTCHA
                  sitekey={siteKey}
                  onChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          type="submit"
          className="cursor-pointer w-full md:text-2xl h-fit"
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
