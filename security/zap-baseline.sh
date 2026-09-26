#!/usr/bin/env bash
set -e
TARGET_URL="${TARGET_URL:-https://gestor-donaciones.onrender.com}"
mkdir -p reports
docker run --rm -v "$(pwd)/reports:/zap/wrk/:rw" -t ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py -t "$TARGET_URL" \
  -r zap-report.html \
  -J zap-report.json \
  -w zap-report.md || true

echo "OWASP ZAP report generated in reports/."
