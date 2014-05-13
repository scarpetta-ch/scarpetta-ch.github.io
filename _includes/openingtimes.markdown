{% if page.lang == "it" %}    
**Orari d’Apertura**
{% elsif page.lang == "en" %}
**Opening Times**
{% elsif page.lang == "de" %}
**Offnungs**
{% endif%}

<table id="opening_times" class="table">
	<tr>
		{% if page.lang == "it" %} 
			<td>LUN </td> 
			<td><strong>Chiuso</strong></td>
		{% elsif page.lang == "en" %} 
			<td>MON </td> 
			<td><strong>Closed</strong></td>
		{% elsif page.lang == "fr" %} 
			<td>LUN </td> 
			<td><strong>Fermé</strong></td>
		{% elsif page.lang == "de" %} 
			<td>MON </td> 
			<td><strong>Geschlossen</strong></td>
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