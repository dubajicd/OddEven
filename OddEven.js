/**
 * Author: Danko Dubajic
 * Date: 12.02.2015
 * @param selector
 */
function oddEven(selector){
    jQuery(selector).filter(":odd").addClass('odd');
    jQuery(selector).filter(":even").addClass('even');
}
