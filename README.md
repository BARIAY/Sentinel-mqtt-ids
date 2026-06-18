#  SENTINEL - MQTT Intrusion Detection System

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.0+-orange.svg)
![Streamlit](https://img.shields.io/badge/Streamlit-App-red.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

##  Project Overview
**SENTINEL** is an advanced Intrusion Detection System (IDS) specifically designed to protect IoT networks utilizing the MQTT protocol. Powered by Deep Learning and Long Short-Term Memory (LSTM) neural networks, SENTINEL analyzes network traffic in real-time to identify and block Denial of Service (DoS) attacks.

This project features a stunning, interactive "Cyberpunk-themed" dashboard built with Streamlit, offering real-time analytics, threat detection, and advanced data visualization.

---

##  Key Features
- **Real-Time Detection:** Rapid anomaly detection (< 100ms) for MQTT network traffic.
- **High Accuracy:** LSTM model achieving > 98% detection accuracy on DoS attacks.
- **Cyberpunk Interface:** An immersive, intuitive dashboard with neon visuals and dynamic components.
- **Interactive Visualizations:** Deep dive into network patterns, feature correlations, and traffic distribution using Plotly.
- **Live Threat Simulation:** Test the system instantly using predefined normal and attack profiles.

---

##  Technologies Used
- **Deep Learning:** LSTM Neural Networks (TensorFlow/Keras)
- **Frontend / Dashboard:** Streamlit
- **Data Visualization:** Plotly
- **Data Processing:** Pandas, NumPy, Scikit-learn, Joblib
- **Protocol:** MQTT (Message Queuing Telemetry Transport)

---

## 📂 Repository Structure
```text
📦 Python_Project_Dos
 ┣ 📂 DOS/                # Main Streamlit application and ML model
 ┃ ┣ 📜 app.py            # Streamlit dashboard entry point
 ┃ ┣ 📜 DOS.ipynb         # Jupyter Notebook with data processing and model training
 ┃ ┣ 📜 lstm_dos_model.h5 # Pre-trained LSTM Neural Network
 ┃ ┣ 📜 scaler.pkl        # Data scaler used during training
 ┃ ┣ 📜 requirements.txt  # Python dependencies
 ┃ ┗ 📂 benign/           # (Additional data or scripts)
 ┣ 📂 Dataset/            # Datasets used for training the model
 ┃ ┗ 📜 dataset_sample.csv
 ┣ 📂 Presentation/       # Demo videos and project reports
 ┃ ┣ 📜 Project Report.pdf
 ┃ ┗ 🎬 Demo_Streamlit.mp4
 ┗ 📂 Bonus/              # Additional IIoT Sentinel demos and documentation
```

---

##  Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/SENTINEL-MQTT-IDS.git
cd SENTINEL-MQTT-IDS/DOS
```

2. **Create a virtual environment (Optional but recommended)**
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the Application**
```bash
streamlit run app.py
```
*The dashboard will automatically open in your default web browser at `http://localhost:8501`.*

---

##  Development Team
This project was developed by a team of passionate cybersecurity and AI enthusiasts:
- **Aya Taftaf**
- **Hajar Bouih**
- **Soukaina Elbaz**
- **Aya Boulifa**
- **Flahi fatima-ez-zahraa**
- **Flahi Sara**
- **Fatima Lachal**
- **Aymane Bari**

---

##  Dashboard Screenshots
<img width="959" height="445" alt="Screenshot 2026-06-18 142339" src="https://github.com/user-attachments/assets/492b621f-9fe7-4a10-bc5d-f87b640cf98c" />
<img width="959" height="443" alt="Screenshot 2026-06-18 142410" src="https://github.com/user-attachments/assets/45b833f7-1b76-4cab-9911-f044c2f4163f" />
<img width="959" height="425" alt="Screenshot 2026-06-18 142433" src="https://github.com/user-attachments/assets/b2e6eb27-15bd-49c8-be02-1467b3af0c81" />
<img width="959" height="448" alt="Screenshot 2026-06-18 142653" src="https://github.com/user-attachments/assets/cdc9cc7f-eec0-45e9-bad0-c1327e4863c9" />



---

##  License
This project is licensed under the MIT License - see the LICENSE file for details.
