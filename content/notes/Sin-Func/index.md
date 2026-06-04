---
title: "Sin Function"
meta_title: ""
description: ""
date: 2025-12-01
image: "index.assets/banner.png"
categories: ["Reflections"]
author: "Liangbin"
tags: ["Reflections"]
summary: ""
math: false
draft: true
---

## 交互式正弦函数可视化

{{< plotly-interactive 
  func="Math.sin(frequency * x)" 
  param="frequency" 
  paramLabel="频率 ω" 
  paramRange="0.5,1,1.5,2,2.5,3" 
  title="y = sin(ωx)" 
  xRange="4*Math.PI"
  yRange="-1.2,1.2"
  defaultIdx="1"
>}}

---

## 更多示例

### 余弦函数
{{< plotly-interactive 
  func="Math.cos(frequency * x)" 
  param="frequency" 
  paramLabel="频率 ω" 
  paramRange="0.5,1,2,3" 
  title="y = cos(ωx)" 
  xRange="4*Math.PI"
  yRange="-1.2,1.2"
>}}

### 指数衰减
{{< plotly-interactive 
  func="Math.exp(-decay * x)" 
  param="decay" 
  paramLabel="衰减率 λ" 
  paramRange="0.1,0.3,0.5,1,1.5,2" 
  title="y = e^(-λx)" 
  xRange="5"
  yRange="0,1.1"
>}}

### 抛物线
{{< plotly-interactive 
  func="a * x * x" 
  param="a" 
  paramLabel="系数 a" 
  paramRange="0.1,0.5,1,2,3" 
  title="y = ax²" 
  xRange="2*Math.PI"
  yRange="auto"
>}}

### Sinc 函数
{{< plotly-interactive 
  func="x === 0 ? 1 : Math.sin(scale * x) / (scale * x)" 
  param="scale" 
  paramLabel="缩放 s" 
  paramRange="0.5,1,2,3,5" 
  title="y = sinc(sx) = sin(sx)/(sx)" 
  xRange="4*Math.PI"
  yRange="-0.3,1.1"
  defaultIdx="1"
>}}

---

## Python等效代码

```python
import numpy as np
import plotly.graph_objects as go

x = np.linspace(0, 4*np.pi, 500)

fig = go.Figure()

# 添加不同频率的曲线
for freq in [0.5, 1, 1.5, 2, 2.5, 3]:
    fig.add_trace(go.Scatter(
        x=x,
        y=np.sin(freq * x),
        mode='lines',
        line=dict(color='#ad5389', width=3),
        name=f'ω = {freq}',
        visible=(freq == 1)  # 默认显示ω=1
    ))

# 添加滑块
steps = []
for i, freq in enumerate([0.5, 1, 1.5, 2, 2.5, 3]):
    step = dict(
        method="update",
        args=[
            {"visible": [j == i for j in range(6)]},
            {"title": f"<b>y = sin({freq}x)</b>"}
        ],
        label=str(freq)
    )
    steps.append(step)

sliders = [dict(
    active=1,
    currentvalue={"prefix": "频率 ω = "},
    pad={"t": 50},
    steps=steps
)]

fig.update_layout(
    sliders=sliders,
    title="<b>y = sin(ωx)</b>",
    xaxis_title="x",
    yaxis_title="y",
    height=500
)

fig.show()
```