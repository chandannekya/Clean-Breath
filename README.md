
# Clean Breath



## Overview



**Clean Breath** is a web application designed to help users improve air quality in their surroundings by recommending the best plants to reduce specific air pollutants. The app provides insights into the types of plants that can help mitigate pollutants such as SO2, PM10, NO2, CO, O3, and PM2.5, allowing users to make informed decisions for a healthier environment.


![Screenshot 2024-08-18 165632](https://github.com/user-attachments/assets/7d45c8ec-5cac-43ec-a8d5-5fb2eecc6516)

## Features

![Screenshot 2024-08-18 165647](https://github.com/user-attachments/assets/11144a66-a5ee-48e1-b9cf-efd7172e2126)


- **Track Air Quality**: Monitor real-time air quality data and pollutant concentrations to stay informed about your surroundings.

- **Know Your Plant**: Learn about various plants and their benefits, including air purification and aesthetic appeal.

- **Green Insights**: Explore insightful articles on plant care, benefits, and tips for a greener living space.

- **Find Your Plant**: Discover a wide variety of plants suited to different environments and preferences.



## Technologies Used



- **Frontend**: React, Tailwind CSS, Vite

- **Backend**: Node.js, Express

- **Database**: MongoDB

- **Payment Gateway**: Razorpay



## Installation



### Prerequisites



- Node.js (v16 or higher)

- npm or yarn



### Frontend Setup



1. Clone the repository:

   ```bash

   git clone https://github.com/yourusername/clean-breath.git

   cd clean-breath

   ```



2. Install dependencies:

   ```bash

   npm install

   ```



3. Start the development server:

   ```bash

   npm run dev

   ```



### Backend Setup



1. Navigate to the backend directory (if separate):

   ```bash

   cd server

   ```



2. Install dependencies:

   ```bash

   npm install

   ```



3. Create a `.env` file in the backend directory and add the necessary environment variables:

   ```plaintext

   MONGODBURL=your_mongodb_connection_string

   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```



4. Start the server:

   ```bash

   npm start

   ```



## Configuration



- **Frontend**: Configure environment variables if necessary (e.g., API endpoints).

- **Backend**: Ensure your `.env` file includes the following:

  - `MONGODB_URI` for MongoDB connection

  - `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` for Razorpay

  - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` for Cloudinary (used for uploading and managing plant images)

  - Any other necessary API keys or configuration values



## Usage



- **Frontend**: Open your browser and visit `http://localhost:3000` to access the application.

- **Backend**: Ensure the backend server is running and configured to accept API requests.


## Contributing



1. Fork the repository

2. Create a new branch: `git checkout -b feature-branch`

3. Make your changes

4. Commit your changes: `git commit -am 'Add new feature'`

5. Push to the branch: `git push origin feature-branch`

6. Create a new Pull Request



## License



This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## Contact



For any questions or feedback, please reach out to:



- **Email**: chadnannekya@gmail.com

- **GitHub**: [Chandan Nekya](https://github.com/chandannekya)




