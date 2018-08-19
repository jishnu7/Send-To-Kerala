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
  
  var values = [
    {
      'country': 'India',
      'state': 'Karnataka',
      'city': 'Bangalore',
      'address': 'Opps to Madiwala Ayyappa Temple',
      'gps': 'https://maps.google.com/foobar',
      'next-load': 'Aug 20, 10PM',
      'active-till': 'Aug 20, 9PM',
      'target-centre': 'Chengannur',
      'contact': '987654321',
      'priority-items': 'Sanitary Napkins',
      'added-on': 'Aug 19, 5AM',
      'last-update': 'Aug 19, 7AM'
    }
  ];
  
  var userList = new List('users', options, values);
})();
