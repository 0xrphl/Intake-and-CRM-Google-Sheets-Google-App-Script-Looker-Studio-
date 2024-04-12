function addRandomValues() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange('M2:K5200'); // Adjusted range
  var values = [
    "Child adoption",
    "Child support modification",
    "Custody modification",
    "Juvenile delinquency defense",
    "Criminal defense",
    "Pro bono attorney services",
    "Immigration law services",
    "Bankruptcy representation",
    "Real estate law services",
    "Employment law services",
    "Business law services",
    "Intellectual property law services",
    "Personal injury representation",
    "Medical malpractice representation",
    "Workers' compensation representation",
    "Social security disability representation",
    "Tax law services",
    "Environmental law services",
    "Contract drafting and review",
    "Landlord-tenant disputes",
    "Consumer protection representation",
    "Civil rights representation",
    "Education law services",
    "Entertainment law services",
    "Sports law services",
    "International law services",
    "Military law services",
    "Government relations",
    "Regulatory compliance",
    "Legal research and writing",
    "Notary services",
    "Document preparation",
    "Conflict resolution services",
    "Community outreach programs",
    "Legal aid services",
    "Alternative dispute resolution",
    "Mentorship programs",
    "Public interest litigation",
    "Human rights advocacy",
    "Victim advocacy",
    "Crisis intervention services"
];
  
  // Get the existing values to avoid overwriting
  var currentValues = range.getValues();
  
  // Iterate over each cell in the range
  for (var i = 0; i < currentValues.length; i++) {
    for (var j = 0; j < currentValues[i].length; j++) {
      // Check if the cell is empty
      if (currentValues[i][j] == "") {
        // Generate a random index to pick a value from the array
        var randomIndex = Math.floor(Math.random() * values.length);
        // Set the randomly selected value in the cell
        range.getCell(i+1, 1).setValue(values[randomIndex]); // Adjusted line to set value in column H
        // Exit the loop after setting the value to avoid overwriting other cells
        break;
      }
    }
  }
}

function addDataValidationList() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange('M2:M7000'); // Change the range as needed
  var listValues = [
    "Child adoption",
    "Child support modification",
    "Custody modification",
    "Juvenile delinquency defense",
    "Criminal defense",
    "Pro bono attorney services",
    "Immigration law services",
    "Bankruptcy representation",
    "Real estate law services",
    "Employment law services",
    "Business law services",
    "Intellectual property law services",
    "Personal injury representation",
    "Medical malpractice representation",
    "Workers' compensation representation",
    "Social security disability representation",
    "Tax law services",
    "Environmental law services",
    "Contract drafting and review",
    "Landlord-tenant disputes",
    "Consumer protection representation",
    "Civil rights representation",
    "Education law services",
    "Entertainment law services",
    "Sports law services",
    "International law services",
    "Military law services",
    "Government relations",
    "Regulatory compliance",
    "Legal research and writing",
    "Notary services",
    "Document preparation",
    "Conflict resolution services",
    "Community outreach programs",
    "Legal aid services",
    "Alternative dispute resolution",
    "Mentorship programs",
    "Public interest litigation",
    "Human rights advocacy",
    "Victim advocacy",
    "Crisis intervention services"
];

; // Your list of options

  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(listValues)
    .setAllowInvalid(false)
    .build();

  range.setDataValidation(rule);
}

function addRandomValues() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange('M2:M5200'); // Adjusted range to only target column M
  var values = [
    "Child adoption",
    "Child support modification",
    "Custody modification",
    "Juvenile delinquency defense",
    "Criminal defense",
    "Pro bono attorney services",
    "Immigration law services",
    "Bankruptcy representation",
    "Real estate law services",
    "Employment law services",
    "Business law services",
    "Intellectual property law services",
    "Personal injury representation",
    "Medical malpractice representation",
    "Workers' compensation representation",
    "Social security disability representation",
    "Tax law services",
    "Environmental law services",
    "Contract drafting and review",
    "Landlord-tenant disputes",
    "Consumer protection representation",
    "Civil rights representation",
    "Education law services",
    "Entertainment law services",
    "Sports law services",
    "International law services",
    "Military law services",
    "Government relations",
    "Regulatory compliance",
    "Legal research and writing",
    "Notary services",
    "Document preparation",
    "Conflict resolution services",
    "Community outreach programs",
    "Legal aid services",
    "Alternative dispute resolution",
    "Mentorship programs",
    "Public interest litigation",
    "Human rights advocacy",
    "Victim advocacy",
    "Crisis intervention services"
  ];

  // Get the existing values to avoid overwriting
  var currentValues = range.getValues();
  var oValues = sheet.getRange('O2:O5200').getValues(); // Get values from column O

  // Iterate over each cell in the range
  for (var i = 0; i < currentValues.length; i++) {
    for (var j = 0; j < currentValues[i].length; j++) {
      // Check if the cell in column O is "NOSO" and if the cell in column M is empty
      if (oValues[i][0] === "NOSO" && currentValues[i][j] === "") {
        // Generate a random index to pick a value from the array
        var randomIndex = Math.floor(Math.random() * values.length);
        // Set the randomly selected value in the cell
        range.getCell(i + 1, 1).setValue(values[randomIndex]); // Adjusted line to set value in column M
        // Exit the loop after setting the value to avoid overwriting other cells
        break;
      }
    }
  }
}