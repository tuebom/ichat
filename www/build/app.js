// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'App' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic', 'ngCordova', 'ngAnimate', 'monospaced.elastic', 'angularMoment'])

.run(['$ionicPlatform',
      function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])
.config(['$stateProvider',
         '$urlRouterProvider',
         '$ionicConfigProvider',
         '$compileProvider',
         function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content|ms-appx|x-wmapp0):|data:image\/|img\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
    
    $ionicConfigProvider.scrolling.jsScrolling(ionic.Platform.isIOS());
    
    $stateProvider
        .state('home', {
            url: "/home",
            cache: false,
            templateUrl: "templates/home.html",
            controller: 'HomeController'
        });
        
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("home");
    });
}]);

(function () {
    'use strict';

    angular
        .module('App')
        .factory('MockService', MockService);

    MockService.$inject = ['$http', '$q'];
    function MockService($http, $q) {
        var me = {};

        me.getUserMessages = function (d) {
            /*
            var endpoint =
              'http://www.mocky.io/v2/547cf341501c337f0c9a63fd?callback=JSON_CALLBACK';
            return $http.jsonp(endpoint).then(function(response) {
              return response.data;
            }, function(err) {
              console.log('get user messages error, err: ' + JSON.stringify(
                err, null, 2));
            });
            */
            var deferred = $q.defer();

            setTimeout(function () {
                deferred.resolve(getMockMessages());
            }, 1500);

            return deferred.promise;
        };

        me.getMockMessage = function () {
            return {
                userId: '534b8e5aaa5e7afc1b23e69b',
                date: new Date(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            };
        }

        return me;
    }

    function getMockMessages() {
        return {
            "messages": [
                { "_id": "535d625f898df4e80e2a125e", "text": "Ionic has changed the game for hybrid app development.", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-04-27T20:02:39.082Z", "read": true, "readDate": "2014-12-01T06:27:37.944Z" }, { "_id": "535f13ffee3b2a68112b9fc0", "text": "I like Ionic better than ice cream!", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-04-29T02:52:47.706Z", "read": true, "readDate": "2014-12-01T06:27:37.944Z" }, { "_id": "546a5843fd4c5d581efa263a", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-17T20:19:15.289Z", "read": true, "readDate": "2014-12-01T06:27:38.328Z" }, { "_id": "54764399ab43d1d4113abfd1", "text": "Am I dreaming?", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-26T21:18:17.591Z", "read": true, "readDate": "2014-12-01T06:27:38.337Z" }, { "_id": "547643aeab43d1d4113abfd2", "text": "Is this magic?", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-26T21:18:38.549Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "547815dbab43d1d4113abfef", "text": "Gee wiz, this is something special.", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-28T06:27:40.001Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "54781c69ab43d1d4113abff0", "text": "I think I like Ionic more than I like ice cream!", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-28T06:55:37.350Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "54781ca4ab43d1d4113abff1", "text": "Yea, it's pretty sweet", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-28T06:56:36.472Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" }, { "_id": "5478df86ab43d1d4113abff4", "text": "Wow, this is really something huh?", "userId": "534b8fb2aa5e7afc1b23e69c", "date": "2014-11-28T20:48:06.572Z", "read": true, "readDate": "2014-12-01T06:27:38.339Z" }, { "_id": "54781ca4ab43d1d4113abff1", "text": "Create amazing apps - ionicframework.com", "userId": "534b8e5aaa5e7afc1b23e69b", "date": "2014-11-29T06:56:36.472Z", "read": true, "readDate": "2014-12-01T06:27:38.338Z" },
                { "_id": "535d625f898df4e80e2a126e", "photo": "http://ionicframework.com/img/homepage/phones-viewapp_2x.png", "userId": "546a5843fd4c5d581efa263a", "date": "2015-08-25T20:02:39.082Z", "read": true, "readDate": "2014-13-02T06:27:37.944Z" }], "unread": 0
        };
    }
})();
(function () {
	'use strict';

	angular
		.module('App')
		.factory('Modals', Modals);

	Modals.$inject = ['$ionicModal'];
	function Modals($ionicModal) {

		var modals = [];

		var _openModal = function ($scope, templateUrl, animation) {
			return $ionicModal.fromTemplateUrl(templateUrl, {
				scope: $scope,
				animation: animation || 'slide-in-up',
				backdropClickToClose: false
			}).then(function (modal) {
				modals.push(modal);
				modal.show();
			});
		};

		var _closeModal = function () {
			var currentModal = modals.splice(-1, 1)[0];
			currentModal.remove();
		};

		var _closeAllModals = function () {
			modals.map(function (modal) {
				modal.remove();
			});
			modals = [];
		};

		return {
			openModal: _openModal,
			closeModal: _closeModal,
			closeAllModals: _closeAllModals
		};
	}
})();
(function () {
	'use strict';

	angular
		.module('App')
		.factory('Model', Model);

	//Model.$inject = ['Users'];
	function Model() {

		return {
			
		};
	}
})();
(function () {
    'use strict';

    angular
        .module('App')
        .filter('nl2br', nl2br);

    //nl2br.$inject = [];
    function nl2br() {

        return function(data) {
            if (!data) return data;
            return data.replace(/\n\r?/g, '<br />');
        };
    }
})();
(function (Autolinker) {
    'use strict';

    angular
        .module('App')
        .directive('autolinker', autolinker);

    autolinker.$inject = ['$timeout'];
    function autolinker($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $timeout(function () {
                    var eleHtml = element.html();

                    if (eleHtml === '') {
                        return false;
                    }

                    var text = Autolinker.link(eleHtml, {
                        className: 'autolinker',
                        newWindow: false
                    });

                    element.html(text);

                    var autolinks = element[0].getElementsByClassName('autolinker');

                    for (var i = 0; i < autolinks.length; i++) {
                        angular.element(autolinks[i]).bind('click', function (e) {
                            var href = e.target.href;
                            if (href) {
                                //window.open(href, '_system');
                                window.open(href, '_blank');
                            }
                            e.preventDefault();
                            return false;
                        });
                    }
                }, 0);
            }
        }
    }
})(Autolinker);
(function () {
    'use strict';

    angular
        .module('App')
        .directive('img', img);

    img.$inject = ['$parse'];
    function img($parse) {
        function endsWith(url, path) {
            var index = url.length - path.length;
            return url.indexOf(path, index) !== -1;
        }

        return {
            restrict: 'E',
            link: function (scope, element, attributes) {

                element.on('error', function (ev) {
                    var src = this.src;
                    var fn = attributes.ngError && $parse(attributes.ngError);
                    // If theres an ng-error callback then call it
                    if (fn) {
                        scope.$apply(function () {
                            fn(scope, { $event: ev, $src: src });
                        });
                    }

                    // If theres an ng-error-src then set it
                    if (attributes.ngErrorSrc && !endsWith(src, attributes.ngErrorSrc)) {
                        element.attr('src', attributes.ngErrorSrc);
                    }
                });

                element.on('load', function (ev) {
                    var fn = attributes.ngSuccess && $parse(attributes.ngSuccess);
                    if (fn) {
                        scope.$apply(function () {
                            fn(scope, { $event: ev });
                        });
                    }
                });
            }
        }
    }
})();
(function () {
	'use strict';

	angular
		.module('App')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$rootScope', '$state',
  '$stateParams', 'MockService',
  '$ionicPopup', '$ionicPopover', '$ionicScrollDelegate', '$timeout', '$interval',
  '$ionicActionSheet', '$filter', '$ionicModal'];
	function HomeController($scope, $rootScope, $state, $stateParams, MockService,
    $ionicPopup, $ionicPopover, $ionicScrollDelegate, $timeout, $interval, $ionicActionSheet, $filter, $ionicModal) {

		// mock acquiring data via $stateParams
		$scope.toUser = {
			_id: '534b8e5aaa5e7afc1b23e69b',
			pic: 'http://www.nicholls.co/images/nicholls.jpg',
			username: 'Nicholls'
		}

		// this could be on $rootScope rather than in $stateParams
		$scope.user = {
			_id: '534b8fb2aa5e7afc1b23e69c',
			pic: 'http://ionicframework.com/img/docs/mcfly.jpg',
			username: 'Marty'
		};

		$scope.input = {
			message: localStorage['userMessage-' + $scope.toUser._id] || ''
		};

    $ionicPopover.fromTemplateUrl('templates/modals/popover.html', {
        scope: $scope
    }).then(function (popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
        $scope.popover.show($event);
    };

		var messageCheckTimer;

		var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
		var footerBar; // gets set in $ionicView.enter
		var scroller;
		var txtInput; // ^^^

		$scope.$on('$ionicView.enter', function () {
			getMessages();

			$timeout(function () {
				footerBar = document.body.querySelector('.homeView .bar-footer');
				scroller = document.body.querySelector('.homeView .scroll-content');
				txtInput = angular.element(footerBar.querySelector('textarea'));
			}, 0);

			messageCheckTimer = $interval(function () {
				// here you could check for new messages if your app doesn't use push notifications or user disabled them
			}, 20000);
		});

		$scope.$on('$ionicView.leave', function () {
			// Make sure that the interval is destroyed
			if (angular.isDefined(messageCheckTimer)) {
				$interval.cancel(messageCheckTimer);
				messageCheckTimer = undefined;
			}
		});

		$scope.$on('$ionicView.beforeLeave', function () {
			if (!$scope.input.message || $scope.input.message === '') {
				localStorage.removeItem('userMessage-' + $scope.toUser._id);
			}
		});

		function getMessages() {
			// the service is mock but you would probably pass the toUser's GUID here
			MockService.getUserMessages({
				toUserId: $scope.toUser._id
			}).then(function (data) {
				$scope.doneLoading = true;
				$scope.messages = data.messages;
			});
		}

		$scope.$watch('input.message', function (newValue, oldValue) {
			console.log('input.message $watch, newValue ' + newValue);
			if (!newValue) newValue = '';
			localStorage['userMessage-' + $scope.toUser._id] = newValue;
		});

		var addMessage = function (message) {
			message._id = new Date().getTime(); // :~)
			message.date = new Date();
			message.username = $scope.user.username;
			message.userId = $scope.user._id;
			message.pic = $scope.user.picture;
			$scope.messages.push(message);
		};
		
		var lastPhoto = 'img/donut.png';

		$scope.sendPhoto = function () {
			$ionicActionSheet.show({
				buttons: [
					{ text: 'Take Photo' },
					{ text: 'Photo from Library' }
				],
				titleText: 'Upload image',
				cancelText: 'Cancel',
				buttonClicked: function (index) {
					
					var message = {
						toId: $scope.toUser._id,
						photo: lastPhoto
					};
					lastPhoto = lastPhoto === 'img/donut.png' ? 'img/woho.png' : 'img/donut.png';
					addMessage(message);

					$timeout(function () {
						var message = MockService.getMockMessage();
						message.date = new Date();
						$scope.messages.push(message);
					}, 2000);
					return true;
				}
			});
		};

		$scope.sendMessage = function (sendMessageForm) {
			var message = {
				toId: $scope.toUser._id,
				text: $scope.input.message
			};

			// if you do a web service call this will be needed as well as before the viewScroll calls
			// you can't see the effect of this in the browser it needs to be used on a real device
			// for some reason the one time blur event is not firing in the browser but does on devices
			keepKeyboardOpen();

			//MockService.sendMessage(message).then(function(data) {
			$scope.input.message = '';

			addMessage(message);
			$timeout(function () {
				keepKeyboardOpen();
			}, 0);

			$timeout(function () {
				var message = MockService.getMockMessage();
				message.date = new Date();
				$scope.messages.push(message);
				keepKeyboardOpen();
			}, 2000);
			//});
		};

		// this keeps the keyboard open on a device only after sending a message, it is non obtrusive
		function keepKeyboardOpen() {
			console.log('keepKeyboardOpen');
			txtInput.one('blur', function () {
				console.log('textarea blur, focus back on it');
				txtInput[0].focus();
			});
		}
		$scope.refreshScroll = function (scrollBottom, timeout) {
			$timeout(function () {
				scrollBottom = scrollBottom || $scope.scrollDown;
				viewScroll.resize();
				if (scrollBottom) {
					viewScroll.scrollBottom(true);
				}
				$scope.checkScroll();
			}, timeout || 1000);
		};
		$scope.scrollDown = true;
		$scope.checkScroll = function () {
			$timeout(function () {
				var currentTop = viewScroll.getScrollPosition().top;
				var maxScrollableDistanceFromTop = viewScroll.getScrollView().__maxScrollTop;
				$scope.scrollDown = (currentTop >= maxScrollableDistanceFromTop);
				$scope.$apply();
			}, 0);
			return true;
		};

		var openModal = function (templateUrl) {
			return $ionicModal.fromTemplateUrl(templateUrl, {
				scope: $scope,
				animation: 'slide-in-up',
				backdropClickToClose: false
			}).then(function (modal) {
				modal.show();
				$scope.modal = modal;
			});
		};

		$scope.photoBrowser = function (message) {
			var messages = $filter('orderBy')($filter('filter')($scope.messages, { photo: '' }), 'date');
			$scope.activeSlide = messages.indexOf(message);
			$scope.allImages = messages.map(function (message) {
				return message.photo;
			});

			openModal('templates/modals/fullscreenImages.html');
		};

		$scope.closeModal = function () {
			$scope.modal.remove();
		};

		$scope.onMessageHold = function (e, itemIndex, message) {
			console.log('onMessageHold');
			console.log('message: ' + JSON.stringify(message, null, 2));
			$ionicActionSheet.show({
				buttons: [{
					text: 'Copy Text'
				}, {
						text: 'Delete Message'
					}],
				buttonClicked: function (index) {
					switch (index) {
						case 0: // Copy Text
							//cordova.plugins.clipboard.copy(message.text);

							break;
						case 1: // Delete
							// no server side secrets here :~)
							$scope.messages.splice(itemIndex, 1);
							$timeout(function () {
								viewScroll.resize();
							}, 0);

							break;
					}

					return true;
				}
			});
		};

		// this prob seems weird here but I have reasons for this in my app, secret!
		$scope.viewProfile = function (msg) {
			if (msg.userId === $scope.user._id) {
				// go to your profile
			} else {
				// go to other users profile
			}
		};

		$scope.$on('elastic:resize', function (event, element, oldHeight, newHeight) {
			if (!footerBar) return;

			var newFooterHeight = newHeight + 10;
			newFooterHeight = (newFooterHeight > 44) ? newFooterHeight : 44;

			footerBar.style.height = newFooterHeight + 'px';
			scroller.style.bottom = newFooterHeight + 'px';
		});

	}
})();
/* global ionic */
(function (angular, ionic) {
	"use strict";

	ionic.Platform.isIE = function () {
		return ionic.Platform.ua.toLowerCase().indexOf('trident') > -1;
	}

	if (ionic.Platform.isIE()) {
		angular.module('ionic')
			.factory('$ionicNgClick', ['$parse', '$timeout', function ($parse, $timeout) {
				return function (scope, element, clickExpr) {
					var clickHandler = angular.isFunction(clickExpr) ? clickExpr : $parse(clickExpr);

					element.on('click', function (event) {
						scope.$apply(function () {
							if (scope.clicktimer) return; // Second call
							clickHandler(scope, { $event: (event) });
							scope.clicktimer = $timeout(function () { delete scope.clicktimer; }, 1, false);
						});
					});

					// Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
					// something else nearby.
					element.onclick = function (event) { };
				};
			}]);
	}

	function SelectDirective() {
		'use strict';

		return {
			restrict: 'E',
			replace: false,
			link: function (scope, element) {
				if (ionic.Platform && (ionic.Platform.isWindowsPhone() || ionic.Platform.isIE() || ionic.Platform.platform() === "edge")) {
					element.attr('data-tap-disabled', 'true');
				}
			}
		};
	}

	angular.module('ionic')
    .directive('select', SelectDirective);

	/*angular.module('ionic-datepicker')
	.directive('select', SelectDirective);*/

})(angular, ionic);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNlcnZpY2VzL21vY2tTZXJ2aWNlLmpzIiwic2VydmljZXMvbW9kYWxzLmpzIiwic2VydmljZXMvbW9kZWwuanMiLCJmaWx0ZXJzL25sMmJyLmpzIiwiZGlyZWN0aXZlcy9hdXRvbGlua2VyLmpzIiwiZGlyZWN0aXZlcy9pbWcuanMiLCJjb250cm9sbGVycy9ob21lLmpzIiwiaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFN0YXJ0ZXIgQXBwXG5cbi8vIGFuZ3VsYXIubW9kdWxlIGlzIGEgZ2xvYmFsIHBsYWNlIGZvciBjcmVhdGluZywgcmVnaXN0ZXJpbmcgYW5kIHJldHJpZXZpbmcgQW5ndWxhciBtb2R1bGVzXG4vLyAnQXBwJyBpcyB0aGUgbmFtZSBvZiB0aGlzIGFuZ3VsYXIgbW9kdWxlIGV4YW1wbGUgKGFsc28gc2V0IGluIGEgPGJvZHk+IGF0dHJpYnV0ZSBpbiBpbmRleC5odG1sKVxuLy8gdGhlIDJuZCBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgJ3JlcXVpcmVzJ1xuYW5ndWxhci5tb2R1bGUoJ0FwcCcsIFsnaW9uaWMnLCAnbmdDb3Jkb3ZhJywgJ25nQW5pbWF0ZScsICdtb25vc3BhY2VkLmVsYXN0aWMnLCAnYW5ndWxhck1vbWVudCddKVxuXG4ucnVuKFsnJGlvbmljUGxhdGZvcm0nLFxuICAgICAgZnVuY3Rpb24oJGlvbmljUGxhdGZvcm0pIHtcbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgaWYod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcblxuICAgICAgLy8gRG9uJ3QgcmVtb3ZlIHRoaXMgbGluZSB1bmxlc3MgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLiBJdCBzdG9wcyB0aGUgdmlld3BvcnRcbiAgICAgIC8vIGZyb20gc25hcHBpbmcgd2hlbiB0ZXh0IGlucHV0cyBhcmUgZm9jdXNlZC4gSW9uaWMgaGFuZGxlcyB0aGlzIGludGVybmFsbHkgZm9yXG4gICAgICAvLyBhIG11Y2ggbmljZXIga2V5Ym9hcmQgZXhwZXJpZW5jZS5cbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuICAgIH1cbiAgICBpZih3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1dKVxuLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJyxcbiAgICAgICAgICckdXJsUm91dGVyUHJvdmlkZXInLFxuICAgICAgICAgJyRpb25pY0NvbmZpZ1Byb3ZpZGVyJyxcbiAgICAgICAgICckY29tcGlsZVByb3ZpZGVyJyxcbiAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkaW9uaWNDb25maWdQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlcikge1xuXG4gICAgJGNvbXBpbGVQcm92aWRlci5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3QoL15cXHMqKGh0dHBzP3xmdHB8ZmlsZXxibG9ifGNvbnRlbnR8bXMtYXBweHx4LXdtYXBwMCk6fGRhdGE6aW1hZ2VcXC98aW1nXFwvLyk7XG4gICAgJGNvbXBpbGVQcm92aWRlci5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdCgvXlxccyooaHR0cHM/fGZ0cHxtYWlsdG98ZmlsZXxnaHR0cHM/fG1zLWFwcHh8eC13bWFwcDApOi8pO1xuICAgIFxuICAgICRpb25pY0NvbmZpZ1Byb3ZpZGVyLnNjcm9sbGluZy5qc1Njcm9sbGluZyhpb25pYy5QbGF0Zm9ybS5pc0lPUygpKTtcbiAgICBcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2hvbWVcIixcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcInRlbXBsYXRlcy9ob21lLmh0bWxcIixcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcidcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoZnVuY3Rpb24gKCRpbmplY3RvciwgJGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciAkc3RhdGUgPSAkaW5qZWN0b3IuZ2V0KFwiJHN0YXRlXCIpO1xuICAgICAgICAkc3RhdGUuZ28oXCJob21lXCIpO1xuICAgIH0pO1xufV0pO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ0FwcCcpXG4gICAgICAgIC5mYWN0b3J5KCdNb2NrU2VydmljZScsIE1vY2tTZXJ2aWNlKTtcblxuICAgIE1vY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJ107XG4gICAgZnVuY3Rpb24gTW9ja1NlcnZpY2UoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBtZSA9IHt9O1xuXG4gICAgICAgIG1lLmdldFVzZXJNZXNzYWdlcyA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgdmFyIGVuZHBvaW50ID1cbiAgICAgICAgICAgICAgJ2h0dHA6Ly93d3cubW9ja3kuaW8vdjIvNTQ3Y2YzNDE1MDFjMzM3ZjBjOWE2M2ZkP2NhbGxiYWNrPUpTT05fQ0FMTEJBQ0snO1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmpzb25wKGVuZHBvaW50KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgdXNlciBtZXNzYWdlcyBlcnJvciwgZXJyOiAnICsgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgZXJyLCBudWxsLCAyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGdldE1vY2tNZXNzYWdlcygpKTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5nZXRNb2NrTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiAnNTM0YjhlNWFhYTVlN2FmYzFiMjNlNjliJyxcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4nXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1vY2tNZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwibWVzc2FnZXNcIjogW1xuICAgICAgICAgICAgICAgIHsgXCJfaWRcIjogXCI1MzVkNjI1Zjg5OGRmNGU4MGUyYTEyNWVcIiwgXCJ0ZXh0XCI6IFwiSW9uaWMgaGFzIGNoYW5nZWQgdGhlIGdhbWUgZm9yIGh5YnJpZCBhcHAgZGV2ZWxvcG1lbnQuXCIsIFwidXNlcklkXCI6IFwiNTM0YjhmYjJhYTVlN2FmYzFiMjNlNjljXCIsIFwiZGF0ZVwiOiBcIjIwMTQtMDQtMjdUMjA6MDI6MzkuMDgyWlwiLCBcInJlYWRcIjogdHJ1ZSwgXCJyZWFkRGF0ZVwiOiBcIjIwMTQtMTItMDFUMDY6Mjc6MzcuOTQ0WlwiIH0sIHsgXCJfaWRcIjogXCI1MzVmMTNmZmVlM2IyYTY4MTEyYjlmYzBcIiwgXCJ0ZXh0XCI6IFwiSSBsaWtlIElvbmljIGJldHRlciB0aGFuIGljZSBjcmVhbSFcIiwgXCJ1c2VySWRcIjogXCI1MzRiOGU1YWFhNWU3YWZjMWIyM2U2OWJcIiwgXCJkYXRlXCI6IFwiMjAxNC0wNC0yOVQwMjo1Mjo0Ny43MDZaXCIsIFwicmVhZFwiOiB0cnVlLCBcInJlYWREYXRlXCI6IFwiMjAxNC0xMi0wMVQwNjoyNzozNy45NDRaXCIgfSwgeyBcIl9pZFwiOiBcIjU0NmE1ODQzZmQ0YzVkNTgxZWZhMjYzYVwiLCBcInRleHRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsIFwidXNlcklkXCI6IFwiNTM0YjhmYjJhYTVlN2FmYzFiMjNlNjljXCIsIFwiZGF0ZVwiOiBcIjIwMTQtMTEtMTdUMjA6MTk6MTUuMjg5WlwiLCBcInJlYWRcIjogdHJ1ZSwgXCJyZWFkRGF0ZVwiOiBcIjIwMTQtMTItMDFUMDY6Mjc6MzguMzI4WlwiIH0sIHsgXCJfaWRcIjogXCI1NDc2NDM5OWFiNDNkMWQ0MTEzYWJmZDFcIiwgXCJ0ZXh0XCI6IFwiQW0gSSBkcmVhbWluZz9cIiwgXCJ1c2VySWRcIjogXCI1MzRiOGU1YWFhNWU3YWZjMWIyM2U2OWJcIiwgXCJkYXRlXCI6IFwiMjAxNC0xMS0yNlQyMToxODoxNy41OTFaXCIsIFwicmVhZFwiOiB0cnVlLCBcInJlYWREYXRlXCI6IFwiMjAxNC0xMi0wMVQwNjoyNzozOC4zMzdaXCIgfSwgeyBcIl9pZFwiOiBcIjU0NzY0M2FlYWI0M2QxZDQxMTNhYmZkMlwiLCBcInRleHRcIjogXCJJcyB0aGlzIG1hZ2ljP1wiLCBcInVzZXJJZFwiOiBcIjUzNGI4ZmIyYWE1ZTdhZmMxYjIzZTY5Y1wiLCBcImRhdGVcIjogXCIyMDE0LTExLTI2VDIxOjE4OjM4LjU0OVpcIiwgXCJyZWFkXCI6IHRydWUsIFwicmVhZERhdGVcIjogXCIyMDE0LTEyLTAxVDA2OjI3OjM4LjMzOFpcIiB9LCB7IFwiX2lkXCI6IFwiNTQ3ODE1ZGJhYjQzZDFkNDExM2FiZmVmXCIsIFwidGV4dFwiOiBcIkdlZSB3aXosIHRoaXMgaXMgc29tZXRoaW5nIHNwZWNpYWwuXCIsIFwidXNlcklkXCI6IFwiNTM0YjhlNWFhYTVlN2FmYzFiMjNlNjliXCIsIFwiZGF0ZVwiOiBcIjIwMTQtMTEtMjhUMDY6Mjc6NDAuMDAxWlwiLCBcInJlYWRcIjogdHJ1ZSwgXCJyZWFkRGF0ZVwiOiBcIjIwMTQtMTItMDFUMDY6Mjc6MzguMzM4WlwiIH0sIHsgXCJfaWRcIjogXCI1NDc4MWM2OWFiNDNkMWQ0MTEzYWJmZjBcIiwgXCJ0ZXh0XCI6IFwiSSB0aGluayBJIGxpa2UgSW9uaWMgbW9yZSB0aGFuIEkgbGlrZSBpY2UgY3JlYW0hXCIsIFwidXNlcklkXCI6IFwiNTM0YjhmYjJhYTVlN2FmYzFiMjNlNjljXCIsIFwiZGF0ZVwiOiBcIjIwMTQtMTEtMjhUMDY6NTU6MzcuMzUwWlwiLCBcInJlYWRcIjogdHJ1ZSwgXCJyZWFkRGF0ZVwiOiBcIjIwMTQtMTItMDFUMDY6Mjc6MzguMzM4WlwiIH0sIHsgXCJfaWRcIjogXCI1NDc4MWNhNGFiNDNkMWQ0MTEzYWJmZjFcIiwgXCJ0ZXh0XCI6IFwiWWVhLCBpdCdzIHByZXR0eSBzd2VldFwiLCBcInVzZXJJZFwiOiBcIjUzNGI4ZTVhYWE1ZTdhZmMxYjIzZTY5YlwiLCBcImRhdGVcIjogXCIyMDE0LTExLTI4VDA2OjU2OjM2LjQ3MlpcIiwgXCJyZWFkXCI6IHRydWUsIFwicmVhZERhdGVcIjogXCIyMDE0LTEyLTAxVDA2OjI3OjM4LjMzOFpcIiB9LCB7IFwiX2lkXCI6IFwiNTQ3OGRmODZhYjQzZDFkNDExM2FiZmY0XCIsIFwidGV4dFwiOiBcIldvdywgdGhpcyBpcyByZWFsbHkgc29tZXRoaW5nIGh1aD9cIiwgXCJ1c2VySWRcIjogXCI1MzRiOGZiMmFhNWU3YWZjMWIyM2U2OWNcIiwgXCJkYXRlXCI6IFwiMjAxNC0xMS0yOFQyMDo0ODowNi41NzJaXCIsIFwicmVhZFwiOiB0cnVlLCBcInJlYWREYXRlXCI6IFwiMjAxNC0xMi0wMVQwNjoyNzozOC4zMzlaXCIgfSwgeyBcIl9pZFwiOiBcIjU0NzgxY2E0YWI0M2QxZDQxMTNhYmZmMVwiLCBcInRleHRcIjogXCJDcmVhdGUgYW1hemluZyBhcHBzIC0gaW9uaWNmcmFtZXdvcmsuY29tXCIsIFwidXNlcklkXCI6IFwiNTM0YjhlNWFhYTVlN2FmYzFiMjNlNjliXCIsIFwiZGF0ZVwiOiBcIjIwMTQtMTEtMjlUMDY6NTY6MzYuNDcyWlwiLCBcInJlYWRcIjogdHJ1ZSwgXCJyZWFkRGF0ZVwiOiBcIjIwMTQtMTItMDFUMDY6Mjc6MzguMzM4WlwiIH0sXG4gICAgICAgICAgICAgICAgeyBcIl9pZFwiOiBcIjUzNWQ2MjVmODk4ZGY0ZTgwZTJhMTI2ZVwiLCBcInBob3RvXCI6IFwiaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9pbWcvaG9tZXBhZ2UvcGhvbmVzLXZpZXdhcHBfMngucG5nXCIsIFwidXNlcklkXCI6IFwiNTQ2YTU4NDNmZDRjNWQ1ODFlZmEyNjNhXCIsIFwiZGF0ZVwiOiBcIjIwMTUtMDgtMjVUMjA6MDI6MzkuMDgyWlwiLCBcInJlYWRcIjogdHJ1ZSwgXCJyZWFkRGF0ZVwiOiBcIjIwMTQtMTMtMDJUMDY6Mjc6MzcuOTQ0WlwiIH1dLCBcInVucmVhZFwiOiAwXG4gICAgICAgIH07XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ0FwcCcpXG5cdFx0LmZhY3RvcnkoJ01vZGFscycsIE1vZGFscyk7XG5cblx0TW9kYWxzLiRpbmplY3QgPSBbJyRpb25pY01vZGFsJ107XG5cdGZ1bmN0aW9uIE1vZGFscygkaW9uaWNNb2RhbCkge1xuXG5cdFx0dmFyIG1vZGFscyA9IFtdO1xuXG5cdFx0dmFyIF9vcGVuTW9kYWwgPSBmdW5jdGlvbiAoJHNjb3BlLCB0ZW1wbGF0ZVVybCwgYW5pbWF0aW9uKSB7XG5cdFx0XHRyZXR1cm4gJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKHRlbXBsYXRlVXJsLCB7XG5cdFx0XHRcdHNjb3BlOiAkc2NvcGUsXG5cdFx0XHRcdGFuaW1hdGlvbjogYW5pbWF0aW9uIHx8ICdzbGlkZS1pbi11cCcsXG5cdFx0XHRcdGJhY2tkcm9wQ2xpY2tUb0Nsb3NlOiBmYWxzZVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbiAobW9kYWwpIHtcblx0XHRcdFx0bW9kYWxzLnB1c2gobW9kYWwpO1xuXHRcdFx0XHRtb2RhbC5zaG93KCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIF9jbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGN1cnJlbnRNb2RhbCA9IG1vZGFscy5zcGxpY2UoLTEsIDEpWzBdO1xuXHRcdFx0Y3VycmVudE1vZGFsLnJlbW92ZSgpO1xuXHRcdH07XG5cblx0XHR2YXIgX2Nsb3NlQWxsTW9kYWxzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bW9kYWxzLm1hcChmdW5jdGlvbiAobW9kYWwpIHtcblx0XHRcdFx0bW9kYWwucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHRcdG1vZGFscyA9IFtdO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0b3Blbk1vZGFsOiBfb3Blbk1vZGFsLFxuXHRcdFx0Y2xvc2VNb2RhbDogX2Nsb3NlTW9kYWwsXG5cdFx0XHRjbG9zZUFsbE1vZGFsczogX2Nsb3NlQWxsTW9kYWxzXG5cdFx0fTtcblx0fVxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ0FwcCcpXG5cdFx0LmZhY3RvcnkoJ01vZGVsJywgTW9kZWwpO1xuXG5cdC8vTW9kZWwuJGluamVjdCA9IFsnVXNlcnMnXTtcblx0ZnVuY3Rpb24gTW9kZWwoKSB7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XG5cdFx0fTtcblx0fVxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnQXBwJylcbiAgICAgICAgLmZpbHRlcignbmwyYnInLCBubDJicik7XG5cbiAgICAvL25sMmJyLiRpbmplY3QgPSBbXTtcbiAgICBmdW5jdGlvbiBubDJicigpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnJlcGxhY2UoL1xcblxccj8vZywgJzxiciAvPicpO1xuICAgICAgICB9O1xuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uIChBdXRvbGlua2VyKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdBcHAnKVxuICAgICAgICAuZGlyZWN0aXZlKCdhdXRvbGlua2VyJywgYXV0b2xpbmtlcik7XG5cbiAgICBhdXRvbGlua2VyLiRpbmplY3QgPSBbJyR0aW1lb3V0J107XG4gICAgZnVuY3Rpb24gYXV0b2xpbmtlcigkdGltZW91dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVIdG1sID0gZWxlbWVudC5odG1sKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZUh0bWwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IEF1dG9saW5rZXIubGluayhlbGVIdG1sLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhdXRvbGlua2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1dpbmRvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5odG1sKHRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvbGlua3MgPSBlbGVtZW50WzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F1dG9saW5rZXInKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF1dG9saW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGF1dG9saW5rc1tpXSkuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gZS50YXJnZXQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5vcGVuKGhyZWYsICdfc3lzdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGhyZWYsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KShBdXRvbGlua2VyKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnQXBwJylcbiAgICAgICAgLmRpcmVjdGl2ZSgnaW1nJywgaW1nKTtcblxuICAgIGltZy4kaW5qZWN0ID0gWyckcGFyc2UnXTtcbiAgICBmdW5jdGlvbiBpbWcoJHBhcnNlKSB7XG4gICAgICAgIGZ1bmN0aW9uIGVuZHNXaXRoKHVybCwgcGF0aCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdXJsLmxlbmd0aCAtIHBhdGgubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHVybC5pbmRleE9mKHBhdGgsIGluZGV4KSAhPT0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IHRoaXMuc3JjO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBhdHRyaWJ1dGVzLm5nRXJyb3IgJiYgJHBhcnNlKGF0dHJpYnV0ZXMubmdFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlcyBhbiBuZy1lcnJvciBjYWxsYmFjayB0aGVuIGNhbGwgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuKHNjb3BlLCB7ICRldmVudDogZXYsICRzcmM6IHNyYyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmVzIGFuIG5nLWVycm9yLXNyYyB0aGVuIHNldCBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5uZ0Vycm9yU3JjICYmICFlbmRzV2l0aChzcmMsIGF0dHJpYnV0ZXMubmdFcnJvclNyYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignc3JjJywgYXR0cmlidXRlcy5uZ0Vycm9yU3JjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbignbG9hZCcsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBhdHRyaWJ1dGVzLm5nU3VjY2VzcyAmJiAkcGFyc2UoYXR0cmlidXRlcy5uZ1N1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4oc2NvcGUsIHsgJGV2ZW50OiBldiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnQXBwJylcblx0XHQuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBIb21lQ29udHJvbGxlcik7XG5cblx0SG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJyxcbiAgJyRzdGF0ZVBhcmFtcycsICdNb2NrU2VydmljZScsXG4gICckaW9uaWNQb3B1cCcsICckaW9uaWNQb3BvdmVyJywgJyRpb25pY1Njcm9sbERlbGVnYXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsXG4gICckaW9uaWNBY3Rpb25TaGVldCcsICckZmlsdGVyJywgJyRpb25pY01vZGFsJ107XG5cdGZ1bmN0aW9uIEhvbWVDb250cm9sbGVyKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE1vY2tTZXJ2aWNlLFxuICAgICRpb25pY1BvcHVwLCAkaW9uaWNQb3BvdmVyLCAkaW9uaWNTY3JvbGxEZWxlZ2F0ZSwgJHRpbWVvdXQsICRpbnRlcnZhbCwgJGlvbmljQWN0aW9uU2hlZXQsICRmaWx0ZXIsICRpb25pY01vZGFsKSB7XG5cblx0XHQvLyBtb2NrIGFjcXVpcmluZyBkYXRhIHZpYSAkc3RhdGVQYXJhbXNcblx0XHQkc2NvcGUudG9Vc2VyID0ge1xuXHRcdFx0X2lkOiAnNTM0YjhlNWFhYTVlN2FmYzFiMjNlNjliJyxcblx0XHRcdHBpYzogJ2h0dHA6Ly93d3cubmljaG9sbHMuY28vaW1hZ2VzL25pY2hvbGxzLmpwZycsXG5cdFx0XHR1c2VybmFtZTogJ05pY2hvbGxzJ1xuXHRcdH1cblxuXHRcdC8vIHRoaXMgY291bGQgYmUgb24gJHJvb3RTY29wZSByYXRoZXIgdGhhbiBpbiAkc3RhdGVQYXJhbXNcblx0XHQkc2NvcGUudXNlciA9IHtcblx0XHRcdF9pZDogJzUzNGI4ZmIyYWE1ZTdhZmMxYjIzZTY5YycsXG5cdFx0XHRwaWM6ICdodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2ltZy9kb2NzL21jZmx5LmpwZycsXG5cdFx0XHR1c2VybmFtZTogJ01hcnR5J1xuXHRcdH07XG5cblx0XHQkc2NvcGUuaW5wdXQgPSB7XG5cdFx0XHRtZXNzYWdlOiBsb2NhbFN0b3JhZ2VbJ3VzZXJNZXNzYWdlLScgKyAkc2NvcGUudG9Vc2VyLl9pZF0gfHwgJydcblx0XHR9O1xuXG4gICAgJGlvbmljUG9wb3Zlci5mcm9tVGVtcGxhdGVVcmwoJ3RlbXBsYXRlcy9tb2RhbHMvcG9wb3Zlci5odG1sJywge1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgfSkudGhlbihmdW5jdGlvbiAocG9wb3Zlcikge1xuICAgICAgICAkc2NvcGUucG9wb3ZlciA9IHBvcG92ZXI7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUub3BlblBvcG92ZXIgPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICRzY29wZS5wb3BvdmVyLnNob3coJGV2ZW50KTtcbiAgICB9O1xuXG5cdFx0dmFyIG1lc3NhZ2VDaGVja1RpbWVyO1xuXG5cdFx0dmFyIHZpZXdTY3JvbGwgPSAkaW9uaWNTY3JvbGxEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUoJ3VzZXJNZXNzYWdlU2Nyb2xsJyk7XG5cdFx0dmFyIGZvb3RlckJhcjsgLy8gZ2V0cyBzZXQgaW4gJGlvbmljVmlldy5lbnRlclxuXHRcdHZhciBzY3JvbGxlcjtcblx0XHR2YXIgdHh0SW5wdXQ7IC8vIF5eXlxuXG5cdFx0JHNjb3BlLiRvbignJGlvbmljVmlldy5lbnRlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGdldE1lc3NhZ2VzKCk7XG5cblx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Zm9vdGVyQmFyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuaG9tZVZpZXcgLmJhci1mb290ZXInKTtcblx0XHRcdFx0c2Nyb2xsZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5ob21lVmlldyAuc2Nyb2xsLWNvbnRlbnQnKTtcblx0XHRcdFx0dHh0SW5wdXQgPSBhbmd1bGFyLmVsZW1lbnQoZm9vdGVyQmFyLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykpO1xuXHRcdFx0fSwgMCk7XG5cblx0XHRcdG1lc3NhZ2VDaGVja1RpbWVyID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Ly8gaGVyZSB5b3UgY291bGQgY2hlY2sgZm9yIG5ldyBtZXNzYWdlcyBpZiB5b3VyIGFwcCBkb2Vzbid0IHVzZSBwdXNoIG5vdGlmaWNhdGlvbnMgb3IgdXNlciBkaXNhYmxlZCB0aGVtXG5cdFx0XHR9LCAyMDAwMCk7XG5cdFx0fSk7XG5cblx0XHQkc2NvcGUuJG9uKCckaW9uaWNWaWV3LmxlYXZlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGludGVydmFsIGlzIGRlc3Ryb3llZFxuXHRcdFx0aWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG1lc3NhZ2VDaGVja1RpbWVyKSkge1xuXHRcdFx0XHQkaW50ZXJ2YWwuY2FuY2VsKG1lc3NhZ2VDaGVja1RpbWVyKTtcblx0XHRcdFx0bWVzc2FnZUNoZWNrVGltZXIgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkc2NvcGUuJG9uKCckaW9uaWNWaWV3LmJlZm9yZUxlYXZlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCEkc2NvcGUuaW5wdXQubWVzc2FnZSB8fCAkc2NvcGUuaW5wdXQubWVzc2FnZSA9PT0gJycpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJNZXNzYWdlLScgKyAkc2NvcGUudG9Vc2VyLl9pZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcblx0XHRcdC8vIHRoZSBzZXJ2aWNlIGlzIG1vY2sgYnV0IHlvdSB3b3VsZCBwcm9iYWJseSBwYXNzIHRoZSB0b1VzZXIncyBHVUlEIGhlcmVcblx0XHRcdE1vY2tTZXJ2aWNlLmdldFVzZXJNZXNzYWdlcyh7XG5cdFx0XHRcdHRvVXNlcklkOiAkc2NvcGUudG9Vc2VyLl9pZFxuXHRcdFx0fSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHQkc2NvcGUuZG9uZUxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0XHQkc2NvcGUubWVzc2FnZXMgPSBkYXRhLm1lc3NhZ2VzO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JHNjb3BlLiR3YXRjaCgnaW5wdXQubWVzc2FnZScsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdpbnB1dC5tZXNzYWdlICR3YXRjaCwgbmV3VmFsdWUgJyArIG5ld1ZhbHVlKTtcblx0XHRcdGlmICghbmV3VmFsdWUpIG5ld1ZhbHVlID0gJyc7XG5cdFx0XHRsb2NhbFN0b3JhZ2VbJ3VzZXJNZXNzYWdlLScgKyAkc2NvcGUudG9Vc2VyLl9pZF0gPSBuZXdWYWx1ZTtcblx0XHR9KTtcblxuXHRcdHZhciBhZGRNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0XHRcdG1lc3NhZ2UuX2lkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8vIDp+KVxuXHRcdFx0bWVzc2FnZS5kYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdG1lc3NhZ2UudXNlcm5hbWUgPSAkc2NvcGUudXNlci51c2VybmFtZTtcblx0XHRcdG1lc3NhZ2UudXNlcklkID0gJHNjb3BlLnVzZXIuX2lkO1xuXHRcdFx0bWVzc2FnZS5waWMgPSAkc2NvcGUudXNlci5waWN0dXJlO1xuXHRcdFx0JHNjb3BlLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG5cdFx0fTtcblx0XHRcblx0XHR2YXIgbGFzdFBob3RvID0gJ2ltZy9kb251dC5wbmcnO1xuXG5cdFx0JHNjb3BlLnNlbmRQaG90byA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdCRpb25pY0FjdGlvblNoZWV0LnNob3coe1xuXHRcdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdFx0eyB0ZXh0OiAnVGFrZSBQaG90bycgfSxcblx0XHRcdFx0XHR7IHRleHQ6ICdQaG90byBmcm9tIExpYnJhcnknIH1cblx0XHRcdFx0XSxcblx0XHRcdFx0dGl0bGVUZXh0OiAnVXBsb2FkIGltYWdlJyxcblx0XHRcdFx0Y2FuY2VsVGV4dDogJ0NhbmNlbCcsXG5cdFx0XHRcdGJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChpbmRleCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBtZXNzYWdlID0ge1xuXHRcdFx0XHRcdFx0dG9JZDogJHNjb3BlLnRvVXNlci5faWQsXG5cdFx0XHRcdFx0XHRwaG90bzogbGFzdFBob3RvXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRsYXN0UGhvdG8gPSBsYXN0UGhvdG8gPT09ICdpbWcvZG9udXQucG5nJyA/ICdpbWcvd29oby5wbmcnIDogJ2ltZy9kb251dC5wbmcnO1xuXHRcdFx0XHRcdGFkZE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0XHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHR2YXIgbWVzc2FnZSA9IE1vY2tTZXJ2aWNlLmdldE1vY2tNZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRtZXNzYWdlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdFx0JHNjb3BlLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG5cdFx0XHRcdFx0fSwgMjAwMCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQkc2NvcGUuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAoc2VuZE1lc3NhZ2VGb3JtKSB7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHtcblx0XHRcdFx0dG9JZDogJHNjb3BlLnRvVXNlci5faWQsXG5cdFx0XHRcdHRleHQ6ICRzY29wZS5pbnB1dC5tZXNzYWdlXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBpZiB5b3UgZG8gYSB3ZWIgc2VydmljZSBjYWxsIHRoaXMgd2lsbCBiZSBuZWVkZWQgYXMgd2VsbCBhcyBiZWZvcmUgdGhlIHZpZXdTY3JvbGwgY2FsbHNcblx0XHRcdC8vIHlvdSBjYW4ndCBzZWUgdGhlIGVmZmVjdCBvZiB0aGlzIGluIHRoZSBicm93c2VyIGl0IG5lZWRzIHRvIGJlIHVzZWQgb24gYSByZWFsIGRldmljZVxuXHRcdFx0Ly8gZm9yIHNvbWUgcmVhc29uIHRoZSBvbmUgdGltZSBibHVyIGV2ZW50IGlzIG5vdCBmaXJpbmcgaW4gdGhlIGJyb3dzZXIgYnV0IGRvZXMgb24gZGV2aWNlc1xuXHRcdFx0a2VlcEtleWJvYXJkT3BlbigpO1xuXG5cdFx0XHQvL01vY2tTZXJ2aWNlLnNlbmRNZXNzYWdlKG1lc3NhZ2UpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0JHNjb3BlLmlucHV0Lm1lc3NhZ2UgPSAnJztcblxuXHRcdFx0YWRkTWVzc2FnZShtZXNzYWdlKTtcblx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0a2VlcEtleWJvYXJkT3BlbigpO1xuXHRcdFx0fSwgMCk7XG5cblx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1lc3NhZ2UgPSBNb2NrU2VydmljZS5nZXRNb2NrTWVzc2FnZSgpO1xuXHRcdFx0XHRtZXNzYWdlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHQkc2NvcGUubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcblx0XHRcdFx0a2VlcEtleWJvYXJkT3BlbigpO1xuXHRcdFx0fSwgMjAwMCk7XG5cdFx0XHQvL30pO1xuXHRcdH07XG5cblx0XHQvLyB0aGlzIGtlZXBzIHRoZSBrZXlib2FyZCBvcGVuIG9uIGEgZGV2aWNlIG9ubHkgYWZ0ZXIgc2VuZGluZyBhIG1lc3NhZ2UsIGl0IGlzIG5vbiBvYnRydXNpdmVcblx0XHRmdW5jdGlvbiBrZWVwS2V5Ym9hcmRPcGVuKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2tlZXBLZXlib2FyZE9wZW4nKTtcblx0XHRcdHR4dElucHV0Lm9uZSgnYmx1cicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RleHRhcmVhIGJsdXIsIGZvY3VzIGJhY2sgb24gaXQnKTtcblx0XHRcdFx0dHh0SW5wdXRbMF0uZm9jdXMoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQkc2NvcGUucmVmcmVzaFNjcm9sbCA9IGZ1bmN0aW9uIChzY3JvbGxCb3R0b20sIHRpbWVvdXQpIHtcblx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2Nyb2xsQm90dG9tID0gc2Nyb2xsQm90dG9tIHx8ICRzY29wZS5zY3JvbGxEb3duO1xuXHRcdFx0XHR2aWV3U2Nyb2xsLnJlc2l6ZSgpO1xuXHRcdFx0XHRpZiAoc2Nyb2xsQm90dG9tKSB7XG5cdFx0XHRcdFx0dmlld1Njcm9sbC5zY3JvbGxCb3R0b20odHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JHNjb3BlLmNoZWNrU2Nyb2xsKCk7XG5cdFx0XHR9LCB0aW1lb3V0IHx8IDEwMDApO1xuXHRcdH07XG5cdFx0JHNjb3BlLnNjcm9sbERvd24gPSB0cnVlO1xuXHRcdCRzY29wZS5jaGVja1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGN1cnJlbnRUb3AgPSB2aWV3U2Nyb2xsLmdldFNjcm9sbFBvc2l0aW9uKCkudG9wO1xuXHRcdFx0XHR2YXIgbWF4U2Nyb2xsYWJsZURpc3RhbmNlRnJvbVRvcCA9IHZpZXdTY3JvbGwuZ2V0U2Nyb2xsVmlldygpLl9fbWF4U2Nyb2xsVG9wO1xuXHRcdFx0XHQkc2NvcGUuc2Nyb2xsRG93biA9IChjdXJyZW50VG9wID49IG1heFNjcm9sbGFibGVEaXN0YW5jZUZyb21Ub3ApO1xuXHRcdFx0XHQkc2NvcGUuJGFwcGx5KCk7XG5cdFx0XHR9LCAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cblx0XHR2YXIgb3Blbk1vZGFsID0gZnVuY3Rpb24gKHRlbXBsYXRlVXJsKSB7XG5cdFx0XHRyZXR1cm4gJGlvbmljTW9kYWwuZnJvbVRlbXBsYXRlVXJsKHRlbXBsYXRlVXJsLCB7XG5cdFx0XHRcdHNjb3BlOiAkc2NvcGUsXG5cdFx0XHRcdGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcblx0XHRcdFx0YmFja2Ryb3BDbGlja1RvQ2xvc2U6IGZhbHNlXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChtb2RhbCkge1xuXHRcdFx0XHRtb2RhbC5zaG93KCk7XG5cdFx0XHRcdCRzY29wZS5tb2RhbCA9IG1vZGFsO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdCRzY29wZS5waG90b0Jyb3dzZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRcdFx0dmFyIG1lc3NhZ2VzID0gJGZpbHRlcignb3JkZXJCeScpKCRmaWx0ZXIoJ2ZpbHRlcicpKCRzY29wZS5tZXNzYWdlcywgeyBwaG90bzogJycgfSksICdkYXRlJyk7XG5cdFx0XHQkc2NvcGUuYWN0aXZlU2xpZGUgPSBtZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpO1xuXHRcdFx0JHNjb3BlLmFsbEltYWdlcyA9IG1lc3NhZ2VzLm1hcChmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRcdFx0XHRyZXR1cm4gbWVzc2FnZS5waG90bztcblx0XHRcdH0pO1xuXG5cdFx0XHRvcGVuTW9kYWwoJ3RlbXBsYXRlcy9tb2RhbHMvZnVsbHNjcmVlbkltYWdlcy5odG1sJyk7XG5cdFx0fTtcblxuXHRcdCRzY29wZS5jbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0JHNjb3BlLm1vZGFsLnJlbW92ZSgpO1xuXHRcdH07XG5cblx0XHQkc2NvcGUub25NZXNzYWdlSG9sZCA9IGZ1bmN0aW9uIChlLCBpdGVtSW5kZXgsIG1lc3NhZ2UpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdvbk1lc3NhZ2VIb2xkJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnbWVzc2FnZTogJyArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UsIG51bGwsIDIpKTtcblx0XHRcdCRpb25pY0FjdGlvblNoZWV0LnNob3coe1xuXHRcdFx0XHRidXR0b25zOiBbe1xuXHRcdFx0XHRcdHRleHQ6ICdDb3B5IFRleHQnXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdHRleHQ6ICdEZWxldGUgTWVzc2FnZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0YnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0XHRcdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0XHRcdFx0Y2FzZSAwOiAvLyBDb3B5IFRleHRcblx0XHRcdFx0XHRcdFx0Ly9jb3Jkb3ZhLnBsdWdpbnMuY2xpcGJvYXJkLmNvcHkobWVzc2FnZS50ZXh0KTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgMTogLy8gRGVsZXRlXG5cdFx0XHRcdFx0XHRcdC8vIG5vIHNlcnZlciBzaWRlIHNlY3JldHMgaGVyZSA6filcblx0XHRcdFx0XHRcdFx0JHNjb3BlLm1lc3NhZ2VzLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuXHRcdFx0XHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmlld1Njcm9sbC5yZXNpemUoKTtcblx0XHRcdFx0XHRcdFx0fSwgMCk7XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyB0aGlzIHByb2Igc2VlbXMgd2VpcmQgaGVyZSBidXQgSSBoYXZlIHJlYXNvbnMgZm9yIHRoaXMgaW4gbXkgYXBwLCBzZWNyZXQhXG5cdFx0JHNjb3BlLnZpZXdQcm9maWxlID0gZnVuY3Rpb24gKG1zZykge1xuXHRcdFx0aWYgKG1zZy51c2VySWQgPT09ICRzY29wZS51c2VyLl9pZCkge1xuXHRcdFx0XHQvLyBnbyB0byB5b3VyIHByb2ZpbGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGdvIHRvIG90aGVyIHVzZXJzIHByb2ZpbGVcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0JHNjb3BlLiRvbignZWxhc3RpYzpyZXNpemUnLCBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIG9sZEhlaWdodCwgbmV3SGVpZ2h0KSB7XG5cdFx0XHRpZiAoIWZvb3RlckJhcikgcmV0dXJuO1xuXG5cdFx0XHR2YXIgbmV3Rm9vdGVySGVpZ2h0ID0gbmV3SGVpZ2h0ICsgMTA7XG5cdFx0XHRuZXdGb290ZXJIZWlnaHQgPSAobmV3Rm9vdGVySGVpZ2h0ID4gNDQpID8gbmV3Rm9vdGVySGVpZ2h0IDogNDQ7XG5cblx0XHRcdGZvb3RlckJhci5zdHlsZS5oZWlnaHQgPSBuZXdGb290ZXJIZWlnaHQgKyAncHgnO1xuXHRcdFx0c2Nyb2xsZXIuc3R5bGUuYm90dG9tID0gbmV3Rm9vdGVySGVpZ2h0ICsgJ3B4Jztcblx0XHR9KTtcblxuXHR9XG59KSgpOyIsIi8qIGdsb2JhbCBpb25pYyAqL1xuKGZ1bmN0aW9uIChhbmd1bGFyLCBpb25pYykge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpb25pYy5QbGF0Zm9ybS5pc0lFID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpb25pYy5QbGF0Zm9ybS51YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xO1xuXHR9XG5cblx0aWYgKGlvbmljLlBsYXRmb3JtLmlzSUUoKSkge1xuXHRcdGFuZ3VsYXIubW9kdWxlKCdpb25pYycpXG5cdFx0XHQuZmFjdG9yeSgnJGlvbmljTmdDbGljaycsIFsnJHBhcnNlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRwYXJzZSwgJHRpbWVvdXQpIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgY2xpY2tFeHByKSB7XG5cdFx0XHRcdFx0dmFyIGNsaWNrSGFuZGxlciA9IGFuZ3VsYXIuaXNGdW5jdGlvbihjbGlja0V4cHIpID8gY2xpY2tFeHByIDogJHBhcnNlKGNsaWNrRXhwcik7XG5cblx0XHRcdFx0XHRlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdFx0c2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNjb3BlLmNsaWNrdGltZXIpIHJldHVybjsgLy8gU2Vjb25kIGNhbGxcblx0XHRcdFx0XHRcdFx0Y2xpY2tIYW5kbGVyKHNjb3BlLCB7ICRldmVudDogKGV2ZW50KSB9KTtcblx0XHRcdFx0XHRcdFx0c2NvcGUuY2xpY2t0aW1lciA9ICR0aW1lb3V0KGZ1bmN0aW9uICgpIHsgZGVsZXRlIHNjb3BlLmNsaWNrdGltZXI7IH0sIDEsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gSGFjayBmb3IgaU9TIFNhZmFyaSdzIGJlbmVmaXQuIEl0IGdvZXMgc2VhcmNoaW5nIGZvciBvbmNsaWNrIGhhbmRsZXJzIGFuZCBpcyBsaWFibGUgdG8gY2xpY2tcblx0XHRcdFx0XHQvLyBzb21ldGhpbmcgZWxzZSBuZWFyYnkuXG5cdFx0XHRcdFx0ZWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7IH07XG5cdFx0XHRcdH07XG5cdFx0XHR9XSk7XG5cdH1cblxuXHRmdW5jdGlvbiBTZWxlY3REaXJlY3RpdmUoKSB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0XHRyZXBsYWNlOiBmYWxzZSxcblx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCkge1xuXHRcdFx0XHRpZiAoaW9uaWMuUGxhdGZvcm0gJiYgKGlvbmljLlBsYXRmb3JtLmlzV2luZG93c1Bob25lKCkgfHwgaW9uaWMuUGxhdGZvcm0uaXNJRSgpIHx8IGlvbmljLlBsYXRmb3JtLnBsYXRmb3JtKCkgPT09IFwiZWRnZVwiKSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cignZGF0YS10YXAtZGlzYWJsZWQnLCAndHJ1ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGFuZ3VsYXIubW9kdWxlKCdpb25pYycpXG4gICAgLmRpcmVjdGl2ZSgnc2VsZWN0JywgU2VsZWN0RGlyZWN0aXZlKTtcblxuXHQvKmFuZ3VsYXIubW9kdWxlKCdpb25pYy1kYXRlcGlja2VyJylcblx0LmRpcmVjdGl2ZSgnc2VsZWN0JywgU2VsZWN0RGlyZWN0aXZlKTsqL1xuXG59KShhbmd1bGFyLCBpb25pYyk7Il19
