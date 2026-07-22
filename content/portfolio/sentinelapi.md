---
title: "SentinelAPI — API Security Gateway"
description: "Zero-trust API gateway with real-time threat detection, rate limiting, and automated incident response. Blocks 99.8% of malicious traffic."
image: "/portfolio/sentinelapi.jpg"
tags: ["Go", "Rust", "Redis", "Kubernetes", "Prometheus", "Grafana", "eBPF"]
status: "in-progress"
github: "https://github.com/rocera-dev/sentinelapi"
date: "2024-11-01"
featured: false
---

## Overview

SentinelAPI is a high-performance API security gateway written in Go, with a Rust-based packet inspection engine using eBPF for kernel-level threat detection.

## Core Capabilities

- **Zero-trust** — Every request authenticated and authorized at the gateway level
- **ML Threat Detection** — Anomaly detection model identifying attack patterns in real-time
- **Rate Limiting** — Token bucket + sliding window algorithms with Redis backing
- **Automated Response** — Threat-triggered firewall rule injection via iptables
