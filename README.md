# Used Car Price Prediction

This project aims to create an AI program that accurately predicts the price of a used car based on its features. This is targeted at potential buyers in the used car market who may lack knowledge about the true value of a vehicle. By using machine learning techniques, we aim to create a more trustworthy environment in the Saudi car market.

The technologies used in this project include ReactJS for the user interface, Node.js for database communication, and FastAPI for sending car features to the AI model and retrieving the predicted price.

## Project Structure

- `client/`: Contains the ReactJS frontend application.
- `api/`: Contains the FastAPI backend application.
- `server/`: Contains the Node.js server for database communication.

## Data

The data used for this project was extracted from syarash.com using web scraping techniques.

## Prerequisites

- Python 3.7+
- Node.js
- React.js
- FastAPI
- Docker (optional)

## Installation

### FastAPI

1. Install Python and pip if not installed.
2. Install FastAPI and Uvicorn:

    ```bash
    pip install fastapi uvicorn
    ```

3. Navigate to the `api/` directory, and run the following command to start the FastAPI server:

    ```bash
    uvicorn main:app --reload
    ```

### Node.js

1. Install Node.js and npm if not installed.
2. Navigate to the `server/` directory and install the dependencies:

    ```bash
    npm install
    ```

3. Run the node server:

    ```bash
    node server.js
    ```

### React.js

1. Install Node.js and npm if not installed.
2. Navigate to the `client/` directory and install the dependencies:

    ```bash
    npm install
    ```

3. Start the React app:

    ```bash
    npm start
    ```

## Docker

If you have Docker installed, you can use it to containerize the applications. This is optional and not required to run the project.

## Model

The machine learning model used in this project is a Random Forest model, a supervised learning method.

## Usage

Once all the servers are running, navigate to `localhost:3000` on your browser to access the web interface. There, you can input the car details and get the predicted price.

## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.
