"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectGroup,
} from "@/components/ui/select";
import { SendIcon } from "./icons";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            subject: formData.get("subject"),
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        setLoading(false);

        alert(res.ok ? "Message sent!" : "Failed to send message");
    }

    return (
        <>
            <h2 className="text-xl text-txt font-bold mb-5">Contact Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2">

                <div className="flex flex-col gap-4 sm:row-span-2">
                    {/* Subject */}
                    <div className="flex flex-col gap-2 w-full static">
                        <label htmlFor="subject" className="text-txt text-sm font-semibold relative top-3.75 ml-[7px] px-[3px] bg-overlay w-fit">Subject</label>
                        <Select name="subject" required>
                            <SelectTrigger className="w-full border-txt px-[10px] py-[11px] text-sm bg-overlay border-1 rounded-[5px] w-[210px] placeholder:text-black/25 font-inherit">
                                <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent className="bg-overlay">
                                <SelectGroup>
                                    <SelectLabel>Subjects</SelectLabel>
                                    <SelectItem value="Project Inquiry">
                                        Project Inquiry
                                    </SelectItem>
                                    <SelectItem value="Collaboration">
                                        Collaboration
                                    </SelectItem>
                                    <SelectItem value="General">
                                        General
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <Input label="Name" name="name" placeholder="Your name" required/>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <Input label="Email" name="email" type="email" placeholder="you@example.com" required/>
                    </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 sm:row-span-2">
                    <Textarea className="h-full" label="Message" name="message" rows={6} placeholder="Your message..." required/>
                </div>

                <div className="sm:col-span-2 flex flex-row justify-end items-center h-fit">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex flex-row items-center gap-1 rounded-full border px-4 py-2 cursor-pointer border border-accent text-accent shadow-sm transition hover:opacity-80 hover:transform-[scale(1.01)_translateY(-2px)]"
                    >
                        <p className="text-lg font-bold tracking-wider uppercase">{loading ? "Sending..." : "Send"}</p>
                        <SendIcon className="fill-accent w-[24px] h-[24px]" />
                    </button>
                </div>
            </form>
        </>
    );
}