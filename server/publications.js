Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('comments', function() {
  return Comments.find();
});
Meteor.publish('userList', function (){
  return Meteor.users.find({});
});
