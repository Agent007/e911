// From PhoneGap
// Gets the function name of a Function object, else uses "alert" if anonymous
function GetFunctionName(fn) {
    if (fn) {
        var m = fn.toString().match(/^\s*function\s+([^\s\(]+)/);
        return m ? m[1] : "alert";
    } else {
        return null;
    }
}


/**
 * This class handles iPhone push notification service
 * @constructor
 */
function PushNotification() {
    if (!this.notificationCallback) {
        // default notification callback implementation
        this.notificationCallback = function(notification) {
            var msg = 'Push Notification:\n';
            for (var property in notification) {
                msg += property + ' : ' + notification[property] + '\n';
            }
            alert(msg);
        };
    }
}

/**
 * Start receiving push notification. Should be invoked right after system is 
 * loaded
 * @param {Function} callback Invoded when a notification is received.
 */
PushNotification.prototype.startNotify = function() {
    PhoneGap.exec("PushNotification.startNotify");
}

/**
 * Enables push notification as specified in options, or disable if no options 
 * provided
 * @param {Function} successCallback Invoded after registration successful
 * @param {Function} errorCallback Invoded after registration failed
 * @param {alert, sound, badge} options Set property [alert | sound | badge] 
 * to enable corresponding push notification type Or null to disable 
 * push notification
 */
PushNotification.prototype.register = function(successCallback, errorCallback, options) {
    PhoneGap.exec("PushNotification.registerAPN", GetFunctionName(successCallback), 
                    GetFunctionName(errorCallback), options);
}

PhoneGap.addConstructor(function() {
    if (typeof navigator.pushNotification == "undefined") navigator.pushNotification = new PushNotification();
});
