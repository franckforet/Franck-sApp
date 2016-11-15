if (Posts.find().count()==0){
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert({
    title: 'Compétition Triahtlon',
    url: 'http://www.senart-triathlon.com/'
  });
  Posts.insert({
    title: 'Meteor Book',
    url: 'http://themeteorbook.com'
  });
};
