# PowerShell script to analyze CodeFlow report and export issues
# Usage: .\analyze-codeflow.ps1

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "🔍 CodeFlow Report Analysis" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Load the JSON report
$reportPath = "c:\Users\nas1ul\Downloads\codeflow-report.json"

if (-Not (Test-Path $reportPath)) {
    Write-Host "❌ Error: CodeFlow report not found at $reportPath" -ForegroundColor Red
    exit 1
}

Write-Host "📂 Loading report from: $reportPath" -ForegroundColor Yellow
$json = Get-Content $reportPath -Raw | ConvertFrom-Json

Write-Host "✅ Report loaded successfully" -ForegroundColor Green
Write-Host ""

# Display Summary
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "📊 HEALTH SCORE SUMMARY" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Health Score:        $($json.summary.healthScore)/100 (Grade: $($json.summary.healthGrade))" -ForegroundColor $(if ($json.summary.healthScore -ge 90) { "Green" } elseif ($json.summary.healthScore -ge 70) { "Yellow" } else { "Red" })
Write-Host "Total Files:         $($json.summary.totalFiles)"
Write-Host "Total Functions:     $($json.summary.totalFunctions)"
Write-Host "Lines of Code:       $($json.summary.linesOfCode)"
Write-Host ""
$unusedColor = if ($json.summary.unusedFunctions -eq 0) { "Green" } else { "Red" }
$securityColor = if ($json.summary.securityIssues -eq 0) { "Green" } else { "Red" }
$duplicatesColor = if ($json.summary.duplicates -eq 0) { "Green" } else { "Yellow" }
$violationsColor = if ($json.summary.layerViolations -eq 0) { "Green" } else { "Yellow" }

Write-Host "Unused Functions:    $($json.summary.unusedFunctions)" -ForegroundColor $unusedColor
Write-Host "Security Issues:     $($json.summary.securityIssues) (HIGH: $($json.summary.highSecurityIssues))" -ForegroundColor $securityColor
Write-Host "Code Duplicates:     $($json.summary.duplicates)" -ForegroundColor $duplicatesColor
Write-Host "Layer Violations:    $($json.summary.layerViolations)" -ForegroundColor $violationsColor
Write-Host "✅ Patterns Detected:   $($json.summary.patterns)" -ForegroundColor Green
Write-Host ""

# Export Security Issues
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "🔒 SECURITY ISSUES ANALYSIS" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

if ($json.issues -and $json.issues.security) {
    $securityIssues = $json.issues.security
    Write-Host "Found $($securityIssues.Count) security issues" -ForegroundColor Yellow
    
    # Group by severity
    $highSeverity = $securityIssues | Where-Object { $_.severity -eq "HIGH" }
    $mediumSeverity = $securityIssues | Where-Object { $_.severity -eq "MEDIUM" }
    $lowSeverity = $securityIssues | Where-Object { $_.severity -eq "LOW" }
    
    Write-Host ""
    Write-Host "🔴 HIGH Severity:   $($highSeverity.Count) issues" -ForegroundColor Red
    Write-Host "🟡 MEDIUM Severity: $($mediumSeverity.Count) issues" -ForegroundColor Yellow
    Write-Host "🟢 LOW Severity:    $($lowSeverity.Count) issues" -ForegroundColor Green
    Write-Host ""
    
    # Display HIGH severity issues
    if ($highSeverity.Count -gt 0) {
        Write-Host "🔴 HIGH SEVERITY ISSUES (First 10):" -ForegroundColor Red
        $highSeverity | Select-Object -First 10 | ForEach-Object {
            Write-Host "  - $($_.type): $($_.file):$($_.line)" -ForegroundColor Red
            Write-Host "    Message: $($_.message)" -ForegroundColor Gray
        }
        Write-Host ""
    }
    
    # Export to CSV
    $securityIssues | Select-Object severity, type, file, line, message | 
        Export-Csv "codeflow-security-issues.csv" -NoTypeInformation
    Write-Host "✅ Exported security issues to: codeflow-security-issues.csv" -ForegroundColor Green
} else {
    Write-Host "⚠️  No security issues data found in report" -ForegroundColor Yellow
    Write-Host "ℹ️  Security issues might be in a different JSON structure" -ForegroundColor Gray
}

Write-Host ""

# Export Unused Functions
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "🗑️  UNUSED FUNCTIONS ANALYSIS" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

