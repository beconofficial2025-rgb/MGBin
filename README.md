![Poster](poster.png)
# MGBin – Monkey Guard Smart Bin  
### Round-2 Smart City IoT & Mechanical Automation System

---

## 🎥 Project Videos

| Purpose | Link |
|--------|------|
| Technical Approach Video | [Technical Explaination](https://drive.google.com/file/d/1JWRlRVdFCfKRHM0KnwjiYrIf2cFDNI4o/view?usp=sharing) |
| Round-2 Enhancement Documentary | [Round 2 Documentary](https://drive.google.com/file/d/1dlNztSUY4iy3TiQ1BruDTWPyfx5UkcB-/view?usp=sharing) |
| Project Overview Video | [Youtube Link](https://www.youtube.com/watch?v=LSa4wyE-eNo&feature=youtu.be) |

---

## 🧠 Vision

MGBin is a hybrid **IoT + mechanical smart waste infrastructure** designed to prevent monkey interference while enabling automated waste segregation and city-wide sanitation intelligence.

---

# 🧩 System Architecture

```text
User
   |
   v
ESP32-CAM Detection Unit
   |
   +-----------+
   |           |
Motorized Flap  Mechanical Gravity Door
   |           |
   v           v
Sensor Array → Auto Segregation System
   |
   v
Cloud IoT Dashboard → Smart City Control Room

```

# ⚙ Working Flow
```text

Approach Detected →Human / Animal Classified →If Human → Flap Opens →Sensors Scan Waste →Auto-Segregation →Bin Status Uploaded → Dashboard Analytics      

```
# 🚨 Problem Statement
### Monkeys and stray animals frequently open dustbins in Indian cities, scattering garbage, spreading diseases and increasing municipal cleaning costs.Traditional bins offer no species-specific access control or automation.

# 💡 Proposed Solution

MGBin introduces a dual-mode intelligent bin:

• IoT Mode — ESP32-CAM opens flap only for humans
• Mechanical Fail-Safe Mode — gravity pivot door blocks animals even without power

This ensures 100% operational reliability.

# 🚀 Round-2 Auto-Segregation Enhancements

- Moisture sensors for wet/dry separation
- Metal & plastic detection sensors
- Liquid waste channeling module
- Organic waste compost generation
- Ultrasonic fill-level monitoring
- GPS tagged Smart City dashboard
- Solar panel & battery backup
---

# 📊 Automation Logic

| Input           | Action             | Output           |
| --------------- | ------------------ | ---------------- |
| Human detected  | Flap opens         | Waste accepted   |
| Animal detected | Flap locked        | Access denied    |
| Power failure   | Gravity door works | Manual mode      |
| Waste scanned   | Sensors classify   | Auto segregation |

# 🛠 Technology Stack

| Layer      | Technology                  |
| ---------- | --------------------------- |
| Controller | ESP32-CAM                   |
| Sensors    | Moisture, Metal, Ultrasonic |
| Motors     | Gear Motor                  |
| Cloud      | Firebase                    |
| Dashboard  | Smart City Admin Panel      |
| Power      | Solar + Battery             |
| AI model   | Waste Recognition           |

# 📈 Scalability, Growth & Failure Handling

MGBin is designed as a **Smart City–scale sanitation infrastructure**, not a single smart bin.

---
## 🏙 Handling Large-Scale City Deployment

| Challenge | MGBin Solution |
|---------|----------------|
| Thousands of bins in a city | Cloud-based bin registry |
| High waste load | Auto-segregation prevents overload |
| Area-wise waste analysis | GPS-tagged bin data |
| Peak tourist seasons | Dynamic collection scheduling |
| Multiple cities | Multi-tenant dashboard architecture |
---
## ⚠️ Failure Handling & Reliability

| Failure Scenario | Protection Mechanism |
|----------------|----------------------|
| Power failure | Mechanical gravity mode |
| Sensor failure | Manual gravity operation |
| Network failure | Local storage + delayed sync |
| Full bin | Ultrasonic fill-level alerts |
| Motor failure | Manual gravity fallback |

---

## 📊 Growth in Waste Segregation Efficiency

| Metric | Growth Strategy |
|------|----------------|
| Segregation accuracy | AI model upgrades |
| Compost generation | Local compost hubs |
| Plastic recovery | Municipal recycling pipelines |
| Wet waste volume | Fertilizer generation |

---

## 🌱 Environmental Sustainability

- Reduces landfill load  
- Increases recycling recovery  
- Supports compost-based green spaces  
- Smart City environmental compliance  

---

MGBin can scale from **parks → city zones → full municipal networks** with full fault tolerance.

# 📱 Smart Bin Monitoring App (Prototype)
### [Demo](https://beacon-three-omega.vercel.app/)
Along with the physical MGBin unit, we have developed a **mobile/web monitoring prototype** that provides real-time visibility into bin status and waste levels.

### App Capabilities

| Feature | Purpose |
|-------|--------|
| Live bin fill-level tracking | Prevents overflow |
| Auto alerts & notifications | Notifies collection teams |
| GPS based bin mapping | Area-wise tracking |
| Waste category monitoring | Segregation insights |
| Dashboard analytics | City sanitation planning |

### Alert Workflow

```text
Bin Fill Level Detected →
Threshold Crossed →
Alert Sent to App →
Municipal Team Notified →
Collection Scheduled
```

# 🌍 Impact

- Prevents monkey garbage scattering
- Reduces sanitation cost
- Enables hygienic waste management
- Smart City and Swachh Bharat compliant

## 👥 Team

| Name | Role |
|-----|-----|
| Mayank Gangawar | Project Lead & Designer |
| Manthan Makhija | Coder |
| Sachin Shakya | Circuit Designer |
| Shobit Rajpoot |  Mechanical Design Engineer |
