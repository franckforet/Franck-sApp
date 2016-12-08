Template.memberPage.helpers({
  members: function() {
    console.log(Meteor.users.find({}).count());
    return Meteor.users.find({});
  },
});

Template.memberList.helpers({

  userName: function(){
    for (var i = 0; i < Meteor.users.find({}).count(); i++) {
      console.log("Dans le for et i = " +i);
      console.log(Meteor.users.find({i}));
      //console.log(Meteor.users.find({i}));
      //console.log(Meteor.users.find({i}));
      console.log(Meteor.user(i).username);
    //return Meteor.users.find({})[i].username;
    }
  },

  userID: function() {
    return Meteor.userId();
  },

  // userPassWord: function(){
  //   Meteor.userPassWord();
  // }
});
