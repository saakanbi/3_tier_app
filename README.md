# 3_tier_app
# 3-Tier Web Application (Frontend + Backend + MongoDB)

This project is a simple 3-tier web application that includes:

- **Frontend**: Static HTML/JS served via Nginx
- **Backend**: Node.js + Express API
- **Database**: MongoDB (Docker container)

## 🚀 How to Run

1. Clone the repo  
2. Run: `docker-compose up --build -d`  
3. Visit `http://localhost:3000` or your EC2 Public IP

## 📁 Project Structure

- `frontend/` - static frontend files
- `backend/` - Express API + MongoDB integration
- `docker-compose.yml` - defines and connects all services

## 🛠 Future Improvements

- Add Prometheus monitoring
- Automate Nginx config with Ansible
- Use Terraform for EC2 provisioning

