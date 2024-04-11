var nextYear= new Date();
nextYear.setFullYear(new Date().getFullYear() + 1);
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backButton").addEventListener("click", () => { history.back(); });
    document.getElementById("calendar").setAttribute("min", new Date().toISOString().split("T")[0]);
    document.getElementById("calendar").setAttribute("max", nextYear.toISOString().split("T")[0]);
});

$(document).ready(function(){
	$('.gallery').featherlightGallery();
    $.featherlightGallery.prototype.afterContent = function() {
        var caption = this.$currentTarget.find('img').attr('alt');
        this.$instance.find('.caption').remove();
        $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
        }; 
    /* Alternative (format: <a href="...alt="text">). This will keep the last tag for all following images, if there is no new one
    (so you'll need to give every image an alt):
        $('.labeled_gallery').featherlightGallery({
        filter: "a",
        afterContent: function() {
            this.$legend = this.$legend || $('<div class="legend"/>').insertAfter(this.$content);
            this.$legend.text(this.$currentTarget.attr('alt'));
        }
    });
    */
});
