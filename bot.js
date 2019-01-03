{
require('http').createServer().listen(3000)
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuário, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores.`);
});

client.on("guildCreat", guild => {
    console.log('O bot entrou nos servidores: ${guild.name} $(id: ${guild.id}). População: &{guild.memberCount} membros!');
})

client.on("guildDelete", guild => {
    console.log('O bot foi removido do servidor: ${guild.name} (id: ${guild.id})');
});

client.on("message", message =>{

    if(message.content.startsWith('!runas')){ 
     message.channel.send("ESCOLHA UM CAMPEÃO E DIGITE O NOME DELE(A) Ex: !aatrox :                                                                                                                  1- Aatrox 2- Ahri 3- Akali 4- Alistar 5- Amumu 6- Anivia 7- Annie 8- Ashe 9- Aurelion Sol 10- Azir 11- Bardo 12- Blitzcrank 13- Brand 14- Braum 15- Caitlyn 16- Camille 17- Cassiopeia 18- Cho'Gath 19- Corki 20- Darius 21- Diana 22- Dr. Mundo 23- Draven 24- Ekko 25- Elise 26- Evelynn 27- Ezreal 28- Fiddlesticks 29- Fiora 30- Fizz 31- Galio 32- Gangplank 33- Garen 34- Gnar 35- Gragas 36- Graves 37- Hecarim 38- Heimerdinger 39- Illaoi 40- Irelia 41- Ivern 42- Janna 43- Jarvan IV 44- Jax 45- Jayce 46- Jhin 47- Jinx 48- Kai'Sa 49- Kalista 50- Karma 51- Karthus 52- Kassadin 53- Katarina 54- Kayle 55- Kayn 56- Kennen 57- Kha'Zix 58- Kindred 59- Kled 60- Kog'Maw 61- LeBlanc 62- Lee Sin 63- Leona 64- Lissandra 65- Lucian 66- Lulu 67- Lux 68- Malphite 69- Malzahar 70- Maokai 71- Master Yi 72- Miss Fortune 73- Mordekaiser 74- Morgana 75- Nami 76- Nasus 77- Nautilus 78- Neeko 79- Nidalee 80- Nocturne 81- Nunu e Willump 82- Olaf 83- Orianna 84- Ornn 85- Pantheon 86- Poppy 87- Pyke 88- Quinn 89- Rakan 90- Rammus 91- Rek'Sai 92- Renekton 93- Rengar 94- Riven 95- Rumble 96- Ryze 97- Sejuani 98- Shaco 99- Shen 100- Shyvana 101- Singed 102- Sion 103- Sivir 104- Skarner 105- Sona 106- Soraka 107- Swain 108- Syndra 109- Tahm Kench 110- Taliyah 111- Talon 112- Taric 113- Teemo 114- Thresh 115- Tristana 116- Trundle 117- Tryndamere 118- Twisted Fate 119- Twitch 120- Udyr 121- Urgot 122- Varus 123- Vayne 124- Veigar 125- Vel'Koz 126- Vi 127- Viktor 128- Vladimir 129- Volibear 130- Warwick 131- Wukong 132- Xayah 133- Xerath 134- Xin Zhao 135- Yasuo 136- Yorick 137- Zac 138- Zed 139- Ziggs 140- Zilean 141- Zoe 142- Zyra");
}
    if(message.content.startsWith('!aatrox')){ 
      message.channel.send("Aqui está a runa para Aatrox da Season 8!", {files: ["./imagens/aatrox.png"]});
}

if(message.content.startsWith('!ahri')){
    const embedahri = new Discord.RichEmbed()
.setTitle('Aqui está a runa para Ahri da Season 8!')
.setImage('https://i.imgur.com/lElY8nzg.png')
message.channel.send(embedahri)
}

if(message.content.startsWith('!akali')){ 
    message.channel.send("Aqui está a runa para Akali da Season 8!", {files: ["./imagens/akali.png"]});
}
if(message.content.startsWith('!alistar')){ 
    message.channel.send("Aqui está a runa para Alistar da Season 8!", {files: ["./imagens/alistar.png"]});
}
if(message.content.startsWith('!amumu')){ 
    message.channel.send("Aqui está a runa para Amumu da Season 8!", {files: ["./imagens/amumu.png"]});
}
if(message.content.startsWith('!anivia')){ 
    message.channel.send("Aqui está a runa para Anivia da Season 8!", {files: ["./imagens/anivia.png"]});
}
if(message.content.startsWith('!annie')){ 
    message.channel.send("Aqui está a runa para Annie da Season 8!", {files: ["./imagens/annie.png"]});
}
if(message.content.startsWith('!ashe')){ 
    message.channel.send("Aqui está a runa para Ashe da Season 8!", {files: ["./imagens/ashe.png"]});
}
if(message.content.startsWith('!aurelion')){ 
    message.channel.send("Aqui está a runa para Aurelion da Season 8!", {files: ["./imagens/aurelion.png"]});
}
if(message.content.startsWith('!azir')){ 
    message.channel.send("Aqui está a runa para Azir da Season 8!", {files: ["./imagens/azir.png"]});
}
if(message.content.startsWith('!bardo')){ 
    message.channel.send("Aqui está a runa para Bardo da Season 8!", {files: ["./imagens/bardo.png"]});
}
if(message.content.startsWith('!blitzcrank')){ 
    message.channel.send("Aqui está a runa para Blitzcrank da Season 8!", {files: ["./imagens/blitz.png"]});
}
if(message.content.startsWith('!brand')){ 
    message.channel.send("Aqui está a runa para Brand da Season 8!", {files: ["./imagens/brand.png"]});
}
if(message.content.startsWith('!braum')){ 
    message.channel.send("Aqui está a runa para Braum da Season 8!", {files: ["./imagens/braum.png"]});
}
if(message.content.startsWith('!caitlyn')){ 
    message.channel.send("Aqui está a runa para Caitlyn da Season 8!", {files: ["./imagens/caitlyn.png"]});
}
if(message.content.startsWith('!camille')){ 
    message.channel.send("Aqui está a runa para Camille da Season 8!", {files: ["./imagens/camille.png"]});
}
if(message.content.startsWith('!cassiopeia')){ 
    message.channel.send("Aqui está a runa para Cassiopeia da Season 9!", {files: ["./imagens/cassiopeia.png"]});
}
if(message.content.startsWith('!chogath')){ 
    message.channel.send("Aqui está a runa para Cho'Gath da Season 8!", {files: ["./imagens/chogath.png"]});
}
if(message.content.startsWith('!corki')){ 
    message.channel.send("Aqui está a runa para Corki da Season 8!", {files: ["./imagens/corki.png"]});
}
if(message.content.startsWith('!darius')){ 
    message.channel.send("Aqui está a runa para Darius da Season 8!", {files: ["./imagens/darius.png"]});
}
if(message.content.startsWith('!diana')){ 
    message.channel.send("Aqui está a runa para Diana da Season 8!", {files: ["./imagens/diana.png"]});
}
if(message.content.startsWith('!draven')){ 
    message.channel.send("Aqui está a runa para Draven da Season 8!", {files: ["./imagens/draven.png"]});
}
if(message.content.startsWith('!drmundo')){ 
    message.channel.send("Aqui está a runa para Dr Mundo da Season 8!", {files: ["./imagens/drmundo.png"]});
}
if(message.content.startsWith('!ekko')){ 
    message.channel.send("Aqui está a runa para Ekko da Season 8!", {files: ["./imagens/ekko.png"]});
}
if(message.content.startsWith('!elise')){ 
    message.channel.send("Aqui está a runa para Elise da Season 8!", {files: ["./imagens/elise.png"]});
}
if(message.content.startsWith('!evelynn')){ 
    message.channel.send("Aqui está a runa para Evelynn da Season 8!", {files: ["./imagens/evelynn.png"]});
}
if(message.content.startsWith('!ezreal')){ 
    message.channel.send("Aqui está a runa para Ezreal da Season 8!", {files: ["./imagens/ezreal.png"]});
}
if(message.content.startsWith('!fidllesticks')){ 
    message.channel.send("Escolha uma das lanes: Suporte ou Jungle, Digite: !fdsup ou !fdjg");
}
if(message.content.startsWith('!fdsup')){ 
    message.channel.send("Aqui está a runa para Fidllesticks Suporte da Season 8!", {files: ["./imagens/fidllestickssup.png"]});
}
if(message.content.startsWith('!fdjg')){ 
    message.channel.send("Aqui está a runa para Fiddlesticks Jungle da Season 8!", {files: ["./imagens/fidllesticksjg.png"]});
}
if(message.content.startsWith('!fiora')){ 
    message.channel.send("Aqui está a runa para Fiora da Season 8!", {files: ["./imagens/fiora.png"]});
}
if(message.content.startsWith('!fizz')){ 
    message.channel.send("Aqui está a runa para Fizz da Season 8!", {files: ["./imagens/fizz.png"]});
}
if(message.content.startsWith('!galio')){ 
    message.channel.send("Aqui está a runa para Galio da Season 8!", {files: ["./imagens/galio.png"]});
}
if(message.content.startsWith('!gangplank')){ 
    message.channel.send("Aqui está a runa para Gangplank da Season 8!", {files: ["./imagens/gankgplank.png"]});
}
if(message.content.startsWith('!garen')){ 
    message.channel.send("Aqui está a runa para Garen da Season 8!", {files: ["./imagens/garen.png"]});
}
if(message.content.startsWith('!gnar')){ 
    message.channel.send("Aqui está a runa para Gnar da Season 8!", {files: ["./imagens/gnar.png"]});
}
if(message.content.startsWith('!gragas')){ 
    message.channel.send("Escolha a lane Digitando um dos comandos: !grmid, !grjg ou !grtop.");
}
if(message.content.startsWith('!grjg')){ 
    message.channel.send("Aqui está a runa para Gragas Jungle da Season 8!", {files: ["./imagens/gragasjg.png"]});
}
if(message.content.startsWith('!grmid')){ 
    message.channel.send("Aqui está a runa para Gragas Mid da Season 8!", {files: ["./imagens/gragasmid.png"]});
}
if(message.content.startsWith('!grtop')){ 
    message.channel.send("Aqui está a runa para Gragas Top da Season 8!", {files: ["./imagens/gragastp.png"]});
}
if(message.content.startsWith('!graves')){ 
    message.channel.send("Aqui está a runa para Graves da Season 8!", {files: ["./imagens/graves.png"]});
}
if(message.content.startsWith('!hecarim')){ 
    message.channel.send("Aqui está a runa para Hecarim da Season 8!", {files: ["./imagens/hecarim.png"]});
}
if(message.content.startsWith('!heimerdinger')){ 
    message.channel.send("Aqui está a runa para Heimerdinger da Season 9!", {files: ["./imagens/heimerdinger.png"]});
}
if(message.content.startsWith('!illaoi')){ 
    message.channel.send("Aqui está a runa para Illaoi da Season 8!", {files: ["./imagens/illaoi.png"]});
}
if(message.content.startsWith('!ivern')){ 
    message.channel.send("Aqui está a runa para Ivern da Season 9!", {files: ["./imagens/ivern.png"]});
}
if(message.content.startsWith('!janna')){ 
    message.channel.send("Aqui está a runa para Janna da Season 8!", {files: ["./imagens/janna.png"]});
}
if(message.content.startsWith('!jarvan')){ 
    message.channel.send("Aqui está a runa para Jarvan IV da Season 8!", {files: ["./imagens/jarvan.png"]});
}
if(message.content.startsWith('!jax')){ 
    message.channel.send("Escolha uma Lane digitando um dos comandos: !jxtop ou !jxjg");
}
if(message.content.startsWith('!jxtop')){ 
    message.channel.send("Aqui está a runa para Jax Top da Season 8!", {files: ["./imagens/jaxtop.png"]});
}
if(message.content.startsWith('!jxjg')){ 
    message.channel.send("Aqui está a runa para Jax Jungle da Season 8!", {files: ["./imagens/jaxjg.png"]});
}
if(message.content.startsWith('!jayce')){ 
    message.channel.send("Aqui está a runa para jayce da Season 8!", {files: ["./imagens/jayce.png"]});
}
if(message.content.startsWith('!jinx')){ 
    message.channel.send("Aqui está a runa para Jinx da Season 8!", {files: ["./imagens/jinx.png"]});
}
if(message.content.startsWith('!kaisa')){ 
    message.channel.send("Aqui está a runa para Kai'sa da Season 8!", {files: ["./imagens/kaisa.png"]});
}
if(message.content.startsWith('!kalista')){ 
    message.channel.send("Aqui está a runa para Kalista da Season 8!", {files: ["./imagens/kalista.png"]});
}
if(message.content.startsWith('!karma')){ 
    message.channel.send("Aqui está a runa para Karma da Season 8!", {files: ["./imagens/karma.png"]});
}
if(message.content.startsWith('!karthus')){ 
    message.channel.send("Aqui está a runa para Karthus da Season 8!", {files: ["./imagens/karthusmid.png"]});
}
if(message.content.startsWith('!kassadin')){ 
    message.channel.send("Aqui está a runa para Kassadin da Season 8!", {files: ["./imagens/kassadin.png"]});
}
if(message.content.startsWith('!katarina')){ 
    message.channel.send("Aqui está a runa para Katarina da Season 8!", {files: ["./imagens/katarina.png"]});
}
if(message.content.startsWith('!kayle')){ 
    message.channel.send("Aqui está a runa para Kayle da Season 8!", {files: ["./imagens/kayle.png"]});
}
if(message.content.startsWith('!kindred')){ 
    message.channel.send("Aqui está a runa para Kindred da Season 8!", {files: ["./imagens/kindred.png"]});
}
if(message.content.startsWith('!kennen')){ 
    message.channel.send("Aqui está a runa para Kennen da Season 8!", {files: ["./imagens/kennen.png"]});
}
if(message.content.startsWith('!khazix')){ 
    message.channel.send("Aqui está a runa para Kha'Zix da Season 8!", {files: ["./imagens/khazix.png"]});
}
if(message.content.startsWith('!kled')){ 
    message.channel.send("Aqui está a runa para Kled da Season 8!", {files: ["./imagens/kled.png"]});
}
if(message.content.startsWith('!kogmaw')){ 
    message.channel.send("Aqui está a runa para Kog'Maw da Season 8!", {files: ["./imagens/kogmaw.png"]});
}
if(message.content.startsWith('!leblanc')){ 
    message.channel.send("Aqui está a runa para Le Blanc da Season 8!", {files: ["./imagens/leblanc.png"]});
}
if(message.content.startsWith('!leesin')){ 
    message.channel.send("Aqui está a runa para Lee sin da Season 8!", {files: ["./imagens/lee sin.png"]});
}
if(message.content.startsWith('!leona')){ 
    message.channel.send("Aqui está a runa para Leona da Season 8!", {files: ["./imagens/leona.png"]});
}
if(message.content.startsWith('!lissandra')){ 
    message.channel.send("Aqui está a runa para Lissandra da Season 8!", {files: ["./imagens/lissandra.png"]});
}
if(message.content.startsWith('!lucian')){ 
    message.channel.send("Aqui está a runa para Lucian da Season 8!", {files: ["./imagens/lucian.png"]});
}
if(message.content.startsWith('!lulu')){ 
    message.channel.send("Aqui está a runa para Lulu da Season 8!", {files: ["./imagens/lulu.png"]});
}
if(message.content.startsWith('!lux')){ 
    message.channel.send("Escolha uma Runa digitando os seguintes comandos: !lxap ou !lxmid");
}
if(message.content.startsWith('!lxmid')){ 
    message.channel.send("Aqui está a runa para Lux da Season 8!", {files: ["./imagens/luxmid.png"]});
}
if(message.content.startsWith('!lxap')){ 
    message.channel.send("Aqui está a runa para Lux full Ap da Season 8!", {files: ["./imagens/luxap.png"]});
}
if(message.content.startsWith('!morgana')){ 
    message.channel.send("Aqui está a runa para Morgana da Season 8!", {files: ["./imagens/morgana.png"]});
}
if(message.content.startsWith('!malphite')){ 
    message.channel.send("Aqui está a runa para Malphite da Season 8!", {files: ["./imagens/malphite.png"]});
}
if(message.content.startsWith('!malzahar')){ 
    message.channel.send("Aqui está a runa para Malzahar da Season 8!", {files: ["./imagens/malzahar.png"]});
}
if(message.content.startsWith('!maokai')){ 
    message.channel.send("Aqui está a runa para Maokai da Season 8!", {files: ["./imagens/maokai.png"]});
}
if(message.content.startsWith('!masteryi')){ 
    message.channel.send("Aqui está a runa para Master Yi da Season 8!", {files: ["./imagens/masteryi.png"]});
}
if(message.content.startsWith('!missfortune')){ 
    message.channel.send("Aqui está a runa para Miss Fortune da Season 8!", {files: ["./imagens/missfortune.png"]});
}
if(message.content.startsWith('!mktop')){ 
    message.channel.send("Aqui está a runa para Mordekaiser Top da Season 8!", {files: ["./imagens/mordekaisertop.png"]});
}
if(message.content.startsWith('!mkadc')){ 
    message.channel.send("Aqui está a runa para Mordekaiser Adc da Season 8!", {files: ["./imagens/mordekaiseradc.png"]});
}
if(message.content.startsWith('!mordekaiser')){ 
    message.channel.send("Escolha uma lane digitando um dos comandos: !mktop ou !mkadc");
}
if(message.content.startsWith('!nami')){ 
    message.channel.send("Aqui está a runa para Nami da Season 8!", {files: ["./imagens/nami.png"]});
}
if(message.content.startsWith('!nasus')){ 
    message.channel.send("Aqui está a runa para Nasus da Season 8!", {files: ["./imagens/nasus.png"]});
}
if(message.content.startsWith('!nautilus')){ 
    message.channel.send("Aqui está a runa para nautilus da Season 8!", {files: ["./imagens/nautilus.png"]});
}
if(message.content.startsWith('!nidalee')){ 
    message.channel.send("Aqui está a runa para Nidalee da Season 8!", {files: ["./imagens/nidalee.png"]});
}
if(message.content.startsWith('!nocturne')){ 
    message.channel.send("Aqui está a runa para Nocturne da Season 8!", {files: ["./imagens/nocturne.png"]});
}
if(message.content.startsWith('!nunu')){ 
    message.channel.send("Aqui está a runa para Nunu & Wilump da Season 8!", {files: ["./imagens/nunuw.png"]});
}
if(message.content.startsWith('!neeko')){ 
    message.channel.send("Escolha uma Lane digitando um dos comandos: !nkmid, !nkjg ou !nksup");
}

if(message.content.startsWith('!nkmid')){ 
    message.channel.send("Aqui está a runa para Neeko Mid da Season 8!", {files: ["./imagens/nkmid.png"]});
}
if(message.content.startsWith('!nkjg')){ 
    message.channel.send("Aqui está a runa para Neeko Jungle da Season 8!", {files: ["./imagens/nkjg.png"]});
}
if(message.content.startsWith('!nksup')){ 
    message.channel.send("Aqui está a runa para Neeko Suporte da Season 8!", {files: ["./imagens/nksup.png"]});
}
if(message.content.startsWith('!ajuda')){ 
    message.channel.send("O bot atualmente está em desenvolvimento, caso esteja faltando campeões, aguarde a atualização, nosso servidor é atualizado diariamente. e para contatar o suporte envie um email para: mdeniver@gmail.com");
}
if(message.content.startsWith('!desenvolvedor')){ 
    message.channel.send("O desenvolvedor do bot é @palmitobr#0826 , e para entrar em contato com o desenvolvedor envie um email para: mdeniver@gmail.com.");
}



















































});


client.login(process.env.TOKEN);

}
