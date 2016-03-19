
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
<div id="TA_linkingWidgetRedesign691" class="TA_linkingWidgetRedesign">
<ul id="w7oBE1VKE" class="TA_links lvn3LYg64hPt">
<li id="Iw0pj2" class="z2FOhckD">
<a target="_blank" href="http://www.tripadvisor.it/"><img src="http://www.tripadvisor.it/img/cdsi/partner/tripadvisor_logo_115x18-15079-2.gif" alt="TripAdvisor"/></a>
</li>
</ul>
</div>
<script src="http://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=691&amp;locationId=7146334&amp;lang=it&amp;border=false&amp;display_version=2"></script>

{% elsif page.lang == "en" %}
<div id="TA_linkingWidgetRedesign750" class="TA_linkingWidgetRedesign">
<ul id="oGL129Q2w" class="TA_links JdeBfN1VeS">
<li id="dsspPvke34" class="Xekxt0uL7Txn">
<a target="_blank" href="http://www.tripadvisor.co.uk/"><img src="http://www.tripadvisor.co.uk/img/cdsi/partner/tripadvisor_logo_115x18-15079-2.gif" alt="TripAdvisor"/></a>
</li>
</ul>
</div>
<script src="http://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=750&amp;locationId=7146334&amp;lang=en_UK&amp;border=false&amp;display_version=2"></script>

{% elsif page.lang == "de" %}
<div id="TA_linkingWidgetRedesign81" class="TA_linkingWidgetRedesign">
<ul id="pyNEg3D4eVn" class="TA_links ndz0jYO6B4G">
<li id="AExijUGk" class="qP0lt6TSC">
<a target="_blank" href="http://www.tripadvisor.de/"><img src="http://www.tripadvisor.de/img/cdsi/partner/tripadvisor_logo_115x18-15079-2.gif" alt="TripAdvisor"/></a>
</li>
</ul>
</div>
<script src="http://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=81&amp;locationId=7146334&amp;lang=de&amp;border=false&amp;display_version=2"></script>

{% elsif page.lang == "fr" %}
<div id="TA_linkingWidgetRedesign92" class="TA_linkingWidgetRedesign">
<ul id="AqyFlLAO" class="TA_links pvAvsx0Q">
<li id="R6LSEBo2PuPI" class="vG5mijtHrsHa">
<a target="_blank" href="http://www.tripadvisor.fr/"><img src="http://www.tripadvisor.fr/img/cdsi/partner/tripadvisor_logo_115x18-15079-2.gif" alt="TripAdvisor"/></a>
</li>
</ul>
</div>
<script src="http://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=92&amp;locationId=7146334&amp;lang=fr&amp;border=false&amp;display_version=2"></script>
{% endif %}

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

