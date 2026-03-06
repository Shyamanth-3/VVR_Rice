# VVR Rice Website Development Start Script
# This script starts both the frontend and backend servers

Write-Host "🌾 Starting VVR Rice Website Development Environment..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Start backend server in background
Write-Host "🚀 Starting backend server (port 3001)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\server'; node server.js" -WindowStyle Minimized

# Wait a moment for backend to start
Start-Sleep -Seconds 3

# Start frontend development server
Write-Host "🎨 Starting frontend development server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "📝 Contact form submissions will be saved to: server\contact-submissions.json" -ForegroundColor Cyan
Write-Host "🔍 View submissions at: http://localhost:3001/api/contact" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the frontend server" -ForegroundColor Magenta
Write-Host "To stop backend server, close the PowerShell window that opened" -ForegroundColor Magenta
Write-Host ""

# Start frontend server
npm run dev