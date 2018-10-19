/* jasmine_fd.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /** This loops each feed in allFeeds - it tests to make sure
         * each feed has a URL defined
         * and that the URL is not empty.
         */

        it('should have each feed url defined and not to be empty', function () {
            for(var i=0, len=allFeeds.length; i<len; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /** This loops each feed in allFeeds - it tests to make sure
         * each feed has a name defined
         * and that the name is not empty.
         */
        it('should have each feed name defined and not to be empty', function () {
            for(var i=0, len=allFeeds.length; i<len; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /**
     * describe test suite "The menu"
     * */
    describe('The menu', function () {

        var BODY = $('body'),
            MENU_BUTTON = $('.menu-icon-link');

        /**
         * This tests if the menu is hidden by default on page load
         * hidden by default.
         */
        it('should hide the menu by default', function () {
            expect(BODY.hasClass('menu-hidden')).toBeTruthy();
        });

        /**
         * This test if the menu is visible
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should show menu when click the menu icon link and hide the menu when click again', function () {
            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeFalsy();

            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeTruthy();
        });

    });


    /**
    * describe test suite "Initial Entries"
    * */
     describe('Initial Entries', function(){
         beforeEach(function (done) {
             loadFeed(0, function () {
                 done();
             });

         });

        /** Test after loadFeed function,
         * the HTML should contains at least a feed with entry
         */

        it('should loadFeed and render the entry and .feed container', function () {
            expect($('.feed').has('.entry').length).not.toBe(0);
        });
     });


    /**
     * Describe test suite "New Feed Selection"
     */
    describe('New Feed Selection', function () {
        var initialFeedHtml;

        beforeEach(function (done) {
            // load first feed
            loadFeed(0, function () {
                initialFeedHtml = $('.feed').html();

                // Load second feed
                loadFeed(1, function () {
                    done();
                });
            });

        });

        it('should load new feed', function (done) {
            var newFeedHtml = $('.feed').html();
            expect(newFeedHtml).not.toBe(initialFeedHtml);
            done();
        });
    });
}());
