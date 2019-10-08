(function(global) {
	"use strict";
	var lab = {
		getId: function (id) {
			return document.getElementById(id);
		},
		getClass: function (className) {
			return document.getElementsByClassName(className);
		}
	};
	global.z = lab;
})(typeof window === 'undefind' ? window : this);