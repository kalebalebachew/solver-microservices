# Solver Microservices Project

A simple Question-and-Answer api built with **NestJS**, designed to practice

- **Microservices** with a modular architecture.
- **RabbitMQ** for message-based communication.

## Architecture

- **API Gateway**: Handles HTTP requests and routes them to the appropriate service.
- **Questions Service**: Manages question creation and retrieval.
- **Answers Service**: Handles answers linked to specific questions.
- **RabbitMQ**: Enables message-based communication between services.
- **SQLite**: Each service maintains its own isolated database.
  
## How It Works

1. **API Gateway**:
   - Receives client requests and sends messages to RabbitMQ queues.
2. **Services**:
   - Consume messages from queues and process them (save to the database).
3. **RabbitMQ**:
   - Acts as a broker for asynchronous communication.
## Setup
1. Start services:
   ```bash
   docker-compose up
