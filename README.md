# 🧠 FaceEntry – Smart Face Recognition Entry System

Welcome to **FaceEntry** — A robust face recognition entry system leveraging **AWS Lambda**, **Amazon Rekognition**, **S3**, **DynamoDB**, **API Gateway**, and a **React** frontend.  
This solution securely **authenticates** employees and visitors by comparing uploaded images with **registere**d data using **Rekognition’s** advanced **facial analysis.** Authenticated users are granted _access_, while unauthorized attempts are _rejected_ in real-time.


---

## 🛠️ Tech Stack
- **Frontend:** React ⚛️
- **Backend:** AWS Lambda (Python 🐍)
- **Services:** Amazon Rekognition, S3, API Gateway, DynamoDB

---

## 🧩 Architecture Overview

![Screenshot (156)](https://github.com/user-attachments/assets/b4f1bad7-9378-487a-bb15-35ef9b48b16f) 

### 🔁 Flow:
1. 📸 **Employee/Visitor** uploads image from React frontend.
2. 🪪 **Employee images** stored in `S3: Employee--Pics`.
3. 🔐 **Registration Lambda** processes employee data, stores metadata in DynamoDB.
4. 🎯 **Visitor images** stored in `S3: Visitor--Pics`.
5. 🧠 **Amazon Rekognition** compares visitor image with stored employee images.
6. ✅/❌ **Auth Lambda** returns authentication result via API Gateway.

---

## 📚 AWS Services Used

- **S3**: Store employee and visitor images  
- **Lambda**: Handles Registration & Authentication logic  
- **DynamoDB**: Stores employee metadata  
- **Amazon Rekognition**: Performs face matching and verification  
- **API Gateway**: Exposes Lambda functions to the React frontend

---


## 🚀 Features
- 🔐 Face-based authentication
- ☁️ Serverless architecture (AWS Lambda)
- 🧾 Real-time logs via CloudWatch
- 📁 Uses two separate S3 buckets for Employees and Visitors
- 🌗 Optional: Dark mode supported (via frontend switch)

---

## 📦 Setup Instructions
1. Clone repo and install dependencies
   ```bash
   git clone https://github.com/yourusername/Face-Rekognition-App.git
   cd Face-Rekognition-App
   npm install
2. Configure your AWS credentials.
3. Deploy Lambdas and API Gateway via AWS Console or CLI.
4. Run React frontend:
   
     ```bash
          npm start
     ```



## 📸 Screenshots

Demonstrating face authentication results and theme modes.

| Light Mode – Access Granted | Light Mode – Access Denied |
|-----------------------------|-----------------------------|
| ![LightModeT](https://github.com/user-attachments/assets/1f52fa7d-627f-4a3d-b338-5c9cb64e6cdb)    |![LightModeF](https://github.com/user-attachments/assets/fc8a7b7c-8612-4d54-bdb0-2e4def21c66a)|


| Dark Mode – Access Granted | Dark Mode – Access Denied |
|----------------------------|----------------------------|
| ![DarkModeT](https://github.com/user-attachments/assets/018a1986-6b11-4b7e-a0ca-ba05dc03b9d9)     | ![DarkModeF](https://github.com/user-attachments/assets/2ef77429-825b-4121-aa73-f9644054b71c)|

## 🙋‍♂️ Author

**Vaishali Joshi**  
