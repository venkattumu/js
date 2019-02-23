document.getElementById('serviceInputForm').addEventListener('submit', saveService);

function saveService(e) {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var money = document.getElementById('price').value;
  

  var issueId = chance.guid();
  // var issueStatus = 'Open';

  var issue = {
    id: issueId,
    name: username,
    email: email,    
    phone: mobile,
    price: money
    
    
  }

  if (localStorage.getItem('issues') == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));

    issues.push(issue);

    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('serviceInputForm').reset();
  fetchIssues();
  e.preventDefault();
}
function onButtonClick(id) {
  Instamojo.open('https://test.instamojo.com/@venkattumu143');
}

function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}


function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesListe = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var name2 = issues[i].name;
    var email2 = issues[i].email;
    var mobile2 = issues[i].phone;
    var price2 = issues[i].price;
    

    

    issuesList.innerHTML +=   '<div class="well">'+
                              '<h6>Service ID: ' + id + '</h6>'+
                              '<p><span class="label label-info">' + status + '</span></p>'+
                              '<h3>' + name2 + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + email2 + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + mobile2 + '</p>'+
                              '<p> $ ' + price2 + '</p>'+
                                                            
                              '<button onclick="onButtonClick()" class="btn btn-warning">Proceed To Pay</button> '+
                              '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                             
                              '</div>';
  }
}

