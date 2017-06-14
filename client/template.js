Template.showpeople.helpers({
  peoplelist() {return People.find()},
})

Template.showlocation.helpers({
  locationlist() {return Location.find()},
})

Template.addlocation.events({
  'click button' (elt,instance) {
    const username = instance.$('#username').val();
    const location = instance.$('#location').val();
    console.log('adding '+username);
    instance.s('#username').val("");
    instance.s('#location').val("");
    Location.insert({username:username,location:location})
  }
})

Template.addperson.events({
  'click button' (elt,instance) {
    const name = instance.$('#name').val();
    const year = instance.$('#birthyear').val();
    const birthyear = parseInt(year);
    console.log('adding '+name);
    instance.s('#name').val("");
    instance.s('#birthyear').val("");
    People.insert({name:name,birthyear:birthyear})
  }
})

  Template.personrow.events({
    'click button'(elt,instance) {
      console.dir(this);
      console.log(this.person_id);
      People.remove(this.person._id);
    }
})
