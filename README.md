# DevOps Portfolio Dashboard & CI/CD Demo

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-222222?logo=githubpages)](https://siro-devops.github.io/cicd-demo-app/)
[![Deploy Status](https://github.com/siro-devops/cicd-demo-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/siro-devops/cicd-demo-app/actions/workflows/deploy.yml)
[![Made with HTML](https://img.shields.io/badge/Made%20with-HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Made with CSS](https://img.shields.io/badge/Made%20with-CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Made with JS](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Project Overview

This repository contains two main components:
1.  **A professional DevOps Portfolio Dashboard** that showcases my key projects, technical skills, and learning journey.
2.  **A fully automated CI/CD pipeline** using **GitHub Actions** that tests and deploys the dashboard to **GitHub Pages** on every commit to the `main` branch.

This project demonstrates a complete "code to cloud" workflow for a static website, a fundamental skill for a DevOps or Cloud Engineer.

## Architecture & Pipeline

The diagram below illustrates the automated flow of this project.

```mermaid
graph LR
    A[Code Push to GitHub] --> B[GitHub Actions: Test Job];
    B --> C{Tests Pass?};
    C -- Yes --> D[GitHub Actions: Deploy Job];
    C -- No --> E[Pipeline Fails, Site Not Updated];
    D --> F[Deploy to gh-pages branch];
    F --> G[GitHub Pages serves live site];
    G --> H[Live Portfolio Dashboard];
