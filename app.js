
function enableScroll(){
	var speed = 450;
	var moving_frequency = 15;
	var link = document.getElementById('scroll-down');
	var href = (link.attributes.href === undefined) ? null : link.attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1){
        link.onclick = function(){
            var href = this.attributes.href.nodeValue.toString();
            var element = document.getElementById(href.substr(1));
            var hop_count = speed/moving_frequency;
            var getScrollTopDocumentAtBegin = getDocumentTop();
            var gap = (getElementTop(element) - getScrollTopDocumentAtBegin) / hop_count;
            for(var i = 1; i <= hop_count; i++)
            {
                (function()
                {
                    var hop_top_position = gap*i;
                    setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                })();
            }
            return false;
        };
    }
	var getElementTop =  function (e){
	    var top = 0;
	    while (e.offsetParent != undefined && e.offsetParent != null)
	    {
	        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
	        e = e.offsetParent;
	    }
	    return top;
	};
	var getDocumentTop = function()
	{
	    return document.documentElement.scrollTop + document.body.scrollTop;
	};
}

window.onload = function () {
	enableScroll();
}
