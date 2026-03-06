# VVR Rice Contact Form Backend

This is a simple Node.js/Express server that handles contact form submissions from the VVR Rice website and stores them in a JSON file.

## Features

- ✅ Handles contact form submissions via POST request
- ✅ Validates required fields (name, email, subject, message)
- ✅ Stores submissions in `contact-submissions.json`
- ✅ Includes timestamp and formatted date (Indian timezone)
- ✅ CORS enabled for local development
- ✅ Admin endpoint to view all submissions

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
# For development (with auto-restart)
npm run dev

# For production
npm start
```

The server will run on `http://localhost:3001`

### 3. Start the Frontend
In another terminal, go to the website root directory and run:
```bash
npm run dev
```

The website will run on `http://localhost:3000` or `http://localhost:5173`

## API Endpoints

### POST /api/contact
Accepts contact form submissions with the following JSON structure:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 12345 67890",
  "subject": "bulk-order",
  "message": "I'm interested in bulk orders..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "submissionId": "1696780800000"
}
```

### GET /api/contact
Returns all contact form submissions (for admin use):
```json
{
  "success": true,
  "count": 5,
  "submissions": [...]
}
```

### GET /api/health
Health check endpoint:
```json
{
  "success": true,
  "message": "VVR Rice Contact Form Server is running",
  "timestamp": "2024-10-08T14:20:00.000Z"
}
```

## Data Storage

Form submissions are stored in `contact-submissions.json` with the following structure:

```json
[
  {
    "id": "1696780800000",
    "name": "John Doe",
    "email": "john@example.com", 
    "phone": "+91 12345 67890",
    "subject": "bulk-order",
    "message": "I'm interested in bulk orders...",
    "timestamp": "2024-10-08T14:20:00.000Z",
    "dateSubmitted": "8 October 2024, 07:50 PM"
  }
]
```

## Security Notes

- The server validates required fields before saving
- Email addresses are normalized to lowercase
- Input is trimmed to remove extra whitespace
- File operations are handled asynchronously with proper error handling

## Admin Access

To view all submissions, you can:

1. **Via API**: Visit `http://localhost:3001/api/contact` in your browser
2. **Via File**: Open `contact-submissions.json` in any text editor
3. **Via Command Line**: `cat contact-submissions.json` (on macOS/Linux) or `type contact-submissions.json` (on Windows)

## Production Deployment

For production deployment:

1. Set the `PORT` environment variable
2. Update CORS origins in `server.js` to your production domain
3. Consider using a proper database instead of JSON file storage
4. Add authentication for the admin endpoints
5. Set up proper logging and monitoring

## Troubleshooting

**Server won't start:**
- Make sure port 3001 is not in use by another application
- Check that Node.js is installed: `node --version`

**Form submissions failing:**
- Ensure both frontend (port 3000/5173) and backend (port 3001) are running
- Check browser console for error messages
- Verify the API endpoint URL in the Contact component

**Can't see submissions:**
- Check that `contact-submissions.json` exists in the server directory
- Verify file permissions allow read/write access