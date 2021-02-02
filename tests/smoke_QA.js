
let loginPage;
let shoppingCartPage;
const PAGE_LOAD_TIME = 60000;







module.exports = {
  '@tags': ['smoke_QA'],
  
  
  afterEach: function (client, done){
    client.end(function(){
      done();
    });
  },
  
  before: function (client) {
    loginPage = client.page.login();
    shoppingCartPage = client.page.shoppingCart();
    
    
    
  },

  disabled: false,

  
  'Perform smoke': function (client) {

    loginPage.navigate ();
    client.resizeWindow (1280, 800);
   
    loginPage.login (client);
    shoppingCartPage.sortProduct(client);
    shoppingCartPage.addShoppingCartOnesie(client);
    shoppingCartPage.sortProduct(client);
    shoppingCartPage.addShoppingCartBikeLight(client);
    
    shoppingCartPage
      .waitForElementVisible('@addToCartBtn', PAGE_LOAD_TIME)
      .click('@addToCartBtn',PAGE_LOAD_TIME)
      .waitForElementVisible('@verifyBikeLight',PAGE_LOAD_TIME)
      .assert.containsText('@verifyBikeLight', 'Sauce Labs Bike Light')
      .waitForElementVisible('@verifyOnesie', PAGE_LOAD_TIME)
      .assert.containsText('@verifyOnesie','Sauce Labs Onesie');
    
    
    shoppingCartPage
      .waitForElementVisible('@verifyBikeLight', PAGE_LOAD_TIME)
      .click('@verifyBikeLight')
      .waitForElementVisible('@removeBtn', PAGE_LOAD_TIME)
      .click('@removeBtn')
      .waitForElementVisible('@backToProducts',PAGE_LOAD_TIME)
      .click('@backToProducts');

    shoppingCartPage
      .waitForElementVisible('@verifyOnesie', PAGE_LOAD_TIME)
      .waitForElementVisible('@removeBtn', PAGE_LOAD_TIME)
      .click('@removeBtn')
      .waitForElementVisible('@continueShopping', PAGE_LOAD_TIME)
      .click('@continueShopping');
      
    shoppingCartPage
      .waitForElementVisible('@backPack', PAGE_LOAD_TIME)
      .click('@backPack')
      .waitForElementVisible('@addToCart', PAGE_LOAD_TIME)
      .click('@addToCart', PAGE_LOAD_TIME)
      .waitForElementVisible('@addToCartBtn', PAGE_LOAD_TIME)
      .click('@addToCartBtn',PAGE_LOAD_TIME)
      .waitForElementVisible('@verifyBackPack', PAGE_LOAD_TIME)
      .assert.containsText('@verifyBackPack','Sauce Labs Backpack')
      .waitForElementVisible('@verifyBackPackPrice' , PAGE_LOAD_TIME)
      .assert.containsText('@verifyBackPackPrice', '29.99');


    client.end;
   
  }

  

};