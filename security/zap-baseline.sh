#!/usr/bin/env bash
docker run --rm --network host -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t http://127.0.0.1:3000 -r zap-report.html
