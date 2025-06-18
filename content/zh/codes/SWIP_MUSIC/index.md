---
title: "Passive Sensing for Multiple Vehicles in Bi-static ISAC Systems"
date: 2025-06-18
image: "index.assets/banner.png"
author: "Liangbin"
summary: "Simulation for paper \"Passive Sensing for Multiple Vehicles in Bi-static ISAC Systems\", accepted by VTC-2025 Spring"
stars: 0
updated_date: 2025-06-18
paper_url: ""
github_url: "https://github.com/zhaoliangbin42/VTC2025-SWIP-MUSIC"

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![MATLAB](https://img.shields.io/badge/MATLAB-2025a-blue.svg)](https://www.mathworks.com/) [![VTC 2025](https://img.shields.io/badge/VTC-2025-orange.svg)](https://vtc2025-spring.ieee-vtc.org/)

## Introduction

This repository provides a demonstrative implementation of the algorithms presented in the paper **"Passive Sensing for Multiple Vehicles in Bi-static ISAC Systems"** accepted by VTC 2025. The code simulates a bi-static Integrated Sensing and Communication (ISAC) system for passive sensing of multiple vehicles.

Key features of this implementation include:
1. **FBS (Forward-Backward Smoothing) algorithm** for snapshot augmentation.
2. **SWIP-MUSIC algorithm** combining periodogram and MUSIC methods for robust time offset estimation.
3. **Joint Doppler-delay estimation** using periodogram-based algorithms for comprehensive vehicle parameter recovery.
4. **Comprehensive visualization** of estimation results and algorithm performance.


## Quick Start

Simply run the `main.m`.

All parameters are configured in `params.m` and will be loaded automatically.

## Repository Structure

```txt
├── main.m                      % Main simulation script
├── params.m                    % System parameters configuration
├── Funcs/                      % Algorithm implementations
│   ├── Gen_delays_with_gap.m   % Generate delays with minimum separation
│   ├── Gen_received_signal.m   % Signal generation with TO/CFO
│   ├── SWIP_MUSIC.m           % SWIP-MUSIC algorithm implementation
│   └── Periodogram_DD.m       % Joint Doppler-delay estimation
├── Presentation-Latex/         % Conference presentation materials
│   ├── VTC-2025-Liangbin.tex  % LaTeX source
│   ├── VTC-2025-Liangbin.pdf  % Compiled presentation
│   └── figures/               % Presentation figures
└── README.md                   % This file
```

## Simulation Results

![SWIP-MUSIC](index.assets/swip-music.svg)

![Periodogram](index.assets/periodogram.svg)

## Presentation Materials

We have also open-sourced our conference presentation materials in the `Presentation-Latex/` directory. The presentation is built using the open-source [mtheme](https://github.com/matze/mtheme) template, and we express our gratitude to the template developers. We have made certain modifications to the original theme and are happy to share our customized version with the community. The source code is available for those who want to quickly get started with similar presentations. 

We have adopted the [Nord theme](https://www.nordtheme.com/) color scheme for an aesthetically pleasing visual experience. 

**Compile**: `xelatex -> xelatex`

If you find it useful, please consider giving us a star ⭐!

## Acknowledgments

- Conference presentation template: [mtheme](https://github.com/matze/mtheme)
- Color scheme inspiration: [Nord theme](https://www.nordtheme.com/)

## Citation

If you use this code in your research, please cite our paper:


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: If you use our code or algorithms in your research, please acknowledge our work by citing the paper and mentioning this repository.