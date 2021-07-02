Feature('add wish list items');

Before(({ I,login_page, index_page, account_details_page }) => { // or Background
    login_page.gotowebsite();
    login_page.valid_login();
    account_details_page.clearwishlist();
    index_page.gotohomepage();
    index_page.addfirstpopularitem();
});


Scenario('Adding an item that is already in the wishlist increases the count', ({ I, index_page, account_details_page }) => {
    index_page.gotohomepage();
    index_page.addfirstpopularitem();
    account_details_page.gotowishlistpage();
    account_details_page.clickwishlistdetails();
    account_details_page.checkcountoftheexistingitem();

});

Scenario('Adding an item of different size is not considered the same', ({ I, index_page, account_details_page }) => {
    index_page.gotohomepage();
    index_page.addfirstpopularitemsizem();
    account_details_page.gotowishlistpage();
    account_details_page.clickwishlistdetails();
    account_details_page.checkcountofnewlyaddeditem();
});

Scenario('Logging out retains the wishlist', ({ I, index_page, account_details_page ,login_page}) => {
    index_page.gotohomepage();
    index_page.addfirstpopularitemsizem();
    account_details_page.gotowishlistpage();
    account_details_page.clickwishlistdetails();
    account_details_page.checkcountofdefaultitem();
    login_page.logout();
    login_page.valid_login();
    account_details_page.gotowishlistpage();
    account_details_page.clickwishlistdetails();
    account_details_page.checkcountofdefaultitem();
});


After(({ I, account_details_page }) => { // clean up
    //account_details_page.delwishlist();
});