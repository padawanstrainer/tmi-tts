# Acerca del proyecto
Comando !decir para leer el chat de Twitch usando TMI + SpeechSyntsis (API Nativa text-to-voice de JS)

Con [TMI.js](https://tmijs.com/) obtenemos los mensajes que van llegando al chat, filtrando los que empiezan con el comando !decir

Esos son leídos por medio de las APIs Nativas de Javascript SpeechSyntesis y SpeechSyntesisUtterance, que se encargan de hacer el texto-a-voz.

## Features base:
- Se puede setear una voz femenina y una voz masculina.
- También poner solo para suscriptores.
- El bot se puede pausar, para dejar en cola de espera nuevos mensajes.
- Y si un mensaje es muy largo o no debe ser leído hay un botón de cancelar el actual y pasar al siguiente

## Uso desde el chat:
Para solo mandar un mensaje (lo lee por defecto la voz seteada como masculina):
> !decir este es mi mensaje

Para mandar un mensaje e indicar la voz
> !decir -f este mensaje lo lee la voz femenina

> !decir -m este mensaje lo lee la voz masculina (igual sin el -m, sería el valor por defecto)

Hay dos estados de animo:
- sad: Lee los mensajes más lento y con un tono más baja
- happy: Lee los mensajes más rápido y con un tono más alto

El estado de ánimo va con dos puntos, pegado a la voz (-m:sad o -f:sad, por ejemplo).
El género de la voz -m/-f puede no estar, pero si se indican ambos van sin espacio
> !decir :happy mensaje leído con voz masculina feliz

> !decir :sad mensaje leído con voz masculina triste

> !decir -f:happy mensaje leído con voz femenina feliz

> !decir -f:sad mensaje leído con voz femenina triste

> !decir -f :sad mensaje leído con voz femenina normal, porque no debe tener espacios el dos puntos del tipo de voz, de hecho se leerá el "sad" como parte del mensaje



# Desarrollo explicado en YouTube
El paso a paso de cómo se hizo este chat (por si querés aprender a modificarlo) se encuentra [en este video](https://youtu.be/7NagV_UE_Cg)