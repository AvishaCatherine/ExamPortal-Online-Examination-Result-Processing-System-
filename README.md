# ExamPortal-Online-Examination-Result-Processing-System-
ExamPortal is a full-stack database-driven web application designed to conduct secure online examinations and process results instantly.  



![Java](https://img.shields.io/badge/Java-17-red?logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.2-green?logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-complete-success)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Overview  

ExamPortal is a full-stack database-driven web application designed to conduct secure online examinations and process results instantly.

The system applies core DBMS concepts such as relational schema design, normalization, and transaction management. It automates the complete examination lifecycle, from registration to evaluation, while ensuring data integrity and security.

---

## Problem Statement  

Traditional examination systems face several challenges:

- Manual handling of exams and results  
- Delayed result processing  
- Risk of cheating and impersonation  
- Lack of audit tracking  
- High operational cost  

---

## Solution  

ExamPortal provides a secure and automated platform that:

- Conducts examinations digitally  
- Evaluates answers instantly  
- Monitors user activity during exams  
- Stores all data in a structured database  

---

## Core Features  

| Module | Description |
|--------|------------|
| Authentication | Secure login with encrypted passwords |
| Proctoring | Webcam monitoring and tab switch detection |
| Exam System | Dynamic MCQ-based exams |
| Timer | Automatic submission on timeout |
| Result Processing | Instant grading and storage |
| Audit Logs | Tracks all violations |


---

## ER Diagram  

![ER Diagram](assets/er-diagram.png)

---

## Database Design  

### Core Tables  

| Table | Description |
|-------|-------------|
| admin | Administrator data |
| student | Student records |
| exam | Exam details |
| question | Questions linked to exams |
| attempt | Tracks exam attempts |
| result | Stores results |
| proctoring_log | Logs violations |

---

### Relationships  

- Admin to Exam (one-to-many)  
- Student to Attempt (one-to-many)  
- Exam to Question (one-to-many)  
- Attempt to Result (one-to-one)  
- Attempt to Proctoring Log (one-to-many)  

---

## System Architecture  

User → Frontend → Backend → Database
↓
Proctoring System

---

## API Endpoints  

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register student |
| POST | /login | Authenticate user |
| POST | /api/exam/start | Start exam |
| POST | /api/exam/submit | Submit exam |
| POST | /api/proctor/warning | Report violation |
| GET | /api/results/my | Get student results |
| GET | /api/exams | Get available exams |
| POST | /api/admin/exam | Create exam |
| DELETE | /api/admin/exam/{id} | Delete exam |

---

## Tech Stack  

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Java, Spring Boot |
| Database | MySQL |
| Security | Spring Security |
| ORM | Hibernate / JPA |

---

## Project Structure  


examportal/
├── database/
├── backend/
│ ├── model/
│ ├── controller/
│ ├── service/
│ ├── repository/
│ └── security/



---

## Feature Status  

| Feature | Status |
|---------|--------|
| Authentication | Implemented |
| Proctoring | Implemented |
| Exam System | Implemented |
| Result Processing | Implemented |
| Admin Dashboard | Implemented |

---

## Future Enhancements  

- AI-based proctoring  
- Mobile compatibility  
- Advanced analytics  
- Cloud deployment  

---

## Team Members  

| Name | Role |
|------|------|
| S. Shri Raksha | Database Design |
| Avisha Catharin A | Backend Development |
| Hariny S | Frontend Development |
| Sudharshini R J | Testing |

---

## Conclusion  

ExamPortal provides a structured and secure solution for conducting online examinations by combining database management principles with real-world application.

---

## License  

This project is licensed under the MIT License.
