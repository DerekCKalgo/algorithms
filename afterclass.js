var StackModel = Backbone.Model.extend({
    defaults: {
        title: null,
        instructor: null,
        language: null
    },
    initialize: function(){
        this.instructor="Michael Choi";
    }
});
var stack1 = new StackModel();
stack1.set("title", "MERN");
console.log(stack1);