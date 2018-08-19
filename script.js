(function() {
  var options = {
    valueNames: [
      'country',
      'state',
      'city',
      'address',
      { attr: 'href', name: 'gps' },
      'next-load',
      'target-centre',
      'active-till',
      'contact',
      'priority-items',
      'added-on',
      'last-update'
    ],

    item: `<div class="row entry">
      <div class="col-md-4 entry-location">
        <div class="row address-details">
          <div class="col-xs-9">
            <h2 class="city-container"><span class="city"><span></h2>
            <div class="address"></div>
            <div class="state"></div>
          </div>
          <div class="col-xs-3 maps-container">
            <a class="gps" href="gps" target="_blank"><img src="maps-icon.png"></a>
          </div>
        </div>

        <div class="entry-timestamp">
          <div>
            Added: <span class="added-on"></span>, last update: <span class="last-update"></span>
          </div>
        </div>
      </div>

      <div class="col-md-5 entry-info">
        <div class="entry-target">
          <h3>
            <span class="next-load"></span>,
            <span class="target-centre"></span> 
          </h3>

          <h4>
            Camp active till
            <span class="active-till"></span>
          </h4>
        </div>

        <span class="entry-timestamp">Priority items needed</span>
        <div class="entry-needed priority-items"></div>
      </div>

      <div class="col-md-2 entry-contact">
          <span class="contact"></span>
      </div>
    </div>`
  };

  function parseRow (row) {
    return {
      'country': row['gsx$contact'] && row['gsx$contact'].$t,
      'state': row['gsx$state'] && row['gsx$state'].$t,
      'city': row['gsx$city'] && row['gsx$city'].$t,
      'address': row['gsx$address'] && row['gsx$address'].$t,
      'gps': row['gsx$gps'] && row['gsx$gps'].$t,
      'next-load': row['gsx$next-load'] && row['gsx$next-load'].$t,
      'active-till': row['gsx$active-till'] && row['gsx$active-till'].$t,
      'target-centre': row['gsx$target-centre'] && row['gsx$target-centre'].$t,
      'contact': row['gsx$contact'] && row['gsx$contact'].$t,
      'priority-items': row['gsx$contact'] && row['gsx$contact'].$t,
      'added-on': row['gsx$timestamp'] && row['gsx$timestamp'].$t,
      'last-update': row['gsx$last-update'] && row['gsx$last-update'].$t,
      'status': row['gsx$status'] && row['gsx$status'].$t
    }
  }

  $.getJSON("http://data.sendtokerala.in/proxy.php?csurl=spreadsheets.google.com/feeds/list/10DP6QY4GuhWUlN9MT4Z7tszpg6DOqx6R6QRfQTDq_c8/1/public/values?alt=json", function (data)  {
    var centres = [];

    data.feed.entry.forEach(function (row) {
      centres.push(parseRow(row));
    });

    var userList = new List('users', options, centres);
    document.getElementById('list-length').innerHTML = userList.size();
  });

})();

