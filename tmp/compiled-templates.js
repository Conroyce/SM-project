Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"navbar-header nav-back\"> <img class=\"nav-content\" src=\"/assets/img/logo.png\"> <span class=\"nav-content sub-title\">CX</span> </div> ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  
});

Ember.TEMPLATES["response"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" <div class=\"row\"> <div class=\"col-xs-12\"> <p class=\"question\">");
  stack1 = helpers._triageMustache.call(depth0, "question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> </div> </div> <div class=\"row\"> <div class=\"col-xs-12\"> <p>");
  stack1 = helpers._triageMustache.call(depth0, "answer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> </div> </div> ");
  return buffer;
  }

  data.buffer.push("<div class=\"abs\"> <div class=\"row response-wrapper\"> <div class=\"top-pad\"> <div class=\"row space-bot-1\"> <div class=\"col-xs-10\"> <h3>");
  stack1 = helpers._triageMustache.call(depth0, "data.1.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"date\">");
  stack1 = helpers._triageMustache.call(depth0, "data.1.date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></h3> </div> <div class=\"col-xs-2\"> <p class=\"num\">");
  stack1 = helpers._triageMustache.call(depth0, "data.1.num", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> </div> </div> ");
  stack1 = helpers.each.call(depth0, "data", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div> <div class=\"row bot-pad-show\"> </div> </div> </div>");
  return buffer;
  
});

Ember.TEMPLATES["responses"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" <div class=\"row response-wrapper\"> <div class=\"top-pad\"> <div class=\"row\"> <div class=\"col-xs-10\"> <h3>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"date\">");
  stack1 = helpers._triageMustache.call(depth0, "date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></h3> <p class=\"question\">");
  stack1 = helpers._triageMustache.call(depth0, "question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> </div> <div class=\"col-xs-2\"> <p class=\"num\">");
  stack1 = helpers._triageMustache.call(depth0, "num", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> </div> </div> <div class=\"row\"> <div class=\"col-xs-12\"> <p>");
  stack1 = helpers._triageMustache.call(depth0, "answer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> </div> </div> </div> <div class=\"row bot-pad\"> <div class=\"col-xs-2\"> <p class=\"btn btn-primary form-control\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "response", "id", options) : helperMissing.call(depth0, "link-to", "response", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> </div> </div> </div> ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("View");
  }

  data.buffer.push("<div class=\"abs\"> ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div> ");
  return buffer;
  
});