// Read the colors from json file into json array
$.getJSON("newsletter.json", function(json) {
  console.log(json);
  var subscribers = json.subscribers;
  var tableHtml = "<table>";
  tableHtml += "<th>Index</th>";
  tableHtml += "<th>Name</th>";
  tableHtml += "<th>Surname</th>";
  tableHtml += "<th>Email</th>";
  for (let i = 0; i < subscribers.length; i++) {
    var subscriber = subscribers[i];
    tableHtml += "<tr>";
    tableHtml += "<td>";
    tableHtml += subscriber.index;
    tableHtml += "</td>";
    tableHtml += "<td>";
    tableHtml += subscriber.name;
    tableHtml += "</td>";
    tableHtml += "<td>";
    tableHtml += subscriber.surname;
    tableHtml += "</td>";
    tableHtml += "<td>";
    tableHtml += subscriber.email;
    tableHtml += "</td>";
    tableHtml += "</tr>";

  }
  tableHtml += "</table>";
  console.log(tableHtml);
  $('body').html(tableHtml);
});
