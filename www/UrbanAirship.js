/**
 * Wraps UrbanAirship.com API. Constants are loaded from native code in PhoneGap plugin directory in order to minimize risk of obtaining info via decompiling
 */
var UrbanAirship = {
    HOST:'', 
    APP_KEY:'', 
    APP_SECRET:'', 
    MASTER_SECRET:'' // TODO remove MASTER_SECRET once broadcast server is done
};
var UA = UrbanAirship;