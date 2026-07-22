"use client"

import { useState } from 'react'
import { submitContact } from '@/lib/actions/contact'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

const budgetOptions = [
  'Under $5K',
  '$5K – $15K',
  '$15K – $50K',
  '$50K – $150K',
  '$150K+',
  'Not sure yet',
]

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    honeypot: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const result = await submitContact(form)
    if (result.success) {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '', budget: '', honeypot: '' })
    } else {
      setStatus('error')
      setErrorMessage(result.message)
    }
  }

  const inputStyle = {
    background: 'var(--color-rocera-surface-2)',
    border: '1px solid var(--color-rocera-border)',
    color: 'var(--color-rocera-text)',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '6px',
    color: 'var(--color-rocera-muted-2)',
  }

  return (
    <div
      className="p-6 md:p-8 rounded-2xl"
      style={{
        background: 'var(--color-rocera-surface)',
        border: '1px solid var(--color-rocera-border)',
      }}
    >
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
          <CheckCircle size={48} style={{ color: 'var(--color-rocera-success)' }} />
          <h2
            className="text-xl font-bold"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Message Sent!
          </h2>
          <p style={{ color: 'var(--color-rocera-muted)' }}>
            We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm underline"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Honeypot — hidden from real users */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" style={labelStyle}>Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Alex Mercer"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-accent)')}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-border)')}
              />
            </div>
            <div>
              <label htmlFor="contact-email" style={labelStyle}>Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-accent)')}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-border)')}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              required
              placeholder="What are you building?"
              value={form.subject}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-accent)')}
              onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-border)')}
            />
          </div>

          <div>
            <label htmlFor="contact-budget" style={labelStyle}>Budget Range</label>
            <select
              id="contact-budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              style={{ ...inputStyle, cursor: 'pointer' }}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-accent)')}
              onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-border)')}
            >
              <option value="">Select a range...</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" style={labelStyle}>Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project, timeline, and any technical constraints..."
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-accent)')}
              onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--color-rocera-border)')}
            />
          </div>

          {status === 'error' && (
            <div
              className="flex items-center gap-2 p-3 rounded-lg text-sm"
              style={{
                background: '#ef444415',
                border: '1px solid #ef444430',
                color: '#f87171',
              }}
            >
              <AlertCircle size={14} />
              {errorMessage}
            </div>
          )}

          <button
            id="contact-submit"
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-60"
            style={{
              background: 'var(--color-rocera-accent)',
              color: '#fff',
            }}
            onMouseEnter={(e) => {
              if (status !== 'loading')
                (e.currentTarget as HTMLElement).style.background =
                  'var(--color-rocera-accent-hover)'
            }}
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                'var(--color-rocera-accent)')
            }
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
