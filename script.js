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
          <div class="col-md-9">
            <h2 class="city"></h2>
            <div class="address"></div>
            <div class="state"></div>
          </div>
          <div class="col-md-3 maps-container">
            <a class="gps" href="gps"><img src="maps-icon.png"></a>
          </div>
        </div>

        <div class="entry-timestamp">
          <div>
            Added: <span class="added-on"></span>, last update: <span class="last-update"></span>
          </div>
        </div>
      </div>

      <div class="col-md-4 entry-info">
        <div class="entry-target">
          <h3>
            <span class="next-load"></span>
            to
            <span class="target-centre"></span>
          </h3>

          Send Before
          <span class="active-till"></span>
        </div>

        <div class="entry-needed priority-items"></div>
      </div>

      <div class="entry-contact">
        <li class="contact"></li>
      </div>
    </div>`
  };
  
  var userList = new List('users', options, COLLECTION_CENTRES);
})();
