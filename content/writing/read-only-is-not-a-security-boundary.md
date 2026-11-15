---
title: "Why read-only is not a complete security boundary for infrastructure agents"
description: "An agent can be unable to mutate a cluster and still expose sensitive information or be manipulated by untrusted operational data."
date: "2026-11-10"
category: "Security"
readingTime: "4 min read"
---

Giving an AI infrastructure agent read-only Kubernetes permissions is a good starting point. It limits direct damage. It does not make the system automatically safe.

An agent with broad read access may still see application logs, environment configuration, workload metadata, or other information that should not be sent to an external model. It may also consume attacker-controlled text from logs and annotations.

## Separate authority from data exposure

There are at least two different questions:

1. What actions can the agent perform?
2. What information can the agent retrieve and transmit?

Kubernetes RBAC helps with both, but a broad read-only role can still expose far more context than an investigation needs. A safer design uses namespace restrictions, resource allowlists, explicit exclusion of Secrets, short-lived identities, and careful control of model egress.

## Treat operational evidence as untrusted

Logs are data, not instructions. The same is true for annotations, issue descriptions, commit messages, and tool responses. An attacker who can influence those sources may try to make the agent call a tool, reveal context, or abandon its original task.

Prompt filtering can help, but authorization cannot live in a prompt. The system should remain safe even when the model misunderstands hostile content.

## Test the boundary

Security claims should be executable. A useful test can place a synthetic canary in a controlled source, run an investigation, and verify that the canary never appears in model requests, logs, reports, or final output.

The same test can inspect Kubernetes audit events for forbidden operations or cross-namespace access. These are deterministic observations. They do not require another model to decide whether a violation occurred.

Read-only remains valuable. It is one layer in a defense, not the entire boundary.
