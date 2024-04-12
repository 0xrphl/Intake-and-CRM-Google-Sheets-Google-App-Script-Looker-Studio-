function createCalendarEvents() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getDataRange();
    var values = range.getValues();
    
    for (var i = 4; i < values.length; i++) {
      var row = i + 1;
      var tickBox = sheet.getRange(row, 21).getValue(); // Column Q
      var calendarId = "c_e84f80024a2ad3b161a1a115d578b2eb0c2a6c42be2fffdf2e0d41fbcd76242b@group.calendar.google.com"; 
  
      if (tickBox) {
        var eventDate = values[i][6]; // Column B
        var eventTime = values[i][11];
        var eventTitle = "Initial Consultation - " + values[i][10] + " - " + values[i][7]; // Column D
        var eventDescription = "-<b> Name of the caller(lead): </b> " + values[i][3] +  "\n" + "-<b> Phone Number: </b>" + values[i][4] + "\n" + "-<b> Email: </b>" + values[i][5] + "\n" + "-<b> Name of the beneficiary: </b>" + values[i][10] + " " + values[i][12] + " the caller"  + "\n" + "-<b> IC Date: </b>" + eventDate.toLocaleString() + "\n" + "-<b> Type of case: </b>" + values[i][7]  + "\n" +"-<b> Add A-number if any: </b>" + values[i][13] +  "\n" +"-<b> Entries to the US: </b>" + values[i][14] +  "\n" +"-<b> Deportations or ICE apprehensions?: </b>" + values[i][15] +  "\n" +"-<b> Criminal Background: </b>" + values[i][16] +  "\n" +"-<b> Brief summary of the case: </b>" + values[i][17] + "\n\n" + "-<b>Additional notes:\nDigital proficiency:\n-Does PC have an email?: </b>" + values[i][18] + "\n"
        + "-<b>Does PC have a reliable contact that can provide an email for them?: </b>" + values[i][18] + "\n"
        + "-<b>Does PC know how to log in and use an email address?(send /receive emails include attachments?: </b>" + values[i][18] + "\n"
        + "-<b>Does PC know how to take pictures with a cell phone?or scan documents with their phone?: </b>" + values[i][18] + "\n\n" + "*Potential Client profile URL: " + values[i][19];
        var calendarValue = values[i][8]; //calendar
        var dateString = Utilities.formatDate(eventDate, "GMT", "yyyy-MM-dd");
        var timeString = eventTime.getHours() + ":" + eventTime.getMinutes() + ":" + eventTime.getSeconds();
        var dateTimeString = dateString + " " + timeString;
        var today = new Date(); 
        var start = new Date(dateTimeString);
        var end = new Date(start.getTime() + (30 * 60000));
        var oneDayAhead = new Date(today);
        oneDayAhead.setDate(oneDayAhead.getDate() + 1);
        
        var to = values[i][4]; // Recipient phone number
        var body = ""; 
        var scheduled_at = new Date(eventDate.getTime()); 
        scheduled_at.setTime(scheduled_at.getTime() - (60 * 60 * 1000));
        
  if (calendarValue == "New York Office") {
          calendarId = "6a430b5ee8f9ea5a8237e8fe82533d7c8505e896edbaa5880c86ef117830b933@group.calendar.google.com"; 
          var eventTitle = eventTitle + " - New York Office In person";
          } 
  if (calendarValue == "Dallas Office") {
          calendarId = "d69f1c80512b7def2cf17d9edf8e5da3c83eb44b334c7a7f050cf38640f8f244@group.calendar.google.com"; 
          var eventTitle = eventTitle + " - Dallas Office In person";
          } 
  if (calendarValue == "Boston Office") {
          calendarId = "53d4f063c5cbd84330fd1a7e18074754ad149afce51c04bf1472aaa17102aefa@group.calendar.google.com"; 
          var eventTitle = eventTitle + " - Boston Office In person";
          } 
  else if (calendarValue == "Virtual Consultation") {
          calendarId = "9a9705841364b5ad8216b3ad6ef461ac7747f0e27841e26de539244dfe219863@group.calendar.google.com"; 
          var eventTitle = eventTitle + " - Virtual ZOOM";
          var eventTitle = eventTitle + " - " + values[i][0];
          var eventDescription = eventDescription +  "\n" +  "\n" + "Zoom link https://us02web.zoom.us/j/example?pwd=example21432sd" +  "\n" + "Meeting ID: xxxyyyxxx12" +  "\n" + "Passcode: 225478";   
        } 
  
  if (values[i][2] === "SPA") {
      body = "Hola! "  + "\n" + "Su cita será para el día " + eventDate.toLocaleString()  + "\n" + "\n" + calendarId + "Direccion";
      sendTextMessage(to, body) 
       body = "Hola!"   + "\n" + "Este mensaje es para confirmar su cita de hoy " +  eventDate.toLocaleString() + "\n" + "\n" + "Gracias." ;
      scheduleTextUsMessage(to,body,scheduled_at)
      if (eventDate > oneDayAhead) {
      scheduled_at.setDate(scheduled_at.getDate() - 1);
      scheduled_at.setHours(19);
      body = "Hola!"   + "\n" + "Este mensaje es para confirmar su cita de mañana " +  eventDate.toLocaleString()  + "\n" + "\n" + "Gracias." ;
      scheduleTextUsMessage(to,body,scheduled_at)
      }
    } 
  if (values[i][2] === "ENG") { // Check if language is Spanish
      body = "Hello"  + "\n" + "Your consultation is scheduled for" + eventDate.toLocaleString()  + "\n" + "\n" + calendarId + "Address";
      sendTextMessage(to, body) 
       body = "Hello"   + "\n" + "Confirmation for your today's consultation" +  eventDate.toLocaleString()  + "\n" + "\n" + "Thank you." ;
      scheduleTextUsMessage(to,body,scheduled_at)
      if (eventDate > oneDayAhead) {
      scheduled_at.setDate(scheduled_at.getDate() - 1);
      scheduled_at.setHours(19);
      body = "Hello"   + "\n" + "Confirmation for tomorrow's consultation" +  eventDate.toLocaleString()  + "\n" + "\n" + "Thank you" ;
      scheduleTextUsMessage(to,body,scheduled_at)
      }
  }  
        
        var eventDescription = eventDescription +  "\n" +  "\n" +  "*Event Created By Vitual Assistant. " + values[i][9];
        var calendar = CalendarApp.getCalendarById(calendarId);
        var event = calendar.createEvent(eventTitle, start, end, {description: eventDescription});
        Logger.log('Event ID: ' + event.getId());
        sheet.getRange(row, 21).setValue(false);
        sheet.getRange(row, 22).setValue('Event Created');
      }
    }
  }
  
  function sendTextMessage(to, body) {
    var apiKey = 'TextUS API  Token';
    var url = 'https://next.textus.com//messages';
  
     var messageData = {
      to: to, 
      body: body 
    };
    var options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Accept': 'application/vnd.textus+jsonld',
        'Authorization': 'Bearer ' + apiKey
      },
      payload: JSON.stringify(messageData)
    };
    try {
      var response = UrlFetchApp.fetch(url, options);
      var statusCode = response.getResponseCode();
      if (statusCode == 201 || statusCode == 202) {
        Logger.log('Message sent successfully.');
      } else {
        var responseText = response.getContentText();
        Logger.log('Failed to send message. Status code: ' + statusCode + ', Response: ' + responseText);
      }
    } catch (error) {
      Logger.log('Error sending message:', error);
    }
  }
  
  function scheduleTextUsMessage(to,body,scheduled_at) {
    // Set your API endpoint
    var apiUrl = 'https://next.textus.com//messages';
    
    // Set your authorization token
    var token = 'TextUS API  Token';
    
    // Construct the message body
    var messageBody = {
      to: to,
      body: body,
      scheduled_at: scheduled_at
    };
    
    // Convert the message body to JSON
    var payload = JSON.stringify(messageBody);
    
    // Set the options for the HTTP request
    var options = {
      "method": "POST",
      "contentType": "application/json",
      "headers": {
        "Accept": "application/vnd.textus+jsonld",
        "Authorization": "Bearer " + token
      },
      "payload": payload
    };
    
    // Make the HTTP request
    var response = UrlFetchApp.fetch(apiUrl, options);
    
    // Log the response
    Logger.log(response.getContentText());
  }
  