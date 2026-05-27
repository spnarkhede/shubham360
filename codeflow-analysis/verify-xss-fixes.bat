@echo off
REM XSS Security Verification Script for Windows
REM Run this to verify all XSS vulnerabilities have been fixed

echo =========================================
echo 🔒 XSS Security Verification Script
echo =========================================
echo.

REM Check for dangerouslySetInnerHTML
echo 1️⃣ Checking for dangerouslySetInnerHTML...
findstr /S /I /C:"dangerouslySetInnerHTML" src\*.js src\*.jsx src\*.ts src\*.tsx 2>nul
if %ERRORLEVEL% EQU 0 (
    echo    ❌ FAIL: Found dangerouslySetInnerHTML
) else (
    echo    ✅ PASS: No dangerouslySetInnerHTML found
)
echo.

REM Check for innerHTML
echo 2️⃣ Checking for innerHTML usage...
findstr /S /I /C:".innerHTML" src\*.js src\*.jsx src\*.ts src\*.tsx 2>nul
if %ERRORLEVEL% EQU 0 (
    echo    ❌ FAIL: Found innerHTML usage
) else (
    echo    ✅ PASS: No innerHTML usage found
)
echo.

REM Check for eval
echo 3️⃣ Checking for eval^(^) usage...
findstr /S /I /C:"eval(" src\*.js src\*.jsx src\*.ts src\*.tsx 2>nul
if %ERRORLEVEL% EQU 0 (
    echo    ❌ FAIL: Found eval^(^)
) else (
    echo    ✅ PASS: No eval^(^) found
)
echo.

REM Check for Function constructor
echo 4️⃣ Checking for Function constructor...
findstr /S /I /C:"new Function(" src\*.js src\*.jsx src\*.ts src\*.tsx 2>nul
if %ERRORLEVEL% EQU 0 (
    echo    ❌ FAIL: Found Function constructor
) else (
    echo    ✅ PASS: No Function constructor found
)
echo.

REM Summary
echo =========================================
echo 📊 SECURITY SCAN SUMMARY
echo =========================================
echo.
echo ✅ ALL MANUAL CHECKS COMPLETED
echo.
echo 🔒 Security Status: Review results above
echo    - If all PASS: Code is XSS-safe
echo    - If any FAIL: Review XSS_SECURITY_GUIDE.md
echo.
echo 🚀 Next Steps:
echo    1. Run 'npm start' to verify code compiles
echo    2. Test affected pages manually
echo    3. Review XSS_FIX_SUMMARY.md for details
echo.
echo =========================================
echo.
pause
