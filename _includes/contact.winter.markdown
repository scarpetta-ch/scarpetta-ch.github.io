
{% if page.lang == "it" %} *Dove siamo?*
{% elsif page.lang == "en" %} *Location*

Just above a serene chapel, embedded in the hills of Tenero-Contra, a 10 minute drive from Locarno/Ascona, the Osteria offers scenic views and in-/outdoor seating for lunch as well as dinner.
Make it part of your trip to the Valle Verzasca valley and dam, infamous for James Bond's jump in Golden Eye, which is just a 5 minute drive away. 
{% elsif page.lang == "de" %} *Wo sind wir?*
{% elsif page.lang == "fr" %} *Que*
{% endif %}

> <a href="http://maps.apple.com/?q=Via+alla+Fraccia+5,+Tenero-Contra,+Switzerland" target="_blank">
  Via alla Fraccia 5<br>
  6598 Tenero-Contra<br></a>
  Tel. 091 745 35 35 <br>
  {% if page.lang == "en" %} Switzerland {% endif %}
  
{% if page.lang == "it" %} *Ampio parcheggio a disposizione.*
{% elsif page.lang == "en" %} *Ample parking available*
{% elsif page.lang == "de" %} *Ausreichende Parkplätze stehen Ihnen zur Verfügung.*
{% elsif page.lang == "fr" %} *Que*
{% endif %}

- - - 

{% if page.lang == "it" %} *Inviare un Messagio*
{% elsif page.lang == "en" %} *Send us a message*
{% elsif page.lang == "de" %} *Sie können gerne auch per E-Mail reservieren*
{% elsif page.lang == "fr" %} *Que*
{% endif %}
> <info@scarpetta.ch>


{% if page.lang == "it" %} *Seguici su Instagram*
{% elsif page.lang == "en" %} *Follow us on Instagram*
{% elsif page.lang == "de" %} *Folgen Sie uns auf Instagram*
{% elsif page.lang == "fr" %} *Que*
{% endif %}
> <a href="https://www.instagram.com/scarpetta_ch/" target="_blank"> <i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;scarpetta_ch


<!-- ### Opening Times table ### -->

{% if page.lang == "it" %} **Orari d’Apertura**
{% elsif page.lang == "en" %} **Opening Times**
{% elsif page.lang == "de" %} **Öffnungszeiten**
{% elsif page.lang == "fr" %} **QUE**
{% endif%}

<table id="opening_times" class="table">
	<tr>
		{% if page.lang == "it" %} <td>LUN </td> <td><strong>Chiuso</strong></td>
		{% elsif page.lang == "en" %} <td>MON </td> <td><strong>Closed</strong></td>
		{% elsif page.lang == "fr" %} <td>LUN </td> <td><strong>Fermé</strong></td>
		{% elsif page.lang == "de" %} <td>MO </td> <td><strong>Geschlossen</strong></td>
		{% endif %}
		<td class="day">1</td>
	</tr>
	<tr>
		{% if page.lang == "it" %} <td>MAR </td> <td>17:30 - 22:00</td>
		{% elsif page.lang == "en" %} <td>TUE </td> <td><strong>Closed</strong></td>
		{% elsif page.lang == "fr" %} <td>DI </td> <td><strong>Fermé</strong></td>
		{% elsif page.lang == "de" %} <td>MAR </td> <td><strong>Geschlossen</strong></td>
		{% endif %}
		<td class="day">2</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %} MER
		{% elsif page.lang == "en" %}WED 
		{% elsif page.lang == "de" %} MI 
		{% elsif page.lang == "fr" %} MER
		{% endif %}
		</td>
		<td>11.00 - 15.00 / 17.30 - 22.00</td>
		<td class="day">3</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %}GIO   
		{% elsif page.lang == "en" %} THU 
		{% elsif page.lang == "de" %} DO
		{% elsif page.lang == "fr" %} JEU
		{% endif %}
		</td>
		<td>11.00 - 15.00 / 17.30 - 22.00</td>
		<td class="day">4</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %} VEN   
		{% elsif page.lang == "en" %} FRI 
		{% elsif page.lang == "de" %} FR
		{% elsif page.lang == "fr" %} VEN
		{% endif %}
		</td>
		<td>11.00 - 15.00 / 17.30 - 22.00</td>
		<td class="day">5</td>
	</tr>
	<tr>
		<td>
		{% if page.lang == "it" %} SAB   
		{% elsif page.lang == "en" %} SAT 
		{% elsif page.lang == "de" %} SA 
		{% elsif page.lang == "fr" %} SAM
		{% endif %}
		</td>
		<td>11.00 - 15.00 / 17.30 - 22.00</td>
		<td class="day">6</td>
	</tr>
	<tr>
		<td>{% if page.lang == "it" %} DOM   
		{% elsif page.lang == "en" %} SUN 
		{% elsif page.lang == "de" %} SO
		{% elsif page.lang == "fr" %} DIM
		{% endif %}
		</td>
		<td>11.00 - 15.00 / 17.30 - 21.00</td>
		<td class="day">0</td>
	</tr>
</table>

<b>
{% if page.lang == "it" %}Orari della Cucina:
{% elsif page.lang == "en" %}Kitchen opening times:
{% elsif page.lang == "de" %}Küchenzeiten:
{% elsif page.lang == "fr" %}Horaires d'ouverture du restaurant:
{% endif %}  


{% if page.lang == "it" %}Mar:
{% elsif page.lang == "en" %}Tuesday:
{% elsif page.lang == "de" %}Dienstag:
{% elsif page.lang == "fr" %}Dimanche:
{% endif %}18.00 - 22.00

{% if page.lang == "it" %}Mer - Sab:
{% elsif page.lang == "en" %}Wed - Sat:
{% elsif page.lang == "de" %}Mit - Sam:
{% elsif page.lang == "fr" %}Dimanche:
{% endif %}12.00 - 14.30 / 18.00 - 22.00

{% if page.lang == "it" %}Dom:
{% elsif page.lang == "en" %}Sun:
{% elsif page.lang == "de" %}Son:
{% elsif page.lang == "fr" %}Dimanche:
{% endif %}12.00 - 15.00 / 18.00 - 21.00

<!-- #### END OF Opening Times #### -->

{% if page.lang == "it" %} *Siamo aperti anche al mattino per il caffè e l'aperitivo e nel pomeriggio per caffè, aperitivi e stuzzichini*.
{% elsif page.lang == "en" %} We are also open in the mornings for coffee.
{% elsif page.lang == "de" %} *Wir sind auch am Morgen für Kaffee für Sie geöffnet.*
{% elsif page.lang == "fr" %} *FRENCH*
{% endif %}

