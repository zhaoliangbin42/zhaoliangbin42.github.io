# Plotly Interactive Shortcode 使用指南

## 📘 快速开始

在任何Markdown文件中，只需一行代码即可创建交互式图表：

```markdown
{{< plotly-interactive 
  func="Math.sin(frequency * x)" 
  param="frequency" 
  paramLabel="频率 ω" 
  paramRange="0.5,1,1.5,2,2.5,3" 
  title="y = sin(ωx)" 
>}}
```

## 🎯 参数说明

| 参数 | 必需 | 默认值 | 说明 | 示例 |
|------|------|--------|------|------|
| `func` | ✅ | - | JavaScript函数表达式 | `Math.sin(frequency * x)` |
| `param` | ❌ | `frequency` | 参数变量名 | `decay`, `amplitude`, `a` |
| `paramLabel` | ❌ | `参数` | 滑块显示的标签 | `频率 ω`, `衰减率 λ` |
| `paramRange` | ❌ | `0.5,1,1.5,2,2.5,3` | 参数取值范围（逗号分隔） | `0.1,0.5,1,2,5` |
| `title` | ❌ | `函数可视化` | 图表标题 | `y = e^(-λx)` |
| `xRange` | ❌ | `4*Math.PI` | X轴范围 | `10`, `2*Math.PI` |
| `yRange` | ❌ | `auto` | Y轴范围 | `-1.2,1.2`, `auto` |
| `defaultIdx` | ❌ | `1` | 默认显示的参数索引 | `0`, `2` |

## 📝 常用示例

### 1. 正弦函数
```markdown
{{< plotly-interactive 
  func="Math.sin(frequency * x)" 
  param="frequency" 
  paramLabel="频率 ω" 
  paramRange="0.5,1,1.5,2,2.5,3" 
  title="y = sin(ωx)" 
  xRange="4*Math.PI"
  yRange="-1.2,1.2"
>}}
```

### 2. 指数衰减
```markdown
{{< plotly-interactive 
  func="Math.exp(-decay * x)" 
  param="decay" 
  paramLabel="衰减率 λ" 
  paramRange="0.1,0.3,0.5,1,1.5,2" 
  title="y = e^(-λx)" 
  xRange="5"
  yRange="0,1.1"
>}}
```

### 3. 高斯函数
```markdown
{{< plotly-interactive 
  func="Math.exp(-(x*x)/(2*sigma*sigma))" 
  param="sigma" 
  paramLabel="标准差 σ" 
  paramRange="0.5,1,1.5,2,3" 
  title="y = e^(-x²/2σ²)" 
  xRange="2*Math.PI"
  yRange="0,1.1"
>}}
```

### 4. 对数函数
```markdown
{{< plotly-interactive 
  func="base * Math.log(x + 1)" 
  param="base" 
  paramLabel="底数系数" 
  paramRange="0.5,1,2,3,5" 
  title="y = a·ln(x+1)" 
  xRange="10"
  yRange="auto"
  defaultIdx="1"
>}}
```

### 5. 组合函数
```markdown
{{< plotly-interactive 
  func="amplitude * Math.sin(x) * Math.exp(-0.1*x)" 
  param="amplitude" 
  paramLabel="振幅 A" 
  paramRange="0.5,1,1.5,2,3" 
  title="y = A·sin(x)·e^(-0.1x)" 
  xRange="4*Math.PI"
  yRange="auto"
>}}
```

## 🔧 进阶技巧

### 多变量函数
虽然shortcode只支持单参数滑块，但你可以在`func`中使用常量：

```markdown
{{< plotly-interactive 
  func="amplitude * Math.sin(2 * x + 0.5)" 
  param="amplitude" 
  paramLabel="振幅 A" 
  paramRange="0.5,1,2,3" 
  title="y = A·sin(2x + 0.5)" 
>}}
```

### 分段函数
使用三元运算符：

```markdown
{{< plotly-interactive 
  func="x < threshold ? x : threshold" 
  param="threshold" 
  paramLabel="阈值" 
  paramRange="1,2,3,4,5" 
  title="y = min(x, threshold)" 
  xRange="10"
>}}
```

### 使用Math函数库
所有JavaScript Math对象方法都可用：

- `Math.sin()`, `Math.cos()`, `Math.tan()`
- `Math.exp()`, `Math.log()`, `Math.log10()`
- `Math.sqrt()`, `Math.pow(x, 2)`
- `Math.abs()`, `Math.floor()`, `Math.ceil()`
- `Math.PI`, `Math.E`

## 🎨 样式定制

Shortcode已内置与你的主题匹配的样式：
- 主题色：`#ad5389` (渐变紫)
- 标题色：`#3c1053` (深紫)
- 网格：`#e8e8e8` (浅灰)

## ⚡ 性能提示

1. **参数数量**：建议5-8个参数值，太多会影响性能
2. **数据点**：默认500个点，适合大多数场景
3. **X范围**：根据函数特性选择合适范围，避免过大

## 🐛 常见问题

**Q: 图表不显示？**  
A: 检查`func`语法是否正确，必须是有效的JavaScript表达式

**Q: 滑块无效？**  
A: 确保`param`变量名与`func`中使用的一致

**Q: 需要Python代码？**  
A: 将JavaScript函数转换：
- `Math.sin()` → `np.sin()`
- `Math.exp()` → `np.exp()`
- `x * x` → `x**2`

## 📦 Python等效模板

```python
import numpy as np
import plotly.graph_objects as go

def create_interactive_plot(func, param_name, param_values, title):
    x = np.linspace(0, 4*np.pi, 500)
    fig = go.Figure()
    
    for param_val in param_values:
        # 使用字典传递参数
        y = eval(func, {'x': x, param_name: param_val, 'np': np})
        
        fig.add_trace(go.Scatter(
            x=x, y=y,
            mode='lines',
            line=dict(color='#ad5389', width=3),
            name=f'{param_name} = {param_val}',
            visible=(param_val == param_values[1])
        ))
    
    # ... 添加滑块等配置
    fig.show()

# 使用示例
create_interactive_plot(
    func='np.sin(frequency * x)',
    param_name='frequency',
    param_values=[0.5, 1, 1.5, 2, 2.5, 3],
    title='y = sin(ωx)'
)
```
