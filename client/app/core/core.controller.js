System.register(["angular"],function(_export){var angular,_createClass,_classCallCheck,CoreCtrl;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";_createClass=function(){function defineProperties(target,props){for(var key in props){var prop=props[key];prop.configurable=!0,prop.value&&(prop.writable=!0)}Object.defineProperties(target,props)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")},CoreCtrl=function(){function CoreCtrl($scope,$mdMedia,$stateParams,Config,chapter){_classCallCheck(this,CoreCtrl),this.$scope=$scope,this.$scope.chapter=chapter,this.$mdMedia=$mdMedia,this.Config=Config,this.$scope.sections=["00-introduction","01-character-creation","02-actions-attributes","03-banes-boons","04-feats","05-perks-flaws","06-wealth-equipment","07-combat","08-running-the-game","09-special-equipment"]}return _createClass(CoreCtrl,{getChapterIndex:{value:function(chapter){return this.$scope.sections.indexOf(chapter)}}}),CoreCtrl}(),_export("default",CoreCtrl)}}});