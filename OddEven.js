/**
 * Author: Danko Dubajic
 * Date: 12.02.2015
 * @param selector
 */
function centerImages(selector){
    jQuery(selector).each(function(){
        var selectorHeight = jQuery( this).height();
        var imageHeight = jQuery('img', this).height();
        var calculateOffset = selectorHeight - imageHeight;
        if(calculateOffset > 0){
            var calculatedTopMargin = calculateOffset/2;
            jQuery('img', this).attr('style', 'margin-top:'+calculatedTopMargin+'px');
        }
    });
}