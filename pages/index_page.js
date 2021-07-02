const { I } = inject();

module.exports = {
//define all locators here
  fields:{
    more:'//div[@class="tab-content"]/ul/li[1]/div[@class="product-container"]',
    home:'//div[@id="center_column"]/ul/li/a',
    wishlist:'//a[@id="wishlist_button"]',
    close:'//body/div[2]/div[1]/div[1]/a[1]',
    customeraccount:'//span[contains(text(),"vandana bhushan")]',
    sizedropdown:'//select[@id="group_1"]',
    selectsizem:'//select[@id="group_1"]',
  },
//define all the methods here
  gotohomepage(){
  //this function is to click on the Home button
  I.click(this.fields.home);
  },

  addfirstpopularitem(){
  //function to add a popular item to the wish list
  I.click(this.fields.more);
  I.click(this.fields.wishlist);
  I.click(this.fields.close);
  I.waitForClickable(this.fields.customeraccount,5);
  I.click(this.fields.customeraccount);
  },

  addfirstpopularitemsizem(){
  //function to add the first popular item of different size to the wish list
  I.click(this.fields.more);
  I.click(this.fields.sizedropdown);
  I.selectOption(this.fields.selectsizem,'M');
  I.pressKey('Escape');
  I.click(this.fields.wishlist);
  I.click(this.fields.close);
  I.waitForClickable(this.fields.customeraccount,5);
  I.click(this.fields.customeraccount);
  },
}
