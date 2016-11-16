var postsData = [
  {
    title:'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url:'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://google.com'
  }
];

Template.postsList.helpers({
  posts: function(){
    return Posts.find();
  }
});


Meteor.startup(function() {
  Tracker.autorun(function() {
    console.log('There are ' + Posts.find().count() + ' posts');
  });
});
