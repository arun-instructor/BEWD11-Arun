# Angular Email API Documentation

## `POST /users`

### Request

##### Body Parameters:
- firstname
- lastname
- username
- email
- password
- password_confirmation

### Response
- Status: 201
- User object returned

## `POST /users/sign_in`

### Request

##### Body Parameters:
- email
- password

### Response
- Status: 201
- User object returned

## `POST /messages`

### Request

##### Headers:
- Authorization

##### Body Parameters:
- email_to
- message_subject
- message_text

### Response
- Status: 201

## `GET /messages`

### Request

##### Headers:
- Authorization

### Response
- Status: 200
- Array of messages

## `GET /messages/:id`

### Request

##### Headers:
- Authorization

### Response
- Status: 200
- Message object

## `GET /messages/sent`

### Request

##### Headers:
- Authorization

### Response
- Status: 200
- Array of messages

## `DELETE /messages/:id`

### Request

##### Headers:
- Authorization

### Response
- Status: 200