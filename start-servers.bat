@echo off
echo Starting Clean Breath Application...
echo.

REM Get the directory where this batch file is located
set "PROJECT_DIR=%~dp0"

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed. Checking dependencies...
echo.

REM Check if node_modules exists in root directory
if not exist "%PROJECT_DIR%node_modules" (
    echo Installing frontend dependencies...
    cd /d "%PROJECT_DIR%"
    call npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install frontend dependencies
        pause
        exit /b 1
    )
)

REM Check if node_modules exists in server directory
if not exist "%PROJECT_DIR%server\node_modules" (
    echo Installing backend dependencies...
    cd /d "%PROJECT_DIR%server"
    call npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install backend dependencies
        pause
        exit /b 1
    )
)

echo.
echo Starting servers...
echo.

REM Start backend server in a new command prompt window
echo Starting backend server on http://localhost:5000
start "Clean Breath - Backend Server" cmd /k "cd /d "%PROJECT_DIR%server" && npm start"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend server in a new command prompt window
echo Starting frontend server on http://localhost:5173
start "Clean Breath - Frontend Server" cmd /k "cd /d "%PROJECT_DIR%" && npm run dev"

echo.
echo Both servers are starting...
echo.
echo Backend Server: http://localhost:5000
echo Frontend Server: http://localhost:5173
echo.
echo The application will open in separate command prompt windows.
echo Close those windows to stop the servers.
echo.

REM Wait a bit more and then try to open the frontend in browser
timeout /t 5 /nobreak >nul
echo Opening application in browser...
start http://localhost:5173

echo.
echo Clean Breath application is now running!
echo Press any key to close this window...
pause >nul
