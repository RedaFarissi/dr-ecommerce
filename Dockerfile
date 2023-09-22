FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /front/

# Run npm update to ensure the package.json and lockfile are up to date
COPY package.json package-lock.json /front/
RUN npm update

# Run the command to update the browserslist database
RUN npm install -g npm@10.1.0
RUN npx browserslist@latest --update-db

# Copy your React project files
COPY public/ /front/public
COPY src/ /front/src

# Install project dependencies
RUN npm install

# Start the React development server
CMD ["npm", "start"]