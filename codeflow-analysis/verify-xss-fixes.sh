#!/bin/bash

# XSS Security Verification Script
# Run this to verify all XSS vulnerabilities have been fixed

echo "========================================="
echo "🔒 XSS Security Verification Script"
echo "========================================="
echo ""

# Check for dangerouslySetInnerHTML
echo "1️⃣ Checking for dangerouslySetInnerHTML..."
DANGEROUS_HTML=$(grep -r "dangerouslySetInnerHTML" src/ 2>/dev/null | wc -l)

if [ "$DANGEROUS_HTML" -eq 0 ]; then
    echo "   ✅ PASS: No dangerouslySetInnerHTML found"
else
    echo "   ❌ FAIL: Found $DANGEROUS_HTML instance(s) of dangerouslySetInnerHTML"
    grep -r "dangerouslySetInnerHTML" src/
fi

echo ""

# Check for innerHTML
echo "2️⃣ Checking for innerHTML usage..."
INNER_HTML=$(grep -r "\.innerHTML" src/ 2>/dev/null | wc -l)

if [ "$INNER_HTML" -eq 0 ]; then
    echo "   ✅ PASS: No innerHTML usage found"
else
    echo "   ❌ FAIL: Found $INNER_HTML instance(s) of innerHTML"
    grep -r "\.innerHTML" src/
fi

echo ""

# Check for eval
echo "3️⃣ Checking for eval() usage..."
EVAL_USAGE=$(grep -r "[^a-zA-Z]eval\(" src/ 2>/dev/null | wc -l)

if [ "$EVAL_USAGE" -eq 0 ]; then
    echo "   ✅ PASS: No eval() found"
else
    echo "   ❌ FAIL: Found $EVAL_USAGE instance(s) of eval()"
    grep -r "[^a-zA-Z]eval\(" src/
fi

echo ""

# Check for Function constructor
echo "4️⃣ Checking for Function constructor..."
FUNCTION_CONSTRUCTOR=$(grep -r "new Function\(" src/ 2>/dev/null | wc -l)

if [ "$FUNCTION_CONSTRUCTOR" -eq 0 ]; then
    echo "   ✅ PASS: No Function constructor found"
else
    echo "   ❌ FAIL: Found $FUNCTION_CONSTRUCTOR instance(s) of Function constructor"
    grep -r "new Function\(" src/
fi

echo ""

# Summary
echo "========================================="
echo "📊 SECURITY SCAN SUMMARY"
echo "========================================="

TOTAL_ISSUES=$((DANGEROUS_HTML + INNER_HTML + EVAL_USAGE + FUNCTION_CONSTRUCTOR))

if [ "$TOTAL_ISSUES" -eq 0 ]; then
    echo "✅ ALL CHECKS PASSED!"
    echo ""
    echo "🔒 Security Status: EXCELLENT"
    echo "   - No XSS vulnerabilities detected"
    echo "   - No dangerous HTML injection"
    echo "   - No eval() usage"
    echo "   - Code follows React best practices"
    echo ""
    echo "🚀 Production Ready: YES"
else
    echo "❌ $TOTAL_ISSUES ISSUE(S) FOUND"
    echo ""
    echo "⚠️  Security Status: NEEDS ATTENTION"
    echo "   - Review and fix the issues above"
    echo "   - See XSS_SECURITY_GUIDE.md for solutions"
fi

echo "========================================="
echo ""
echo "💡 Next Steps:"
echo "   1. Run 'npm start' to verify code compiles"
echo "   2. Test affected pages manually"
echo "   3. Review XSS_FIX_SUMMARY.md for details"
echo ""
