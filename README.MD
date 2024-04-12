# CRM Intake Project README

## Overview
This project aims to streamline the intake process for customer relationship management (CRM) using Google Sheets, Google Apps Script, and Looker Studio.

## Features
- **Google Sheets Integration**: Utilizes Google Sheets for data storage and manipulation.
- **Google Apps Script Automation**: Automates tasks and workflows using Google Apps Script.
- **Looker Studio Integration**: Provides data visualization and analytics through Looker Studio.

## Flow Chart
![Flow Chart](https://i.ibb.co/n661tC7/diagrama-drawio.png)

## Video Tutorial
[Watch Video Tutorial](https://youtu.be/yZUaAZnF0N4)

## Getting Started
### Setup Instructions
1. **Clone the Google Sheet**: Make a copy of the [Google Sheet template](https://docs.google.com/spreadsheets/d/1_gCUcBLbO2BsPPunIUigJN8JzGDVv4WtyhBUIf-ewWI/edit?usp=sharing) provided.
2. **Enable Google Apps Script**: In the Google Sheet, go to `Extensions` > `Apps Script` and enable scripts.
3. **Set Up Triggers**:
    - Go to `Edit` > `Current project's triggers` in Apps Script.
    - Click on `Add Trigger`.
    - Select the following options:
        - Choose which function to run: `checkCalendar`
        - Choose which deployment should run: `Head`
        - Select event source: `From spreadsheet`
        - Select event type: `On edit`
4. **Authorize Access**: Authorize necessary permissions for the script to function properly.
5. **Configure Looker Studio Integration**: [Instructions on integrating with Looker Studio].


### Google Calendar URLs
- Live Demo Calendar: [Insert Calendar URL]

## Support
For any questions or issues, please contact [Your Contact Information].
