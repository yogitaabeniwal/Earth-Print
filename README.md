# Earth Print - Carbon Footprint Tracker

Earth Print is a web application that helps you understand and reduce your carbon footprint through personalized insights and actionable pledges.

## 🌱 About

Earth Print calculates your personal carbon footprint based on your lifestyle choices and provides AI-generated, personalized recommendations to help you reduce your environmental impact.

## ✨ Features

- **Carbon Calculator** - Estimate your carbon emissions from energy usage, transportation, and diet
- **Visual Dashboard** - See your footprint broken down into easy-to-understand charts
- **Personalized Pledges** - Get AI-generated sustainability goals tailored to your lifestyle
- **Progress Tracking** - Monitor your reduction efforts and see your impact over time

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yogitaabeniwal/carbon-footprint.git
cd carbon-footprint
```

2. **Install dependencies**
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/carbonfootprint
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

4. **Start the application**
```bash
# Run both frontend and backend
npm run develop

# Or run separately:
# Backend only
npm run server

# Frontend only (from client directory)
npm run client
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 🛠️ Built With

- **Frontend**: React, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: GraphQL
- **Authentication**: JWT, bcrypt
- **Charts**: Chart.js

## 📁 Project Structure

```
carbon-footprint/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
├── server/                 # Node.js backend
│   ├── models/
│   ├── schemas/
│   ├── utils/
│   └── server.js
└── package.json
```

## 🎯 How It Works

1. **Calculate** - Enter your energy usage, travel habits, and dietary choices
2. **Visualize** - See your carbon footprint broken down by category
3. **Personalize** - Receive AI-generated pledges targeting your highest impact areas
4. **Act** - Use the chatbot coach for guidance and track your progress

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.


## 🙏 Acknowledgments

- Emission factors data from reputable environmental research
- Chart.js for data visualization
- React community for excellent documentation and support

---

**Start your sustainability journey today!** Calculate your footprint and discover personalized ways to make a difference. 🌍✨

## 👥 Team

- Uditi Arya
- Yogita Beniwal  
- Antra Chauhan

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

<div align="center">
  
**Made with ❤️ for a greener planet**

</div>