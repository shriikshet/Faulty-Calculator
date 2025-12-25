# ⚡ Faulty Calculator (JavaScript)

A fun and logic-driven calculator built using **HTML, CSS, and JavaScript** — designed to behave *incorrectly* **10% of the time** on purpose.

This project focuses on understanding **conditional logic, randomness, and user interaction**, while presenting it with a clean and eye-catching UI.

---

## 🚀 Features

- Takes **two numbers** as user input  
- Supports basic operations:
  - Addition (+)
  - Subtraction (−)
  - Multiplication (×)
  - Division (÷)
- **10% probability** of performing faulty operations:
  - `+` → `-`
  - `*` → `+`
  - `-` → `/`
  - `/` → `**` (exponentiation)
- Glassmorphism UI with **neon glow effects**
- Responsive and beginner-friendly design

---

## 🧠 How It Works

- A random number is generated using `Math.random()`
- If the value is less than `0.1`, the calculator performs a **faulty operation**
- Otherwise, it performs the **correct calculation**
- The UI clearly indicates whether the result is **Correct** or **Faulty**

---

## 🛠️ Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling (Glassmorphism + Animations)  
- **JavaScript (ES6)** – Logic & Interactivity  

---

## 📂 Project Structure

faulty-calculator/
│
├── index.html
├── style.css
└── script.js

## ▶️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/shriikshet/faulty-calculator.git
Open the folder:

bash
Copy code
cd faulty-calculator
Open index.html in your browser
(or use Live Server in VS Code)
