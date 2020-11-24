const msalConfig = {
  auth: {
    clientId: 'e767f35d-2ca6-49a3-833f-73efe154dbff',
    redirectUri: 'http://localhost:8080'
  }
};

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite',
    'Mail.Read'
    
  ]
}