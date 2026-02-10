# Chitkara Qualifier – REST API

## Endpoints

### GET /health
Returns API health status.

### POST /bfhl
Accepts exactly one of the following keys:
- fibonacci (integer)
- prime (integer array)
- lcm (integer array)
- hcf (integer array)
- AI (string)

## AI Integration
Integrated with Google Gemini API.  
In case of external AI failure, a graceful fallback response is returned.

## Tech Stack
- Node.js
- Express

## Author
Naman Singh
