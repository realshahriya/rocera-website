---
title: "Orbis — Cloud-Native SaaS Platform"
description: "Scalable multi-tenant SaaS platform built for a healthcare startup. HIPAA-compliant, with real-time collaboration, role-based access, and white-label support."
image: "/portfolio/orbis.jpg"
tags: ["Next.js", "TypeScript", "PostgreSQL", "Kubernetes", "Terraform", "AWS", "Stripe"]
status: "completed"
demo: "https://orbis.demo.rocera.dev"
date: "2024-03-20"
featured: true
---

## Overview

Orbis is a multi-tenant SaaS platform designed for a healthcare technology startup. It handles everything from patient record management to real-time collaboration between care teams.

## Highlights

- **HIPAA Compliance** — End-to-end encryption, audit logs, and access control
- **Multi-tenancy** — Row-level security with PostgreSQL and complete tenant isolation
- **Real-time** — WebSocket-based collaboration with Conflict-free Replicated Data Types (CRDTs)
- **White-label** — Fully customizable branding per tenant

## Infrastructure

Deployed on AWS EKS with Terraform-managed infrastructure, auto-scaling to handle peak loads of 50,000 concurrent users.
