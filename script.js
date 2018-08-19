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

    item: `<ul class="entry">
        <li class="state"></li>
        <li class="city"></li>
        <li class="address"></li>
        <li>
          <a class="gps" href="gps">Google Maps</a>
        </li>
        <li class="next-load"></li>
        <li class="target-centre"></li>
        <li class="active-till"></li>
        <li class="contact"></li>
        <li class="priority-items"></li>
        <li class="added-on"></li>
        <li class="last-update"></li>
    </ul>`
  };
  
  var userList = new List('users', options, COLLECTION_CENTRES);
})();
