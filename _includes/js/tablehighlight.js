$("#opening_times tr td.day").each( function() 
{
	$(this).css('display','none');
	var today = new Date();
	var day = $(this).text()
	 if(day == today.getDay()) 
	{
		$(this).parent().addClass('active');
	}
});
