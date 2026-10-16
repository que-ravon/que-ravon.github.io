---
title: About
---

I am a third-year undergraduate in Electrical Engineering at IIT Delhi, where I am ranked first in my department. I build low-latency systems in hardware and software, and I work on the algorithms underneath them. In summer 2027 I will join Virtu Financial in Singapore as a Software Engineering Intern.

### How fast can a problem be solved?

Roditty and Vassilevska Williams showed that finding a minimum weight cycle in a graph is classically equivalent to finding a minimum weight triangle. I studied both problems in the quantum query model and found that the equivalence breaks. An exact minimum weight cycle can be found with Õ(n<sup>19/12</sup>) queries and needs at least Ω(n<sup>3/2</sup>), while a minimum weight triangle costs only O(n<sup>9/7</sup> log M). The [preprint](/research/) also gives approximation trade-offs and lower bounds for cycles of fixed length.

### How do you make a system fast and also prove it correct?

I design trading-style data paths in FPGA fabric. My [tick-to-trade engine](/experience/#projects) parses Ethernet, IPv4, UDP and market data as the bytes arrive and decides exactly 5 clock cycles after the last byte, for every frame. That latency is proven for all inputs with SymbiYosys, and so is the property that no trade can fire on a bad frame. In C++ I have written an ITCH 5.0 feed handler and limit order book.

### Can open hardware be trusted?

At the CISPA Helmholtz Center for Information Security I audited 131 open-source RISC-V cores against their own security claims, by reading the RTL, the tests and the commit history of each. I designed the taxonomy for the study and wrote its analysis pipeline. Most cores turned out to have no side-channel defenses and no secure boot.

Before university I competed in olympiads. I reached USACO Platinum with a perfect score, won gold at INPhO and INAO, and was an INMO awardee. I still solve the [Jane Street puzzle](/writing/) every month.
