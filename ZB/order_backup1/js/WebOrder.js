$(function() {

    /* HTML Elements */
    var $userInfo = $('#user-info');

    /*
        Web App Order Form
     */
    window.WebOrder = {

        pageLoad: function() {
            this.Tracker.GoogleAnalytics.sendPageView();
            this.Tracker.Mixpanel.setSuperProperties();
        },

        data: function(key) {
            if (!($userInfo.html().trim().length === 0)) {
                return JSON.parse($userInfo.html())[key];
            }
        }

    };
    /*
      Trackers
     */
    WebOrder.Tracker = {};
    WebOrder.Tracker.GoogleAnalytics = {

        sendPageView: function() {

        }

    };
    WebOrder.Tracker.Mixpanel = {
        setSuperProperties: function() {
            if (IS_LAUNDRAPP) {
                mixpanel.register({
                    "Logged in": WebOrder.data('auth')
                })
            }
        }
    }
    /*
        Customer Details
     */
    WebOrder.Customer = {

        auth: function() {
            return WebOrder.data('auth');
        },

        id: function() {
            return WebOrder.data('customer_id');
        }

    };

})
