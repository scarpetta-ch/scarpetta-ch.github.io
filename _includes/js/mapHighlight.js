$(function () {


var xref = {
Leventina: "<b>Leventina</b> has loads of really fine wine ",
Blenio: "<b>Blenio</b> coffee here is wonderful",
Riviera: "<b>Riviera</b> yum yum yum ",
Bellinzona: "<b>Bellinzona</b> ",
Lugano: "<b>Lugano</b> ",
Mendrisio: "<b>Mendrisio</b> ",
Locarno: "<b>Locarno</b> ",
Vallemaggia: "<b>Vallemaggia</b> ",
defaultText: "Please click a region"
};

$('img').mapster({
    fillOpacity: 0.7,
    render_highlight: {
        fillColor: 'ffffff',
        stroke: true	
    },
	singleSelect: true,
    mapKey: 'key',
	listKey: 'key',
	 onClick: function (e) {
                        
            // update text depending on area selected
            $('#selections').html(xref[e.key]);
			
			}
			
        	
});
});