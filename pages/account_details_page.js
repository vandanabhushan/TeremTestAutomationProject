const { I } = inject();

module.exports = {
//all locators defined
  fields:{
    wishlist:'//span[contains(text(),"My wishlists")]',
    wishlistlink: '//a[contains(text(),"My wishlist")]',
    quantity: "//input[@id='quantity_1_1']",
    quantity2: '//input[@id="quantity_1_3"]',
    deleteicon:'//a[@class="icon"]',
    backtoaccount: '//ul[@class="footer_links clearfix"]/li[1]/a',
  },
//all methods defined below

    gotowishlistpage(){
    //this function navigates the user to the wish list page
    I.waitForClickable(this.fields.wishlist,5);
    I.click(this.fields.wishlist);
  },

    clickwishlistdetails(){
    //this function enables the user to click on the details for wishlist
    I.waitForClickable(this.fields.wishlistlink,5);
    I.click(this.fields.wishlistlink);
  },

    checkcountoftheexistingitem(){
    // this function checks the count of the existing item count in wishlist
    I.seeInField('//input[@id="quantity_1_1"]',2);
    },

    checkcountofdefaultitem(){
    // this function checks the count of the default item in the wishlist
    I.seeInField(this.fields.quantity2,1);
    },


    checkcountofnewlyaddeditem(){
    //verify the count
    I.seeInField(this.fields.quantity2,1);
    },

    clearwishlist(){
    //clears the current wish list items
    I.waitForClickable(this.fields.wishlist,5);
    I.click(this.fields.wishlist);
    I.waitForClickable(this.fields.deleteicon,5);
    I.click(this.fields.deleteicon);
    I.click(this.fields.backtoaccount);
    },
}
