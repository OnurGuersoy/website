---
title: "Neural Drum Transcription"
description: "AI-powered automatic drum transcription system that converts audio recordings into MIDI notation using deep learning."
problem: "Manual drum transcription is time-consuming and requires expert musical knowledge. Existing tools lack accuracy for complex polyrhythmic patterns."
solution: "Built a CNN-based audio analysis pipeline that processes spectrograms to identify and transcribe drum hits with onset detection, velocity estimation, and instrument classification."
techStack: ["Python", "PyTorch", "Librosa", "MIDI", "CNN", "Audio Processing", "NumPy", "Scikit-learn"]
github: "https://github.com/OnurGuersoy"
isFeatured: true
---

## Overview
Bridging my two worlds — using deep learning to solve a real problem in music production.

## Technical Approach
- Mel spectrogram feature extraction using Librosa
- Custom CNN architecture for multi-instrument drum detection
- Onset detection with adaptive thresholding
- MIDI output generation with velocity mapping
