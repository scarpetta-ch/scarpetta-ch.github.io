$(function () {


var xref = {
leventina: "<b>leventina</b> has loads of really fine wine ",
blenio: "<b>blenio</b> coffee here is wonderful",
riviera: "<b>rivier</b> yum yum yum ",
bellinzona: "<b>bellinzona</b> ",
lugano: "<b>lugano</b> ",
mendrisio: "<b>mendrisio</b> ",
locarno: "<b>locarno</b> ",
vallemaggia: "<b>vallemaggia</b> "

};

$('img').mapster({
    fillOpacity: 0.7,
    render_highlight: {
        fillColor: 'ffffff',
        stroke: true,
		singleSelect: true
    },
    mapKey: 'key',
	listKey: 'key',
	 onClick: function (e) {
                        
            // update text depending on area selected
            $('#selections').html(xref[e.key]);
			}
			
        	
});
});