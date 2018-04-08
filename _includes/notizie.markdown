
{% if page.lang == "it" %} {% assign clickHereForTheArticle = "Clicca qui per il articolo" %}
{% elsif page.lang == "en" %} {% assign clickHereForTheArticle = "Click here for the full article" %}
{% elsif page.lang == "de" %} {% assign clickHereForTheArticle = "Clicca qui per il articolo" %}
{% elsif page.lang == "fr" %} {% assign clickHereForTheArticle = "Clicca qui per il articolo" %}
{% endif %}

### Newsletters

<div>
{% assign newsletters = site.static_files %}
{% for file in newsletters reversed %}
{% if file.path contains '/newsletters/' and file.path contains '.pdf' %}
{% assign pathSplit =  file.path | split: '/' %}
{% assign pathHtml = file.path |  replace: ' ', '%20' | url_escape %}
- [{{ pathSplit.last | slice: 6,100 | remove: '.pdf' }}]({{ pathHtml}})
	{% endif %}
{% endfor %}
</div>

- - - 

### tripadvisor
{% if page.lang == "it" %} 
<div id="TA_certificateOfExcellence406" class="TA_certificateOfExcellence">
<ul id="pFZDOrUiacyR" class="TA_links a1IhCu">
<li id="FpUiSNU4zJ1m" class="7qsGllS">
<a target="_blank" href="https://it.tripadvisor.ch/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=406&amp;locationId=7146334&amp;lang=en_US&amp;year=2017&amp;display_version=2"></script>


{% elsif page.lang == "en" %}
<div id="TA_certificateOfExcellence406" class="TA_certificateOfExcellence">
<ul id="pFZDOrUiacyR" class="TA_links a1IhCu">
<li id="FpUiSNU4zJ1m" class="7qsGllS">
<a target="_blank" href="https://www.tripadvisor.com/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=406&amp;locationId=7146334&amp;lang=en_US&amp;year=2017&amp;display_version=2"></script>


{% elsif page.lang == "de" %}
<div id="TA_certificateOfExcellence406" class="TA_certificateOfExcellence">
<ul id="pFZDOrUiacyR" class="TA_links a1IhCu">
<li id="FpUiSNU4zJ1m" class="7qsGllS">
<a target="_blank" href="https://www.tripadvisor.ch/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=406&amp;locationId=7146334&amp;lang=en_US&amp;year=2017&amp;display_version=2"></script>

{% elsif page.lang == "fr" %}
<div id="TA_certificateOfExcellence406" class="TA_certificateOfExcellence">
<ul id="pFZDOrUiacyR" class="TA_links a1IhCu">
<li id="FpUiSNU4zJ1m" class="7qsGllS">
<a target="_blank" href="https://fr.tripadvisor.ch/Restaurant_Review-g664165-d7146334-Reviews-Osteria_Scarpetta_Alla_Fraccia-Tenero_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
</li>
</ul>
</div>
<script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=406&amp;locationId=7146334&amp;lang=en_US&amp;year=2017&amp;display_version=2"></script>
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

{% comment %}
### SBB Reise Magazin

[{{ clickHereForTheArticle }}](http://issuu.com/sbb_reisemagazin/docs/sbb_reisemagazin_140904/c/slouig8)
<div data-configid="13951617/9691137" style="width: 400px; height: 294px;" class="issuuembed"></div><script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>

- - -
{% endcomment %}

