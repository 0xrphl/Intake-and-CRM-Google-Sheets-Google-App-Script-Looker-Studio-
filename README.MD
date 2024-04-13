# CRM Intake Project README

## Overview
This project aims to streamline the intake process for customer relationship management (CRM) using Google Sheets, Google Apps Script, and Looker Studio.

## Features
- **Google Sheets Integration**: Utilizes Google Sheets for data storage and manipulation.
- **Google Apps Script Automation**: Automates tasks and workflows using Google Apps Script.
- **Looker Studio Integration**: Provides data visualization and analytics through Looker Studio.

## Flow Chart
![Flow Chart](https://i.ibb.co/n661tC7/diagrama-drawio.png)

### Demo
- **Google Sheet Demo**: [Google Sheet Demo](https://docs.google.com/spreadsheets/d/1_gCUcBLbO2BsPPunIUigJN8JzGDVv4WtyhBUIf-ewWI/edit?usp=sharing)
- **Looker Studio Demo**: [Looker Studio Demo](https://lookerstudio.google.com/reporting/eb08b4f8-9060-4ddb-9519-22d4ee7e24ea)
- **Calendars**:
  - Calendar 1: [Link](https://calendar.google.com/calendar/embed?src=53d4f063c5cbd84330fd1a7e18074754ad149afce51c04bf1472aaa17102aefa%40group.calendar.google.com&ctz=America%2FNew_York)
  - Calendar 2: [Link](https://calendar.google.com/calendar/embed?src=d69f1c80512b7def2cf17d9edf8e5da3c83eb44b334c7a7f050cf38640f8f244%40group.calendar.google.com&ctz=America%2FNew_York)
  - Calendar 3: [Link](https://calendar.google.com/calendar/embed?src=6a430b5ee8f9ea5a8237e8fe82533d7c8505e896edbaa5880c86ef117830b933%40group.calendar.google.com&ctz=America%2FNew_York)
  - Calendar 4: [Link](https://calendar.google.com/calendar/embed?src=9a9705841364b5ad8216b3ad6ef461ac7747f0e27841e26de539244dfe219863%40group.calendar.google.com&ctz=America%2FNew_York)

## Video Tutorials
[Watch Video Tutorial how to select and create events](https://youtu.be/yZUaAZnF0N4)
[Watch Video Tutorial how to clone crm tool](https://youtu.be/jfdt8V68hUs)

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
