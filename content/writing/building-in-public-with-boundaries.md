---
title: "Building in public without turning a project into a technology checklist"
description: "Why my first serious open-source project starts with a narrow problem, explicit non-goals, and replaceable boundaries."
date: "2026-11-15"
category: "Architecture"
readingTime: "5 min read"
---

I’m starting an open-source project around the reliability and security of AI infrastructure agents. The interesting part is not how many technologies can appear in its architecture diagram. The interesting part is whether it helps someone answer a difficult question:

> Can I trust this agent to investigate my infrastructure without leaking data, exceeding its permissions, or inventing a confident explanation?

That question gives the project direction. It also tells me what **not** to build yet.

## Begin with evidence, not infrastructure

The first version does not need Kafka, Redis, Elasticsearch, a service mesh, or an always-running Kubernetes cluster in AWS. Those may become useful later, but none of them proves that the core evaluation is correct.

The first version needs to do a smaller set of things well:

- Create an isolated Kubernetes failure.
- Allow an agent to investigate it through explicit permissions.
- Capture what the agent inspected and attempted.
- Detect deterministic failures such as exposure of a synthetic secret.
- Evaluate whether conclusions are supported by evidence.
- Produce a report another engineer can reproduce.

## Design change points, not abstractions everywhere

I want the project to support different languages and systems later. That does not require making every class generic today. It requires identifying the few boundaries that are genuinely likely to change: scenarios, target providers, agent adapters, observers, evaluators, and reporters.

Those contracts can use versioned JSON and HTTP so that a future adapter can be written in Python, Go, C#, or Kotlin. The first implementation can still remain a simple Python application.

## Make optional systems truly optional

OpenTelemetry will be the stable observability boundary. A developer should be able to run the baseline with local artifacts only. Later, the same telemetry can flow to Prometheus and Grafana, Elasticsearch and Kibana, OpenSearch, or a commercial platform.

That is different from hiding a mandatory Elasticsearch dependency behind an interface. Optional means the tool remains useful without it.

## What I want to learn

This project is a way to develop practical depth in Kubernetes, distributed-system failures, security boundaries, AI-agent evaluation, and open-source maintenance. It is also an exercise in Staff-level engineering: writing decisions down, explaining trade-offs, controlling scope, and changing direction when evidence requires it.

I will share the useful results and the mistakes. The goal is not to look as if the project was obvious from the beginning. The goal is to make the reasoning inspectable.
