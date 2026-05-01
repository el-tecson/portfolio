## Overview

A structured set of 10 progressively designed Arduino micro-projects focused on building core embedded systems skills such as input handling, sensor processing, state machines, and non-blocking logic design.

This project serves as a foundational training ground for understanding how embedded systems behave under real-world constraints using an Arduino UNO platform.

## The Problem

Many beginners learn Arduino by copying isolated tutorials without understanding the underlying engineering principles behind embedded systems design. This often results in systems that work only under ideal conditions and fail when handling noisy inputs, timing conflicts, or multiple simultaneous events.

Common beginner projects also rely heavily on blocking logic such as `delay()`, making it difficult to scale systems or build responsive behavior. As projects become more complex, issues like unreliable button inputs, inconsistent sensor readings, poor state management, and lack of fault tolerance become increasingly common.

There is often a gap between simple hobby projects and the foundational thinking required for real embedded systems engineering.

## The Solution

This project addresses that gap through a structured collection of 10 progressively designed Arduino micro-projects focused on core embedded systems concepts.

Each micro-project isolates a specific engineering problem and implements a practical solution using clean, modular, and non-blocking logic design. Instead of prioritizing feature-heavy applications, the project emphasizes reliability, responsiveness, and system behavior under realistic constraints.

By progressively covering concepts such as debouncing, state machines, scheduling, hysteresis, signal filtering, and fail-safe logic, the project builds a strong foundation for understanding how embedded systems are designed in real-world environments.

## 🎯 Objective

The goal of this challenge is to develop practical competence in embedded systems programming by building small, focused systems that demonstrate:

- Digital and analog input handling
- Sensor data processing and filtering
- State machine design
- Event-driven programming
- Non-blocking logic implementation
- System reliability and fail-safe behavior

## 🧠 Core Skills Covered

- Button debouncing and input classification
- Multi-state LED control systems
- Software-based task scheduling
- Priority-based interrupt-like logic (software simulation)
- Sensor thresholding and hysteresis
- Signal filtering and noise reduction
- Time-based system control
- Fail-safe and watchdog logic concepts
- Basic embedded diagnostics via serial monitoring

## 🔧 Hardware Used

- Arduino UNO
- LEDs
- Push buttons
- Buzzer
- Potentiometer / analog sensors
- Ball switch
- Basic resistors and breadboard setup

## 📦 Project Structure

Each micro-project is self-contained but builds on concepts from previous ones.

### Micro-Projects Overview

| Micro-Project                               | Documentation                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Button debounce and press classification | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/1-button-debounce/README.md)                 |
| 2. Multi-LED state machine                  | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/2-state-machine/README.md)                   |
| 3. Non-blocking task scheduler              | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/3-task-scheduler/README.md)                  |
| 4. Priority override system                 | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/4-priority-override/README.md)               |
| 5. Buzzer alert patterns (non-blocking)     | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/5-non-blocking-buzzer-alert/README.md)       |
| 6. Analog threshold + hysteresis control    | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/6-analog-threshold-and-hysteresis/README.md) |
| 7. Input smoothing and filtering            | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/7-input-smoothing-noise-filtering/README.md) |
| 8. Traffic light controller simulation      | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/8-traffic-light-controller/README.md)        |
| 9. Fail-safe logic system                   | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/9-fail-safe-logic-simulation/README.md)      |
| 10. Software watchdog simulation            | [View README](https://github.com/eltecson/arduino-embedded-foundations/blob/main/micro-projects/10-software-watchdog/README.md)              |

## 🧩 Design Philosophy

This project prioritizes **engineering thinking over feature complexity**.

Instead of building large applications, each micro-project isolates one concept and implements it in a minimal but functional
