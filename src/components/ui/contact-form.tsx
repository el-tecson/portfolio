"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select"
import { SendIcon } from "./icons"
import Turnstile from "react-turnstile"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState("")

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!token) {
      alert("Please complete the verification")
      setLoading(false)
      return
    }

    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      subject: formData.get("subject"),
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),

      turnstileToken: token,
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setLoading(false)

    alert(res.ok ? "Message sent!" : "Failed to send message")
  }

  return (
    <>
      <h2 className="text-xl text-txt font-bold mb-5">Contact Form</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 overflow-hidden"
      >
        <div className="flex flex-col gap-4 sm:row-span-2">
          {/* Subject */}
          <div className="flex flex-col gap-2 w-full static">
            <label
              id="subject-label"
              htmlFor="subject-select"
              className="text-txt text-sm font-semibold relative top-3.75 ml-[7px] px-[3px] bg-overlay w-fit"
            >
              Subject
            </label>
            <Select name="subject" required>
              <SelectTrigger
                id="subject-select"
                aria-labelledby="subject-label"
                className="w-full border-txt px-[10px] py-[11px] text-sm bg-overlay border-1 rounded-[5px] w-[210px] placeholder:text-black/25 font-inherit"
              >
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent
                className="animate__animated animate__fadeIn bg-overlay rounded-[5px]"
                style={{ animationDuration: "200ms" }}
              >
                <SelectGroup>
                  <SelectLabel>Subjects</SelectLabel>
                  <SelectItem value="Project Inquiry">Project Inquiry</SelectItem>
                  <SelectItem value="Collaboration">Collaboration</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Input
              label="Name"
              name="name"
              placeholder="Your name"
              minLength={2}
              maxLength={100}
              required
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              maxLength={254}
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 sm:row-span-2">
          <Textarea
            className="h-full"
            label="Message"
            name="message"
            rows={6}
            placeholder="Your message..."
            minLength={10}
            maxLength={5000}
            required
          />
        </div>

        <div className="sm:col-span-2 flex flex-col justify-end items-end h-fit sm:flex-row sm:justify-between sm:items-center">
          <Turnstile
            className="w-full min-w-0"
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onVerify={(token) => {
              setToken(token)
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="flex flex-row items-center gap-1 rounded-full border px-4 py-2 cursor-pointer border border-accent text-accent shadow-sm transition hover:opacity-80 active:opacity-80 hover:transform-[scale(1.01)_translateY(-2px)] active:transform-[scale(1.01)_translateY(-2px)]"
          >
            <p className="text-lg font-bold tracking-wider uppercase">
              {loading ? "Sending..." : "Send"}
            </p>
            <SendIcon className="fill-accent w-[24px] h-[24px]" />
          </button>
        </div>
      </form>
    </>
  )
}
