
{% if page.lang == "it" %} *Dove siamo?*
{% elsif page.lang == "en" %} *Where we are*
{% elsif page.lang == "de" %} *Wo wir sind*
{% elsif page.lang == "fr" %} *Que*
{% endif %}

> <a href="http://maps.apple.com/?q=Via+alla+Fraccia+5,+Tenero-Contra,+Switzerland" target="_blank"><address>
  Via alla Fraccia 5<br>
  6598 Tenero-Contra<br></a>
  <abbr title="Tel">Tel.</abbr> 091 745 35 35 <br>
</address>

{% if page.lang == "it" %} *Ampio parcheggio a disposizione.*
{% elsif page.lang == "en" %} *Ample parking is available*
{% elsif page.lang == "de" %} *Ausreichend Parkplätze sind vorhanden.*
{% elsif page.lang == "fr" %} *Que*
{% endif %}

- - - 

{% if page.lang == "it" %} *Inviare un Messagio*
{% elsif page.lang == "en" %} *Send us a message*
{% elsif page.lang == "de" %} *Schreiben Sie uns*
{% elsif page.lang == "fr" %} *Que*
{% endif %}
> <info@scarpetta.ch>


{% if page.lang == "it" %} *Seguici su Twitter*
{% elsif page.lang == "en" %} *Follow us on Twitter*
{% elsif page.lang == "de" %} *Folgen Sie uns auf Twitter*
{% elsif page.lang == "fr" %} *Que*
{% endif %}
> <a href="https://twitter.com/ScarpettaCH" target="_blank"><img src="/images/twitter-bird-16x16.png">  @ScarpettaCH</a>


<!-- ### Opening Times table ### -->

{% if page.lang == "it" %} **Orari d’Apertura**
{% elsif page.lang == "en" %} **Opening Times**
{% elsif page.lang == "de" %} **Offnungs**
{% elsif page.lang == "fr" %} **QUE**
{% endif%}

<table id="opening_times" class="table">
	<tr>
		{% if page.lang == "it" %} <td>LUN </td> <td><strong>Chiuso</strong></td>
		{% elsif page.lang == "en" %} <td>MON </td> <td><strong>Closed</strong></td>
		{% elsif page.lang == "fr" %} <td>LUN </td> <td><strong>Fermé</strong></td>
		{% elsif page.lang == "de" %} <td>MON </td> <td><strong>Geschlossen</strong></td>
		{% endif %}
		<td class="day">1</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %} MAR  
		{% elsif page.lang == "en" %} TUE 
		{% elsif page.lang == "de" %} DIE 
		{% elsif page.lang == "fr" %} MAR
		{% endif %}
		</td>
		<td>16.00 - 23.00</td>
		<td class="day">2</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %} MER
		{% elsif page.lang == "en" %}WED 
		{% elsif page.lang == "de" %} MIT 
		{% elsif page.lang == "fr" %} MER
		{% endif %}
		</td>
		<td>10.00 - 23.00</td>
		<td class="day">3</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %}GIO   
		{% elsif page.lang == "en" %} THU 
		{% elsif page.lang == "de" %} DON
		{% elsif page.lang == "fr" %} JEU
		{% endif %}
		</td>
		<td>10.00 - 23.00</td>
		<td class="day">4</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %} VEN   
		{% elsif page.lang == "en" %} FRI 
		{% elsif page.lang == "de" %} FRE
		{% elsif page.lang == "fr" %} VEN
		{% endif %}
		</td>
		<td>10.00 - 23.00</td>
		<td class="day">5</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %} SAB   
		{% elsif page.lang == "en" %} SAT 
		{% elsif page.lang == "de" %} SAM 
		{% elsif page.lang == "fr" %} SAM
		{% endif %}
		</td>
		<td>10.00 - 23.00</td>
		<td class="day">6</td>
	</tr>
	<tr>
		<td>{% if page.lang == "it" %} DOM   
		{% elsif page.lang == "en" %} SUN 
		{% elsif page.lang == "de" %} SON 
		{% elsif page.lang == "fr" %} DIM
		{% endif %}
		</td>
		<td>10.00 - 23.00</td>
		<td class="day">0</td>
	</tr>
</table>

<div style="display:block">
<strong>
{% if page.lang == "it" %}Orari della Cucina:
{% elsif page.lang == "en" %}Restaurant opening times:
{% elsif page.lang == "de" %}Offnungszeit der Kuche:
{% elsif page.lang == "fr" %}Horaires d'ouverture du restaurant:
{% endif %}

<br>
11.30-14.30, 18.00-22.00
<br>
({% if page.lang == "it" %}Domenica
{% elsif page.lang == "en" %}Sunday
{% elsif page.lang == "de" %}Sontag
{% elsif page.lang == "fr" %}Dimanche 
{% endif %}: 11.30-15.00, 18.00-21.30)  
</div> 
<br>
</strong>

<!-- #### END OF Opening Times #### -->

{% if page.lang == "it" %} *Siamo aperti anche al mattino per il caffè e nel pomeriggio per aperitivi e stuzzichini.*
{% elsif page.lang == "en" %} *We are also open for coffee in the morning and for drinks and snacks in the afternoon.*
{% elsif page.lang == "de" %} *Wir sind auch für Kaffee am Morgen und für Getränke und Snacks am Nachmittag geöffnet.*
{% elsif page.lang == "fr" %} *FRENCH*
{% endif %}
