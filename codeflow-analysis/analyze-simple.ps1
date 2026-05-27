# PowerShell script to analyze CodeFlow report
# Usage: .\analyze-simple.ps1

Write-Host "=========================================`n" -ForegroundColor Cyan
Write-Host "CodeFlow Report Analysis`n" -ForegroundColor Cyan
Write-Host "=========================================`n`n" -ForegroundColor Cyan

# Load the JSON report
$reportPath = "c:\Users\nas1ul\Downloads\codeflow-report.json"

if (-Not (Test-Path $reportPath)) {
    Write-Host "Error: Report not found at $reportPath`n" -ForegroundColor Red
    exit 1
}

Write-Host "Loading report...`n" -ForegroundColor Yellow
$json = Get-Content $reportPath -Raw | ConvertFrom-Json
Write-Host "Report loaded successfully!`n`n" -ForegroundColor Green

# Display Summary
Write-Host "=========================================`n" -ForegroundColor Cyan
Write-Host "HEALTH SCORE SUMMARY`n" -ForegroundColor Cyan
Write-Host "=========================================`n`n" -ForegroundColor Cyan

Write-Host "Health Score:        $($json.summary.healthScore)/100 (Grade: $($json.summary.healthGrade))"
Write-Host "Total Files:         $($json.summary.totalFiles)"
Write-Host "Total Functions:     $($json.summary.totalFunctions)"
Write-Host "Lines of Code:       $($json.summary.linesOfCode)`n"

Write-Host "Unused Functions:    $($json.summary.unusedFunctions)" -ForegroundColor Red
Write-Host "Security Issues:     $($json.summary.securityIssues) (HIGH: $($json.summary.highSecurityIssues))" -ForegroundColor Red
Write-Host "Code Duplicates:     $($json.summary.duplicates)" -ForegroundColor Yellow
Write-Host "Layer Violations:    $($json.summary.layerViolations)" -ForegroundColor Yellow
Write-Host "Patterns Detected:   $($json.summary.patterns)`n`n" -ForegroundColor Green

# Explore JSON structure
Write-Host "=========================================`n" -ForegroundColor Cyan
Write-Host "JSON STRUCTURE`n" -ForegroundColor Cyan
Write-Host "=========================================`n`n" -ForegroundColor Cyan

Write-Host "Top-level keys:`n" -ForegroundColor Yellow
$json.PSObject.Properties.Name | ForEach-Object {
    $prop = $_
    $type = $json.$prop.GetType().Name
    Write-Host "  - $prop ($type)" -ForegroundColor Cyan
    
    # If it's an object, show its properties
    if ($type -eq "PSCustomObject") {
        $json.$prop.PSObject.Properties.Name | Select-Object -First 5 | ForEach-Object {
            Write-Host "      - $_" -ForegroundColor Gray
        }
    }
    
    # If it's an array, show count
    if ($type -like "*[]") {
        Write-Host "      Count: $($json.$prop.Count)" -ForegroundColor Gray
    }
}

Write-Host "`n`nAnalysis complete!`n" -ForegroundColor Green
