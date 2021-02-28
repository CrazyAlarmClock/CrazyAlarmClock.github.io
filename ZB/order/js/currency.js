var Currency = {

    currencySettingMap: {
        GBP: {
            symbol: "₽",
        },
        NZD: {
            symbol: "$",
        },
        AUD: {
            symbol: "$",
        },
        EUR: {
            symbol: "€",
        },
        RON: {
            symbol: "RON",
            thousand: ".",
            decimal: ",",
            format: "%v %s",
        }
    },

    getDefaultCurrencySetting: function(currencyCode) {
        return {
            symbol: currencyCode,
            format: "%s %v",
        }
    },

    format: function(currencyCode, value) {

        currencyCode = currencyCode.toUpperCase();

        if (!this.currencySettingMap.hasOwnProperty(currencyCode)) {
            return accounting.formatMoney(value, this.getDefaultCurrencySetting(currencyCode));
        }

        return accounting.formatMoney(value, this.currencySettingMap[currencyCode]);
    }
};

window.Currency = Currency;
