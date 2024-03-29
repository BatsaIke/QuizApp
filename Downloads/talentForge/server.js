const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB(); 

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/v1/users', require('./routes/api/users'));
app.use('/api/v1/auth', require('./routes/api/auth'));
app.use('/api/v1/profile', require('./routes/api/profile'));
app.use('/api/v1/posts', require('./routes/api/posts'));
app.use('/api/v1/company', require('./routes/api/companyRoute'));
app.use('/api/v1/company/job', require('./routes/api/jobPostRoute'));
app.use('/api/v1/student/job', require('./routes/api/AplyForJobRoute'));




// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
