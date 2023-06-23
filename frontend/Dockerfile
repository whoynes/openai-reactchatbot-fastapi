# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the frontend dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN yarn build

# Expose the port that the React application listens on
EXPOSE 3000

# Define the command to run your React application
CMD ["yarn", "start"]



