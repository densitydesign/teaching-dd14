function myFunction() {
  var tOnVideo = document.getElementById('tv').value;
  var tOnSnap = document.getElementById('ts').value;
  var tOnMusic = document.getElementById('tm').value;
  var tOnEmail = document.getElementById('te').value;
  var tOnIns = document.getElementById('ti').value;
  var tOnTwitter = document.getElementById('tt').value;

  var dataVideo = 300;
  var dataSnap = 160;
  var dataMusic = 150;
  var dataEmail = 0.5;
  var dataIns = 720;
  var dataTwitter = 80;

  var data = {
    youtube: { name: 'Youtube', id: 'pid', value: tOnVideo * dataVideo },
    snapchat: { name: 'Snapchat', id: 'pis', value: tOnSnap * dataSnap },
    music: { name: 'Music', id: 'pim', value: tOnMusic * dataMusic },
    email: { name: 'Mailbox', id: 'pie', value: tOnEmail * dataEmail },
    instagram: { name: 'Instagram', id: 'pii', value: tOnIns * dataIns },
    twitter: { name: 'Twitter', id: 'pit', value: tOnTwitter * dataTwitter }
  };

  add_content(data.youtube);
  add_content(data.snapchat);
  add_content(data.music);
  add_content(data.email);
  add_content(data.instagram);
  add_content(data.twitter);

  var dayConsume = document.getElementById('dayConsume');

  let perDayConsume = 0;
  for (let value of Object.values(data)) {
    perDayConsume += value.value;
  }

  add_str_num_str_span(
    dayConsume,
    'Totally you generate&nbsp;',
    Math.round(perDayConsume * 100) / 100,
    '&nbsp;MB of data in the digital world every day.'
  );

  var convertDataToElec = (perDayConsume / 1024) * 5.12;
  var convertDataToCarbon = convertDataToElec * 0.8;
  var liveCO2Consume = convertDataToCarbon / 2.8;
  var dayLiveCo2 = document.getElementById('dayLiveCo2');
  var dayCo2 = document.getElementById('dayCo2');

  add_str_num_str_span(
    dayCo2,
    'It will emit ',
    Math.round(convertDataToCarbon * 100) / 100,
    '&nbsp;kilogram of C02(Carbon Dioxide) '
  );
  add_str_num_str_span(
    dayLiveCo2,
    'It is&nbsp;',
    Math.round(liveCO2Consume * 100) / 100,
    '&nbsp;times hat of your daily breathing.'
  );

  let trs = document.querySelector('table > tbody').children;
  var extend_words = document.getElementById('extend_words');
  extend_words.innerHTML = `<br><br>Is this data far beyond your imagination?<br>Fortunately, though, its easy to cut down on data use and also energy consuption without hindering your experience.We're here to provide some tips to help you maximize utilization of your data.`;

  for (let i = 0; i < 7; i++) {
    trs[i]['children'][0].remove();
  }
}

function add_content(e) {
  add_str_num_str_span(
    document.getElementById(e.id),
    `on ${e.name}  is `,
    e.value,
    ` (MB/day)`
  );
}

function add_str_num_str_span(parent, str1, num, str2) {
  var span = document.createElement('span');
  span.className = 'description';
  span.innerHTML = str1;
  parent.appendChild(span);

  var span = document.createElement('span');
  span.className = 'number';
  span.innerHTML = num;
  parent.appendChild(span);
  var span = document.createElement('span');
  span.className = 'description';
  span.innerHTML = str2;
  parent.appendChild(span);
}
