Questions = new Mongo.Collection("questions");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    questions: function () {
      // Show newest tasks first
      console.log("attempting to return")
      return Questions.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit": function (event) {
      // This function is called when the new task form is submitted
      var text = event.target.text.value;

      Questions.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });

  Template.body.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Questions.update(this._id, {$set: {checked: ! this.checked}});
    },
    "click .delete": function () {
      Questions.remove(this._id);
    }
  });
}
