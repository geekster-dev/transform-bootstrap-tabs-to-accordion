function transformTabsToAccordion(screen){
    if ($(window).width() < screen){
        var string = "";
        var	tabs = $(".nav-tabs .nav-item").toArray();
        var	tabs_content = $(".tab-content .tab-pane").toArray();
        string += '<div id="bootstrap-accordion" class="accordion">';
        $.each(tabs, function(n, val){
            string += '<div class="accordion-item">';
            string += '  <h3 class="accordion-header" id="header' + n + '">';
            string += '    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse' + n + '" aria-controls="collapse' + n + '" aria-expanded="false">';
            string +=        val.innerText;
            string += '    </button>';
            string += '  </h3>';
            string += '  <div id="collapse' + n + '" class="accordion-collapse collapse" aria-labelledby="header' + n + '" data-bs-parent="#bootstrap-accordion">';
            string += '    <div class="accordion-body">' + tabs_content[n].innerHTML + '</div>';
            string += '  </div>';
            string += '</div>';
        });
        string += '</div>';
        $(string).insertAfter(".nav-tabs");
        $("#bootstrap-accordion").find(".accordion-collapse").first().addClass("show");
        $("#bootstrap-accordion").find(".accordion-item .accordion-button").first().attr("aria-expanded","true").removeClass("collapsed");
        $(".nav-tabs").remove();
        $(".tab-content").remove();
    } 	
}
