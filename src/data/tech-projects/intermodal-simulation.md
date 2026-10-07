---
title: "Discrete-Event Simulation for Intermodal Rail Transshipment"
description: "Master thesis project at EUROGATE — building a simulation environment comparing MILP-based planning with Q-Learning control for rail logistics."
problem: "Intermodal rail transshipment terminals face complex scheduling challenges with multiple competing objectives: minimizing delays, optimizing crane utilization, and reducing container dwell times."
solution: "Developed a discrete-event simulation environment that enables direct comparison between traditional MILP (Mixed Integer Linear Programming) optimization and a Q-Learning reinforcement learning agent for terminal operations planning."
techStack: ["Python", "SimPy", "PyTorch", "Gurobi", "Reinforcement Learning", "Q-Learning", "MILP", "NumPy", "Pandas", "Matplotlib"]
github: "https://github.com/OnurGuersoy"
isFeatured: true
---

## Overview
This master thesis project at EUROGATE GmbH & Co. KGaA explores the intersection of operations research and reinforcement learning for optimizing intermodal rail transshipment operations.

## Approach
- Built a configurable discrete-event simulation using SimPy
- Implemented MILP-based planning as the baseline optimization
- Developed a Q-Learning agent that learns optimal crane scheduling policies
- Compared both approaches across multiple KPIs

## Key Results
The RL agent achieved competitive performance with the MILP solver while offering greater adaptability to real-time disturbances and reduced computational overhead for online decision-making.
