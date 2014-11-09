boomerang.factory('Config', function () {
    return {
        /* modify these */
        'name'          : '', // GDG Name
        'id'            : '', // GDG Google+ Page id
        'google_api'    : '', // Google Cloud API
        'pwa_id'        : '', // picasa web album id, must belong to Google+ id above
        'domain'        : '', // custom domain or [your app].appspot.com
        'youtube'       : '', // YouTube handle
        'twitter'       : '', // Twitter handle
        'meetup'        : '', // MeetUp handle
        'facebook'      : '', // Facebook handle
        'github'        : '', // GitHub handle
        'cover' : {
            title : '[cover title]',
            subtitle : '[cover subtitle]',
            url : '/images/[cover image]',
            button : {
                text : '[cover button text]',
                url : 'http://'
            }
        },
        'sponsors' : {
            0 : {
                id : 1,
                name : 'Google Developers',
                url : 'https://developers.google.com/',
                image : {
                    url : '../images/Google-Developers.png'
                }
            }/*,
            1 : {
                id : 2,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            },
            2 : {
                id : 3,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            },
            3 : {
                id : 4,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            }*/
        }
    };
});