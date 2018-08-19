(function() {
  var options = {
    valueNames: [
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

    item: `<li>
        <p class="state"></p>
        <p class="city"></p>
        <p class="address"></p>
        <a class="gps" href="gps">Google Maps</a>
        <p class="next-load"></p>
        <p class="target-centre"></p>
        <p class="active-till"></p>
        <p class="contact"></p>
        <p class="priority-items"></p>
        <p class="added-on"></p>
        <p class="last-update"></p>
    </li>`
  };
  
  var values = [
    {
      'state': 'Karnataka',
      'city': 'Bangalore',
      'address': 'Opps to Madiwala Ayyappa Temple',
      'gps': 'https://maps.google.com/foobar',
      'next-load': 'Aug 20, 10PM',
      'active-till': 'Aug 20, 9PM',
      'contact': '987654321',
      'priority-items': 'Sanitary Napkins',
      'added-on': 'Aug 19, 5AM',
      'last-update': 'Aug 19, 7AM'
    }
  ];
  
  var userList = new List('users', options, values);
})();
