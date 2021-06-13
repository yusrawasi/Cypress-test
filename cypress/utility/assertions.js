import Locators from '../pageobjects/locator.js';
const locatorObject = new Locators();

class Assertions {
    
get textVisibility(){
    locatorObject.content.should('be.visible');
}

}
export default Assertions;