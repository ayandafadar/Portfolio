'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send, MapPin, Calendar } from 'lucide-react'
import Section from './Section'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!
      )

      alert('Message sent successfully!')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      alert('Failed to send message.')
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <Section id="contact" className="pb-32">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-xl text-neutral-600 dark:text-neutral-400">
          Open to full-time, internship, and freelance opportunities.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-6">
            <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Let&apos;s Connect
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <a
                    href="mailto:technoayan55@gmail.com"
                    className="text-black dark:text-white transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                  >
                    technoayan55@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Location</p>
                  <p className="text-black dark:text-white">JAIPUR, IN</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Availability</p>
                  <p className="text-black dark:text-white">Open for freelance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-4 text-center">
              <p className="text-2xl font-bold text-black dark:text-white">1+</p>
              <p className="text-xs text-neutral-500">Years Exp</p>
            </div>
            <div className="rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-4 text-center">
              <p className="text-2xl font-bold text-black dark:text-white">5+</p>
              <p className="text-xs text-neutral-500">Projects</p>
            </div>
            <div className="rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-4 text-center">
              <p className="text-2xl font-bold text-black dark:text-white">3+</p>
              <p className="text-xs text-neutral-500">Clients</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-neutral-600 dark:text-neutral-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Alex Smith"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-800
                        bg-neutral-100/50 dark:bg-neutral-900/50
                        px-4 py-3 text-black dark:text-white
                        placeholder-neutral-400 dark:placeholder-neutral-600
                        outline-none transition-all duration-300
                        focus:bg-neutral-200/60 dark:focus:bg-neutral-800/70
                        focus:shadow-md"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-600 dark:text-neutral-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="email@address.com"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-800
                        bg-neutral-100/50 dark:bg-neutral-900/50
                        px-4 py-3 text-black dark:text-white
                        placeholder-neutral-400 dark:placeholder-neutral-600
                        outline-none transition-all duration-300
                        focus:bg-neutral-200/60 dark:focus:bg-neutral-800/70
                        focus:shadow-md"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-neutral-600 dark:text-neutral-400">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Project inquiry"
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-800
                        bg-neutral-100/50 dark:bg-neutral-900/50
                        px-4 py-3 text-black dark:text-white
                        placeholder-neutral-400 dark:placeholder-neutral-600
                        outline-none transition-all duration-300
                        focus:bg-neutral-200/60 dark:focus:bg-neutral-800/70
                        focus:shadow-md"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-neutral-600 dark:text-neutral-400">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write a message..."
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-800
                        bg-neutral-100/50 dark:bg-neutral-900/50
                        px-4 py-3 text-black dark:text-white
                        placeholder-neutral-400 dark:placeholder-neutral-600
                        outline-none transition-all duration-300
                        focus:bg-neutral-200/60 dark:focus:bg-neutral-800/70
                        focus:shadow-md"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 px-6 py-3.5 font-medium text-black dark:text-white transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <span className="relative z-10">
              {loading ? 'Sending...' : 'Send Message'}
            </span>
            <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-neutral-300 dark:to-neutral-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </form>
      </div>
    </Section>
  )
}