function checkCalendar() {
  // Get the active sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Google Calendar and SMS tool");
  var range = sheet.getDataRange();
  var values = range.getValues();
  var long = (SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Google Calendar and SMS tool").getRange(2,9).getValue()) + 1;

  for (var i = 4; i < long + 3; i++) {
    var row = i + 1;
    var date = values[i][6]; // Adjusted column index for date
    var name = values[i][3]; // Adjusted column index for name
    var calendarId = "";  // Default calendar ID

    var calendarValue = values[i][8]; // Adjusted column index for calendar

if (calendarValue == "New York Office") {
      calendarId = "6a430b5ee8f9ea5a8237e8fe82533d7c8505e896edbaa5880c86ef117830b933@group.calendar.google.com"; 
    } else if (calendarValue == "Dallas Office") {
      calendarId = "d69f1c80512b7def2cf17d9edf8e5da3c83eb44b334c7a7f050cf38640f8f244@group.calendar.google.com";
    } else if (calendarValue == "Boston Office") {
      calendarId = "53d4f063c5cbd84330fd1a7e18074754ad149afce51c04bf1472aaa17102aefa@group.calendar.google.com";
    } else if (calendarValue == "Virtual Consultation") {
      calendarId = "9a9705841364b5ad8216b3ad6ef461ac7747f0e27841e26de539244dfe219863@group.calendar.google.com";
    } 

    var events = CalendarApp.getCalendarById(calendarId).getEventsForDay(new Date(date), {search: name});
    Logger.log('Number of events: ' + events.length + ' - ' + name + ' - ' + date);

    if (events.length != 0) {
      sheet.getRange(row, 22).setValue('Event Created'); // Adjusted column index for status
      sheet.getRange(row, 21).setValue(false); // Adjusted column index for checkbox
    } else {
      sheet.getRange(row, 22).setValue('Creation Pending'); // Adjusted column index for status
    }
  }

  for (i = long + 3; i < 500; i++) {
    var tre = i + 1;
    sheet.getRange(tre, 22).setValue(''); // Adjusted column index for status
  }
}