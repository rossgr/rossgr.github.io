---
title: "Comparative Analysis and Implementation of the Aztec Space-Filling Curve for Static Malware Visualisation of Portable Executable Files"
date: 2026-06-12
summary: "Dissertation for undergraduate Cyber Degree focused on applying Space-Filling Curves to Malware visualisations."
authors: "Ross Greenall"
venue: "BSc Coursework — Synoptic Project"
pdf: "/assets/papers/space-filling.pdf"
tags: [research, malware, space-filling-curves]
---

## Abstract

Space-filling curves (SFCs) have been widely adopted in a range of computational applications for a
number of years, particularly in cases where 1D data is mapped into 2D space whilst preserving locality.
In the context of malware analysis, the properties of SFCs provide a useful basis for visualising Portable
Executable (PE) files, allowing for binary structure to be rendered as images for static analysis. This
paper discusses the application of a recently defined SFC, the Aztec curve, as an alternative approach for
visualising PE files. By comparing its behaviour to well-established SFCs, the Hilbert curve and Z-order
curve, the Aztec curve’s performance can be better understood. A visualisation pipeline was developed
to convert benign and malicious PE files into 2D visualisations using byteclasses, with each visualisation
being evaluated using a standard set of quantitative metrics. The results from these metrics showcased
that the Hilbert and Aztec curves both outperformed the Z-order curve in locality preservation. Other
metrics such as Shannon entropy and spatial entropy were utilised but were mostly affected by PE file
structure rather than curve selection. However, in some metrics, the Aztec curve showed promise with
values that were slightly improved over that of the Hilbert and Z-order curves, motivating the need for
further investigation with a more substantial dataset of diverse PE files to confirm the observed trends.

