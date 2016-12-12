
{% if page.lang == "it" %} {% assign clickHereForTheArticle = "Clicca qui per il articolo" %}
{% elsif page.lang == "en" %} {% assign clickHereForTheArticle = "Click here for the full article" %}
{% elsif page.lang == "de" %} {% assign clickHereForTheArticle = "Clicca qui per il articolo" %}
{% elsif page.lang == "fr" %} {% assign clickHereForTheArticle = "Clicca qui per il articolo" %}
{% endif %}

### Newsletters

<div>
{% for file in site.static_files %}
{% if file.path contains '/newsletters/' and file.path contains '.pdf' %}
{% assign pathSplit =  file.path | split: '/' %}
{% assign pathHtml = file.path |  replace: ' ', '%20' | url_escape %}
- [{{ pathSplit.last | remove: '.pdf' }}]({{ pathHtml}})
	{% endif %}
{% endfor %}
</div>

- - - 

### tripadvisor
{% if page.lang == "it" %} 
<div id="TA_certificateOfExcellence496" class="TA_certificateOfExcellence">
<ul id="IdPJz1Jms" class="TA_links S5tM83S7">
<li id="CyPr96cZ" class="NqcKecMjh7Yo">
<a target="_blank" href="https://it.tripadvisor.ch/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://it.tripadvisor.ch/img/cdsi/img2/awards/CoE2016_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=496&amp;locationId=7146334&amp;lang=it_CH&amp;year=2016&amp;display_version=2"></script>


{% elsif page.lang == "en" %}
<div id="TA_certificateOfExcellence723" class="TA_certificateOfExcellence">
<ul id="9fmSdW4SZ" class="TA_links lwfVbOy">
<li id="fmmp3XsNogW" class="3SEhDF">
<a target="_blank" href="https://www.tripadvisor.co.uk/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://www.tripadvisor.co.uk/img/cdsi/img2/awards/CoE2016_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=723&amp;locationId=7146334&amp;lang=en_UK&amp;year=2016&amp;display_version=2"></script>


{% elsif page.lang == "de" %}
<div id="TA_certificateOfExcellence145" class="TA_certificateOfExcellence">
<ul id="IP1BKt5U" class="TA_links TDgFqJb">
<li id="48bt7PwZ" class="RyRbkwd">
<a target="_blank" href="https://www.tripadvisor.ch/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://www.tripadvisor.ch/img/cdsi/img2/awards/CoE2016_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=145&amp;locationId=7146334&amp;lang=de_CH&amp;year=2016&amp;display_version=2"></script>

{% elsif page.lang == "fr" %}
<div id="TA_certificateOfExcellence256" class="TA_certificateOfExcellence">
<ul id="KTZc3rj" class="TA_links wSy9QSVU">
<li id="q3s8D36JbyjU" class="GrW6Nwpqco">
<a target="_blank" href="https://fr.tripadvisor.ch/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://fr.tripadvisor.ch/img/cdsi/img2/awards/CoE2016_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=256&amp;locationId=7146334&amp;lang=fr_CH&amp;year=2016&amp;display_version=2"></script>
{% endif %}

- - - 

### TESSIN GEHT AUS 2016/2017!
[{{ clickHereForTheArticle }}](/reviews/TGA_OsteriaScarpettaAllaFraccia_2016-2017.pdf)

- - - 

### Ti Saluto Ticino

#### Sabine Neu 

> "Ich MUSS da wieder hin!!!"  

[{{ clickHereForTheArticle }}](http://tisalutoticino.blogspot.ch/2014/07/osteria-scarpetta-alla-fraccia-tenero.html)

- - - 

### SBB Reise Magazin

[{{ clickHereForTheArticle }}](http://issuu.com/sbb_reisemagazin/docs/sbb_reisemagazin_140904/c/slouig8)
<div data-configid="13951617/9691137" style="width: 400px; height: 294px;" class="issuuembed"></div><script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>

- - -

