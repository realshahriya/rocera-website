'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  budget: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export interface ContactResult {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)
  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return true
  }
  if (limit.count >= 3) return false
  limit.count++
  return true
}

export async function submitContact(
  formData: ContactFormData,
  ip: string = 'unknown'
): Promise<ContactResult> {
  // Rate limit check
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: 'Too many requests. Please try again in a minute.',
    }
  }

  // Validate input
  const parsed = contactSchema.safeParse(formData)
  if (!parsed.success) {
    return {
      success: false,
      message: 'Please check your form inputs.',
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  const { name, email, subject, message, budget } = parsed.data

  // Log to console (replace with email service in production)
  console.log('📬 New Contact Form Submission:')
  console.log(`  Name: ${name}`)
  console.log(`  Email: ${email}`)
  console.log(`  Subject: ${subject}`)
  console.log(`  Budget: ${budget ?? 'Not specified'}`)
  console.log(`  Message: ${message}`)

  // Discord webhook (optional — set DISCORD_WEBHOOK_URL in .env)
  const discordWebhook = process.env.DISCORD_WEBHOOK_URL
  if (discordWebhook) {
    try {
      await fetch(discordWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [
            {
              title: '📬 New Contact Form Submission',
              color: 0x6366f1,
              fields: [
                { name: 'Name', value: name, inline: true },
                { name: 'Email', value: email, inline: true },
                { name: 'Budget', value: budget ?? 'Not specified', inline: true },
                { name: 'Subject', value: subject },
                { name: 'Message', value: message },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      })
    } catch (err) {
      console.error('Discord webhook failed:', err)
    }
  }

  return {
    success: true,
    message: "Message received! We'll get back to you within 24 hours.",
  }
}
