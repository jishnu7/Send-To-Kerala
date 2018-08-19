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
  
  var userList = new List('users', options, COLLECTION_CENTRES);

  document.getElementById('list-length').innerHTML = userList.size();
})();

