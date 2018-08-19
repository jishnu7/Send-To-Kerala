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

    item: `<div class="entry">
      <div class="entry-location">
        <h2 class="city"></h2>
        <div class="address"></div>
        <div class="state"></div>
        <a class="gps" href="gps">Google Maps</a>

        <div class="entry-timestamp">
          <div>
            Added: <span class="added-on"></span>
          </div>
          <div>
            Last Update: <span class="last-update"></span>
          </div>
        </div>
      </div>

      <div class="entry-info">
        <div class="entry-target">
          <div class="next-load"></div>
          to
          <div class="target-centre"></div>
          Send Before
          <li class="active-till"></li>
        </div>

        <div class="entry-needed">
          <li class="priority-items"></li>
        </div>
      </div>

      <div class="entry-contact">
        <li class="contact"></li>
      </div>
    </div>`
  };
  
  var userList = new List('users', options, COLLECTION_CENTRES);
})();