if ($json.issues -and $json.issues.unusedFunctions) {
    $unusedFunctions = $json.issues.unusedFunctions
    Write-Host "Found $($unusedFunctions.Count) unused functions" -ForegroundColor Yellow
    Write-Host ""
    
    # Display first 10
    Write-Host "🗑️  UNUSED FUNCTIONS (First 10):" -ForegroundColor Yellow
    $unusedFunctions | Select-Object -First 10 | ForEach-Object {
        Write-Host "  - Function: $($_.name)" -ForegroundColor Yellow
        Write-Host "    File: $($_.file):$($_.line)" -ForegroundColor Gray
    }
    Write-Host ""
    
    # Export to CSV
    $unusedFunctions | Select-Object name, file, line | 
        Export-Csv "codeflow-unused-functions.csv" -NoTypeInformation
    Write-Host "✅ Exported unused functions to: codeflow-unused-functions.csv" -ForegroundColor Green
} else {
    Write-Host "⚠️  No unused functions data found in report" -ForegroundColor Yellow
    Write-Host "ℹ️  Unused functions might be in a different JSON structure" -ForegroundColor Gray
}

Write-Host ""

# Export Code Duplicates
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "📋 CODE DUPLICATES ANALYSIS" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

if ($json.issues -and $json.issues.duplicates) {
    $duplicates = $json.issues.duplicates
    Write-Host "Found $($duplicates.Count) duplicate code blocks" -ForegroundColor Yellow
    Write-Host ""
    
    # Display first 5
    Write-Host "📋 DUPLICATES (First 5):" -ForegroundColor Yellow
    $duplicates | Select-Object -First 5 | ForEach-Object {
        Write-Host "  - Files: $($_.files -join ', ')" -ForegroundColor Yellow
        Write-Host "    Lines: $($_.lines)" -ForegroundColor Gray
    }
    Write-Host ""
    
    # Export to CSV
    $duplicates | Export-Csv "codeflow-duplicates.csv" -NoTypeInformation
    Write-Host "✅ Exported duplicates to: codeflow-duplicates.csv" -ForegroundColor Green
} else {
    Write-Host "⚠️  No duplicates data found in report" -ForegroundColor Yellow
    Write-Host "ℹ️  Duplicates might be in a different JSON structure" -ForegroundColor Gray
}

Write-Host ""

# Export Layer Violations
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "🏗️  LAYER VIOLATIONS ANALYSIS" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

if ($json.issues -and $json.issues.layerViolations) {
    $violations = $json.issues.layerViolations
    Write-Host "Found $($violations.Count) layer violations" -ForegroundColor Yellow
    Write-Host ""
    
    # Display first 10
    Write-Host "🏗️  VIOLATIONS (First 10):" -ForegroundColor Yellow
    $violations | Select-Object -First 10 | ForEach-Object {
        Write-Host "  - From: $($_.from)" -ForegroundColor Yellow
        Write-Host "    To: $($_.to)" -ForegroundColor Gray
        Write-Host "    Violation: $($_.message)" -ForegroundColor Red
    }
    Write-Host ""
    
    # Export to CSV
    $violations | Export-Csv "codeflow-layer-violations.csv" -NoTypeInformation
    Write-Host "✅ Exported layer violations to: codeflow-layer-violations.csv" -ForegroundColor Green
} else {
    Write-Host "⚠️  No layer violations data found in report" -ForegroundColor Yellow
    Write-Host "ℹ️  Layer violations might be in a different JSON structure" -ForegroundColor Gray
}

Write-Host ""

# Explore JSON structure if issues not found
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "🔍 JSON STRUCTURE EXPLORATION" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Top-level keys in JSON:" -ForegroundColor Yellow
$json.PSObject.Properties.Name | ForEach-Object {
    Write-Host "  - $_" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "✅ ANALYSIS COMPLETE" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📁 Generated Files:" -ForegroundColor Green
Write-Host "  - codeflow-security-issues.csv" -ForegroundColor Gray
Write-Host "  - codeflow-unused-functions.csv" -ForegroundColor Gray
Write-Host "  - codeflow-duplicates.csv" -ForegroundColor Gray
Write-Host "  - codeflow-layer-violations.csv" -ForegroundColor Gray
Write-Host ""
Write-Host "💡 Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Review CSV files for detailed issues" -ForegroundColor Gray
Write-Host "  2. Start with HIGH severity security issues" -ForegroundColor Gray
Write-Host "  3. Remove unused functions" -ForegroundColor Gray
Write-Host "  4. Refactor duplicates" -ForegroundColor Gray
Write-Host "  5. Fix layer violations" -ForegroundColor Gray
Write-Host ""
