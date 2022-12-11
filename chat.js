const cb_subs_only = document.getElementById('tts_subs_only');

const client = new tmi.Client({
  options: { debug: true },
  channels: ['padawanstrainer']
});


client.connect( );

client.on('message', (channel, tags, message, self)=>{
  if( self ) return;
  if( cb_subs_only.checked && ! tags.subscriber ) return;

  if( /^\!decir\s/.test(message) ){
    const coincidencias = message.match(/^\!decir\s(-(m|f)\b)?(:(sad|happy)\s)?(.+)/);
    if( coincidencias[5].length > 100 ) return;

    talk( tags.username + ',dice: ' + coincidencias[5], coincidencias[2] ?? 'm', coincidencias[4] ?? 'default' );
  }
});