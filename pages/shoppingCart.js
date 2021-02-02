




const PAGE_LOAD_TIME = 60000;


module.exports = {
  
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
     
    sortProduct:{
      locateStrategy: 'xpath',
      selector: "//*[@id='inventory_filter_container']/select[@class='product_sort_container']"
    },
    lowToHigh: {
      locateStrategy: 'xpath',
      selector: "//*[@id='inventory_filter_container']/select[@class='product_sort_container']/option[3]"
    },

    onesie: {
      locateStrategy : 'xpath',
      selector : "//*[contains(@class,'inventory_item_name') and contains(text(),'Sauce Labs Onesie')]"
    },
    backPack : {
      locateStrategy : 'xpath',
      selector : "//*[contains(@class,'inventory_item_name') and contains(text(),'Sauce Labs Backpack')]"

    },

    bikeLight: {
      locateStrategy : 'xpath',
      selector : "//*[contains(@class,'inventory_item_name') and contains(text(),'Sauce Labs Bike Light')]"
    },
    addToCart: {
      locateStrategy : 'xpath',
      selector : "//button[contains(text(),'ADD TO CART')]"
    },

    backToProducts: {
      locateStrategy : 'xpath',
      selector : "//button[contains(text(),'<- Back')]"
    },
    
    addToCartBtn : {
      locateStrategy : 'xpath',
      selector : "//*[@id='shopping_cart_container']"
    },
    verifyBikeLight : {
      locateStrategy : 'xpath',
      selector : "//div[contains(text(),'Sauce Labs Bike Light')]"
    },
    verifyOnesie : {
      locateStrategy : 'xpath',
      selector : "//div[contains(text(),'Sauce Labs Onesie')]"
    },
    verifyBackPack: {
      locateStrategy: 'xpath',
      selector : "//div[contains(text(),'Sauce Labs Backpack')]"
    },

    verifyBackPackPrice: {
      locateStrategy: 'xpath',
      selector : "//div[contains(text(),'29.99')]"
    },
    removeBtn : {
      locateStrategy : 'xpath',
      selector : "//button[contains(text(),'REMOVE')]"
    },
    continueShopping : {
      locateStrategy : 'xpath',
      selector : "//a[contains(text(),'Continue Shopping')]"
    }
    
   

  
     
  
     
  },
  commands: [
      
    {
        
      addShoppingCartOnesie: function () {
        this.waitForElementVisible('@onesie', PAGE_LOAD_TIME);
        this.click('@onesie');
        this.waitForElementVisible('@addToCart', PAGE_LOAD_TIME);
        this.click('@addToCart', PAGE_LOAD_TIME);
        this.waitForElementVisible('@backToProducts', PAGE_LOAD_TIME);
        this.click('@backToProducts',PAGE_LOAD_TIME);
        
          
          
      },

      sortProduct : function () {
        
        this.waitForElementVisible('@sortProduct',PAGE_LOAD_TIME);
        this.click('@sortProduct', PAGE_LOAD_TIME);
        this.waitForElementVisible('@lowToHigh',PAGE_LOAD_TIME);
        this.click('@lowToHigh',PAGE_LOAD_TIME);
        this.api.pause(1000);


      },

      addShoppingCartBikeLight: function () {
       
        this.waitForElementVisible('@bikeLight', PAGE_LOAD_TIME);
        this.click('@bikeLight', PAGE_LOAD_TIME);
        this.waitForElementVisible('@addToCart', PAGE_LOAD_TIME);
        this.click('@addToCart', PAGE_LOAD_TIME);
        this.waitForElementVisible('@backToProducts', PAGE_LOAD_TIME);
        this.click('@backToProducts',PAGE_LOAD_TIME);
      }
    
    }
  ]
  
};