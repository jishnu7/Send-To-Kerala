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
            <span class="next-load"></span>
            <span class="target-centre"></span> 
          </h3>

          <h4>
            Camp active till
            <span class="active-till"></span>
          </h4>
        </div>

        <div class="entry-needed priority-items"></div>
      </div>

      <div class="col-md-3 entry-contact">
        <div class="entry-title">Contact</div>

        <div class="contact"></div>
      </div>
    </div>`
  };

  function getProp (row, name, pre, post) {
    var val = row['gsx$' + name];
    pre = pre || '';
    post = post || '';

    return val && val.$t ? pre + val.$t + post : '';
  }

  function commaLineBreak(val) {
    return val.split(',').join("<br/>");
  }

  function parseRow (row) {
    return {
      'country': getProp(row, 'country'),
      'state': getProp(row, 'state'),
      'city': getProp(row, 'location'),
      'address': getProp(row, 'locationaddress'),
      'gps': getProp(row, 'addressmaplink'),
      'next-load': getProp(row, 'nextload', null, ','),
      'active-till': getProp(row, 'centreactivetill'),
      'target-centre': getProp(row, 'targetcentre'),
      'contact': commaLineBreak(getProp(row, 'contactdetails')),
      'priority-items': getProp(row, 'priorityitems', '<div class="entry-title">Priority items needed</div>'),
      'added-on': getProp(row, 'timestamp'),
      'last-update': getProp(row, 'lastupdate'),
      'verified': getProp(row, 'verified')
    }
  }

  $.getJSON("http://data.sendtokerala.in/proxy.php?csurl=spreadsheets.google.com/feeds/list/10DP6QY4GuhWUlN9MT4Z7tszpg6DOqx6R6QRfQTDq_c8/1/public/values?alt=json", function (data, status)  {
    var verifiedCentres = [];
    var unverifiedCentres = [];

    if (status==='success') {
      switchTab("verified");
      $('.loader').hide();
    }

    data.feed.entry.forEach(function (row) {
      var rowData = parseRow(row);

      if (rowData.verified.toLowerCase() === "verified") {
        verifiedCentres.push(parseRow(row));
      } else if (rowData.verified.toLowerCase() === "unverified") {
        unverifiedCentres.push(parseRow(row));
      }
    });

    var verifiedList = new List('verified', options, verifiedCentres);
    var unverifiedList = new List('unverified', options, unverifiedCentres);

    $('.verified-num').text('(' + verifiedCentres.length + ')');
    $('.unverified-num').text('(' + unverifiedCentres.length + ')');

    $('#search-field').on('keyup', function() {
      var searchString = $(this).val();
      verifiedList.search(searchString);
      unverifiedList.search(searchString);
    });
  });
})();


function switchTab(tab){
  if(tab==='verified'){
    $("#verified").removeClass('hide');
    $("#unverified").addClass('hide');

    $("#parent-tab-item-verified").addClass("parent-tab-item-selected");
    $("#parent-tab-item-unverified").removeClass("parent-tab-item-selected");

  } else {
    $("#verified").addClass('hide');
    $("#unverified").removeClass('hide');

    $("#parent-tab-item-unverified").addClass("parent-tab-item-selected");
    $("#parent-tab-item-verified").removeClass("parent-tab-item-selected");
  }
}
