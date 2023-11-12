//-----------------------Declaracion de variables----------------------
let botonUsuario = document.getElementById('botonUsuario')
let spanNombreUsuario = document.getElementById('spanNombreUsuario')
let passwordUsuario = document.getElementById('passwordUsuario')
let seleccionarGuia = document.getElementById('seleccionarGuia')
let presentacionGuia = document.getElementById('presentacionGuia')
let presentacionPersonaje = document.getElementById('presentacionPersonaje')
let botonSeleccionarGuia = document.getElementById('botonSeleccionarGuia')
let botonContinuarGuia = document.getElementById('continuarGuia')
let botonContinuarBienvenida = document.getElementById('continuarBienvenida')
let botonContinuarFrase = document.getElementById('continuarFrase')
let botonReiniciarSeleccion = document.getElementById('botonReiniciar')
let contenedorTarjetas = document.getElementById('contenedorTarjetas')
let contenedorGuia = document.getElementById('contenedorGuia')
let contenedorBienvenida = document.getElementById('contenedorBienvenida')
let contenedorPersonajes = document.getElementById('contenedorPersonajes')
let contenedorFrase = document.getElementById('contenedorFrase')
let sectionVerMapa = document.getElementById('verMapa')
let mapa = document.getElementById('mapa')
let frasePersonaje = document.getElementById('frasePersonaje')
let bienvenidaPersonaje = document.getElementById('bienvenida')


let idFichaJisus // seccion
let idFichaJeisson //seccion
let idFichaJarvey //seccion
let idFichaJavier //seccion
let idFichaNosiej //seccion
let idFichaAlan
let idFichaEric
let idFichaSikki
let idFichaMichael
let idFichaTobias
let idFichaTilo
let idAlanFrase
let idEricFrase
let idSikkiFrase
let idMichaelFrase
let idTobiasFrase
let idTiloFrase
let idBienAlan
let idBienEric
let idBienSikki
let idBienMichael
let idBienTobias
let idBienTilo

let personalidadesJisus = [] //arreglo
let personalidadesLuna =[] //arreglo
let fichasLuna = [] //arreglo
let fichas = [] //arreglo
let frases = [] //arreglo
let bienvenidas = [] //arreglo
let opciondeGuia // Html
let opcionFicha // html
let opcionFichaPersonaje //html
let opcionFrasePersonaje //html
let opcionBienvenida //html
let guiaLunaDef
let inputJisus // bolean 
let inputJeisson //bolean
let inputJarvey //bolean
let inputJavier //bolean
let inputNosiej //bolean
let lienzo = mapa.getContext("2d")
let intervalo 
let personajeLuna
let mapaBackground = new Image()
mapaBackground.src = './imagenes/mapa.jpg'
//let alturaMapa
//let anchoMapa = window.innerWidth -20
//let anchoMaximoMapa = 350

//if (anchoMapa > anchoMaximoMapa){
    //anchoMapa = anchoMaximoMapa -20
//}

//alturaMapa = anchoMapa * 600/800

//mapa.width = anchoMapa
//mapa.height = alturaMapa

//-------------------Declaracion de clases-----------------------------
class personalidadGuia{
    constructor(nombre,foto,fotoMapa,fotoCruce,x=10,y=10){
        this.nombre = nombre
        this.foto = foto //01 ok
        this.fotoMapa = fotoMapa //04 ok
        this.fotoCruce = fotoCruce //06 ok
        this.x = x
        this.y = y
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this. mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarGuia(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
class FichaGuia{
    constructor(idFicha,nombreFicha,fotoLuna,descripcion,letraCancion,audio,fotoSolo,fotoLogo){
        this.idFicha = idFicha
        this.nombreFicha = nombreFicha
        this.fotoLuna = fotoLuna //02 ok
        this.descripcion = descripcion,
        this.letraCancion = letraCancion
        this.audio = audio
        this.fotoSolo = fotoSolo //03 ok
        this.fotoLogo = fotoLogo
    }
}
class personalidadLuna{
    constructor(nombre,fotoMapa,x=10,y=10){
        this.nombre = nombre
        this.fotoMapa = fotoMapa // 05
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaFoto = new Image()
        this. mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarPersonaje(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
class FichaPersonalidadLuna{
    constructor(idFicha,nombreFicha,fotoMapa,fotoLunaGuia,descripcion,letraCancion,audio,gustos,disgustos){
        this.idFicha = idFicha
        this.nombreFicha = nombreFicha
        this.fotoMapa = fotoMapa //05
        this.fotoLunaGuia = fotoLunaGuia //07
        this.descripcion = descripcion,
        this.letraCancion = letraCancion
        this.audio = audio
        this.gustos = gustos
        this.disgustos = disgustos
    }
}
class FrasePersonaje{
    constructor(fraseId,nombre,frase,fotoSolo){
        this.fraseId = fraseId
        this.nombre = nombre
        this.frase = frase
        this.fotoSolo = fotoSolo
    }
}
class Bienvenida{
    constructor(bienvenidaId,nombre,imagen){
        this.bienvenidaId = bienvenidaId
        this.nombre = nombre
        this.imagen = imagen
    }
}
let jisus = new personalidadGuia(
    'Jisus',
    './imagenes/01.FotoGuia/jisus01.png',
    './imagenes/04.FotoMapaGuia/jisus04.png',
    './imagenes/06.FotoLunaGuiaPersonaje/jisus06.png')
let jeisson = new personalidadGuia(
    'Jeisson',
    './imagenes/01.FotoGuia/jeisson01.png',
    './imagenes/04.FotoMapaGuia/jeisson04.png',
    './imagenes/06.FotoLunaGuiaPersonaje/jeisson06.png')
let jarvey = new personalidadGuia(
    'Jarvey',
    './imagenes/01.FotoGuia/jarvey01.png',
    './imagenes/04.FotoMapaGuia/jarvey04.png',
    './imagenes/06.FotoLunaGuiaPersonaje/jarvey06.png')
let javier = new personalidadGuia(
    'Javier',
    './imagenes/01.FotoGuia/javier01.png',
    './imagenes/04.FotoMapaGuia/javier04.png',
    './imagenes/06.FotoLunaGuiaPersonaje/javier06.png')
let nosiej = new personalidadGuia(
    'Nosiej',
    './imagenes/01.FotoGuia/nosiej01.png',
    './imagenes/04.FotoMapaGuia/nosiej04.png',
    './imagenes/06.FotoLunaGuiaPersonaje/nosiej06.png')

personalidadesJisus.push(jisus,jeisson,jarvey,javier,nosiej)

let jisusFicha = new FichaGuia(
    'fichaJisus',
    'Jisus',
    './imagenes/02.FotoLuna/jisus02.png',
    'Hellooooo, hahahahaha, I do not know what to say, how lucky you are to choose me, sometimes I am an asshole but well, if you know me you know you can count on me for whatever.',
    'Eins, hier kommt die Sonne<br> Zwei, hier kommt die Sonne<br> Drei, sie ist der hellste Stern von allen<br> Vier, und wird nie vom Himmel fallen<br> Fünf, hier kommt die Sonne<br> Sechs, hier kommt die Sonne<br> Sieben, sie ist der hellste Stern von allen<br> Acht, neun, hier kommt die Sonne<br>',
    './audios/Sonne.mp3',
    './imagenes/03.FotoSolo/jisus03.png',
    './imagenes/albumes/sonne.png')
let jeissonFicha = new FichaGuia(
    'fichaJeisson',
    'Jeisson',
    './imagenes/02.FotoLuna/jeisson02.png',
    'When the withered flower drops its last petal, that is when you think love has been lost, but it is not, because here I am, with my heart in my hand and the hope that the world will change.',
    'I still believe in your eyes<br>  I just don’t care what you have done in your life<br> Baby, I’ll always be here by your side<br> Don’t leave me waiting too long, please come by<br> I, I, I, I still believe in your eyes<br> There is no choice, I belong to your life<br> Because I will live to love you someday<br> You’ll be my baby and we’ll fly away<br> And I’ll fly with you, I’ll fly with you, I’ll fly with you',
    './audios/Lamour Toujours.mp3',
    './imagenes/03.FotoSolo/jeisson03.png',
    './imagenes/albumes/Lamour Toujours.png')
let jarveyFicha = new FichaGuia(
    'fichaJarvey',
    'Jarvey',
    './imagenes/02.FotoLuna/jarvey02.png',
    'It is not important that you know me, nobody wants to do it, so you better not do it, just accompany me in my solitude and we will find light and life',
    'Que aquí todo esta<br> Peor que al igual<br> Que ella mi voluntad<br> También murió<br> Le quiero platicar que todo<br> Sale mal que yo la<br> Alcanzaría teniendo<br> Una oportunidad<br> Sé que ella se siente mejor<br> Allá no hay suplicio<br> Sería muy impulsivo<br> El utilizar el medio<br> Y llegar a lo desconocido<br> Sentirla al lado mío<br> Y decir que todo está peor',
    './audios/Los malaventurados no lloran.mp3',
    './imagenes/03.FotoSolo/jarvey03.png',
    './imagenes/albumes/Los malaventurados no lloran.jpg')
let javierFicha = new FichaGuia(
    'fichaJavier',
    'Javier',
    './imagenes/02.FotoLuna/javier02.png',
    'I don’t have much to say, just listen, I feel that fidelity is something very important, because loves come and go, but my friends will be eternal',
    'I’m bulletproof, nothing to lose<br> Fire away, fire away<br> Ricochet, you take your aim<br> Fire away, fire away<br> You shoot me down, but I won’t fall<br> I am titanium<br> You shoot me down, but I won’t fall<br> I am titanium',
    './audios/Titanium.mp3',
    './imagenes/03.FotoSolo/javier03.png',
    './imagenes/albumes/Titanium.jpg')
let nosiejFicha = new FichaGuia(
    'fichaNosiej',
    'Nosiej',
    './imagenes/02.FotoLuna/nosiej02.png',
    'If one day you want a deep chat, it’s likely that one of the assholes will be there for you and I’ll be there too, I just hope you don’t go too far with them',
    'Wir halten zusammen<br> Wir halten miteinander aus<br> Wir halten zueinander<br> Niemand hält uns auf<br> Wir halten euch die Treue<br> Wir halten daran fest<br> Und halten uns an Regeln<br> Wenn man uns regeln lässt<br> Und der Haifisch, der hat Tränen<br> Und die laufen vom Gesicht<br> Doch der Haifisch lebt im Wasser<br> So die Tränen sieht man nicht',
    './audios/Haifisch.mp3',
    './imagenes/03.FotoSolo/nosiej03.png',
    './imagenes/albumes/Haifisch.jpg')

fichas.push(jeissonFicha,jarveyFicha,javierFicha,nosiejFicha,jisusFicha)

let alan = new personalidadLuna(
    'Alan',
    './imagenes/05.FotoMapaPersonaje/alan05.png',
    60,
    80)
let eric = new personalidadLuna(
    'Eric',
    './imagenes/05.FotoMapaPersonaje/eric05.png',
    195,
    133)
let sikki = new personalidadLuna(
    'Sikki',
    './imagenes/05.FotoMapaPersonaje/sikki05.png',
    340,
    75)
let michael = new personalidadLuna(
    'Michael',
    './imagenes/05.FotoMapaPersonaje/michael05.png',
    224,
    13)
let tobias = new personalidadLuna(
    'Papa Emeritus IV',
    './imagenes/05.FotoMapaPersonaje/tobias05.png',
    23,
    228)
let tilo = new personalidadLuna(
    'Tilo',
    './imagenes/05.FotoMapaPersonaje/tilo05.png',
    290,
    250)
personalidadesLuna.push(alan,eric,sikki,michael,tobias,tilo)
//(idFicha,nombreFicha,fotoMapa,fotoLunaGuia,descripcion,letraCancion,audio,gustos,disgustos)
let alanFicha = new FichaPersonalidadLuna(
    'fichaAlan',
    'Alan',
    './imagenes/05.FotoMapaPersonaje/alan05.png',
    './imagenes/06.FotoLunaGuiaPersonaje/alan06.png',
    'Hi, I am Alan and I am happy to be your guide, I want you to know that you are not alone, you, count on me for any problem, I am a friend, I am your love...',
    'My mistress’ eyes are nothing like the sun;<br> Coral is far more red than her lips’ red;<br> If snow be white, why then her breasts are dun;<br> If hairs be wires, black wires grow on her head.<br> I have seen roses damasked, red and white,<br> But no such roses see I in her cheeks;<br> And in some perfumes is there more delight<br> Than in the breath that from my mistress reeks.<br> I love to hear her speak, yet well I know<br> That music hath a far more pleasing sound;<br> I grant I never saw a goddess go;<br> My mistress, when she walks, treads on the ground.<br> And yet, by heaven, I think my love as rare<br> As any she belied with false compare.<br>',
    './audios/Alan.mp3',
    './imagenes/alan2.png',
    './imagenes/alan1.jpg')

let ericFicha = new FichaPersonalidadLuna(
    'fichaEric',
    'Eric',
    './imagenes/eric2.jpg',
    './imagenes/06.FotoLunaGuiaPersonaje/eric06.png',
    'I will do everything possible to make you happy and together with Jisus I am sure I will make it, you are an incredible woman who has survived worse things, never give up',
    'Beth, I hear you calling<br> But I can’t come home right now<br> Me and the boys are playing<br> And we just can’t find the sound<br> Just a few more hours<br> And I’ll be right home to you<br> I think I hear them calling<br> Oh, Beth, what can I do?<br> Beth, what can I do?<br> You say you feel so empty<br> That our house just ain’t a home<br> That I’m always somewhere else<br> And you’re always there alone<br> Just a few more hours<br> And I’ll be right home to you<br> I think I hear them calling<br> Oh, Beth, what can I do?<br> Beth, what can I do?<br> Beth, I know you’re lonely<br> And I hope you’ll be alright<br> ’Cause me and the boys will be playing all night<br> All night...<br>',
    './audios/Eric.mp3',
    './imagenes/eric.png',
    './imagenes/eric6.gif')

let sikkiFicha = new FichaPersonalidadLuna(
    'fichaSikki',
    'Sikki',
    './imagenes/sikki1.jpg',
    './imagenes/06.FotoLunaGuiaPersonaje/sikki06.png',
    'Hi baby, I’m your guide in this moment, you know me, I’m Nikki but I want to be Sikki, babe you crazy me in all aspect. Do you love me? its no important, but babe, I’m here for you, relax my love, dont worry, fight again and don’t shot you down, you are so beautiful.',
    'Just open your eyes, just open your eyes<br> And see that life is beautiful<br> Will you swear on your life<br> That no one will cry at my funeral?<br> I know some things that you don’t<br> I’ve done things that you won’t<br> There’s nothing like a trail of blood<br> To find your way back home<br> I was waiting for my hearse<br> What came next was so much worse<br> It took a funeral to make me feel alive<br> Just open your eyes, just open your eyes<br> And see that life is beautiful<br> Will you swear on your life<br> That no one will cry at my funeral?',
    './audios/Sikki.mp3',
    '',
    './imagenes/sikki3.png')

let michaelFicha = new FichaPersonalidadLuna(
    'fichaMichael',
    'Michael',
    './imagenes/05.FotoMapaPersonaje/michael05.png',
    './imagenes/06.FotoLunaGuiaPersonaje/michael06.png',
    'Hello beautiful, it is time for calm, we are going to sing together, and we are going to dance, life is beautiful and you have to decorate it with dance',
    'Beth, the two of us need look no more,<br> We both found what we were looking for.<br> With a friend to call my own,<br> I’ll never be alone, and you, my friend, will see,<br> You’ve got a friend in me.<br> Beth, you’re always running here and there,<br> You feel you’re not wanted anywhere.<br> If you ever look behind and don’t like what you find<br> There’s something you should know, you’ve got a place to go.<br> I used to say I and me, now it’s us, now it’s we.<br> I used to say I and me, now it’s us, now it’s we.<br> Beth most people would turn you away;<br> I don’t listen to a word they say.<br> They don’t see you as I do;<br> I wish they would try to’<br> I’m sure they’d think again if they had a friend like Beth,<br> A friend like Beth',
    './audios/Ben.mp3',
    '',
    './imagenes/Michael.jpg')

let tobiasFicha = new FichaPersonalidadLuna(
    'fichaTobias',
    'Papa Emeritus IV',
    './imagenes/05.FotoMapaPersonaje/tobias05.png',
    './imagenes/06.FotoLunaGuiaPersonaje/tobias06.png',
    'Hello dear, how are you? you are sensational, I want you to know that life is crazy, and that you must be just like her, get on the trike and keep pedaling',
    'There’s a darkness at the heart of my love (my love)<br> That runs cold (runs cold), runs deep (runs deep)<br> The darkness at the heart of my love (my love)<br> So bold (so bold), so sweet (so sweet)<br> And all this time you knew<br> That I would put you through<br> The darkness at the heart of my love<br> For you<br> When the summer dies<br> Severing the ties<br> I’m with you always, always<br> Paint a pair of eyes<br> Let’s watch as it dries<br> I’m with you always, always',
    './audios/Darkness.mp3',
    '',
    './imagenes/Tobias.jpg')

let tiloFicha = new FichaPersonalidadLuna(
    'fichaTilo',
    'Tilo',
    './imagenes/05.FotoMapaPersonaje/tilo05.png',
    './imagenes/06.FotoLunaGuiaPersonaje/tilo06.png',
    'Hallo Liebling, ich weiß, dass du viel gekämpft hast und jetzt ist es an der Zeit zu strahlen, denn es ist die dunkelste Nacht, bevor die Morgendämmerung kommt, strahle wie kein anderer, kleiner Stern, ich weiß, dass du mit allem klarkommst',
    'lWenn du mein Herz brauchst<br> Dass dich fühlt<br> Wenn du Halt suchst<br> Weil deine Hand so klein<br> Wenn du fällst<br> Und doch nur fallen willst<br> Lass dich fallen<br> Lass dich fallen in meine Arme<br> Die Zukunft kenne auch ich nicht<br> Doch wir kennen die Vergangenheit<br> Das ist genug<br> Wenn du deine Augen schließt<br> Und sie nicht mehr öffnen kannst<br> Wenn du rennst und immer weiter rennst<br> Doch die Schatten dich einholen (einholen, einholen)<br> Wenn du träumst<br> Sie oder ihn<br> Und nicht hier, sondern dort zu sein<br> Komm zu mir<br> Komm in meine Arme<br> Hier ist dein Zuhaus’<br> Halte fest',
    './audios/Nach dem sturm.mp3',
    '',
    './imagenes/Tilo.jpg')
fichasLuna.push(alanFicha,ericFicha,sikkiFicha,michaelFicha,tobiasFicha,tiloFicha) 

let fraseAlan = new FrasePersonaje(
    'fraseAlan',
    'Alan',
    'I mean, language fascinates me anyway, and different words have different energies and you can change the whole drive of a sentence.',
    './imagenes/08.FotoPersonaje/alan08.png')
let fraseEric = new FrasePersonaje(
    'fraseEric',
    'Eric',
    'I can’t wait to get out. Its been much too long, I don’t like being home. I’d rather play. This tour is going to be really big. We’re gonna have the biggest show we can have.',
    './imagenes/08.FotoPersonaje/eric08.png')
let fraseSikki = new FrasePersonaje(
    'fraseSikki',
    'Sikki',
    'I forgive my mom for being a psycho and my dad for being a loser.',
    './imagenes/08.FotoPersonaje/sikki08.png')
let fraseMichael = new FrasePersonaje(
    'fraseMichael',
    'Michael',
    'If you want to make the world a better place, take a look at yourself, and make a change.',
    './imagenes/08.FotoPersonaje/michael08.png')
let fraseTobias = new FrasePersonaje(
    'fraseTobias',
    'Papa Emeritus IV',
    'I’ve been in lots of situations in my life where I’ve managed to turn pain into growing pains.',
    './imagenes/08.FotoPersonaje/tobias08.png')    
let fraseTilo = new FrasePersonaje(
    'fraseTilo',
    'Tilo',
    'Liebe ist die größte Kraft im Universum. Liebe ist Gott!',
    './imagenes/08.FotoPersonaje/tilo08.png')
frases.push(fraseAlan,fraseEric,fraseSikki,fraseMichael,fraseTobias,fraseTilo)

let bienAlan = new Bienvenida('bienAlan','Alan','./imagenes/bienvenidas/Alan.gif')
let bienEric = new Bienvenida('bienEric','Eric','./imagenes/bienvenidas/Eric.gif')
let bienSikki = new Bienvenida('bienSikki','Sikki','./imagenes/bienvenidas/Sikki.gif')
let bienMichael = new Bienvenida('bienMichael','Michael','./imagenes/bienvenidas/Michael.gif')
let bienTobias = new Bienvenida('bienTobias','Papa Emeritus IV','./imagenes/bienvenidas/Tobias.gif')
let bienTilo = new Bienvenida('bienTilo','Tilo','./imagenes/bienvenidas/Tilo.gif')
bienvenidas.push(bienAlan,bienEric,bienSikki,bienMichael,bienTobias,bienTilo)
 
//------------------------Declaracion de funciones----------------------
//---------------------------Pagina 1------------------------------------
function iniciarviaje(){
    seleccionarGuia.style.display='none'
    presentacionGuia.style.display='none'
    sectionVerMapa.style.display='none'
    presentacionPersonaje.style.display='none'
    frasePersonaje.style.display='none'
    bienvenidaPersonaje.style.display='none'

    botonUsuario.addEventListener('click',ingresarUsuario)
    botonSeleccionarGuia.addEventListener('click',verificarPersonaje)
    botonContinuarGuia.addEventListener('click',mostrarMapa)
    botonContinuarBienvenida.addEventListener('click',mostrarPersonaje)
    window.addEventListener('keydown',enter)
    botonContinuarFrase.addEventListener('click',generarFrase)
    botonReiniciarSeleccion.addEventListener('click',reiniciarJuego)
    


    personalidadesJisus.forEach((personalidad) =>{
        opciondeGuia = `
        <input type="radio" name="personalidadJisus" id="${personalidad.nombre}" class='inputTarjeta'/>
        <label class="tarjetaJisus" for="${personalidad.nombre}">
            <p>${personalidad.nombre}</p>
            <img src="${personalidad.foto}" alt="${personalidad.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opciondeGuia
        inputJisus = document.getElementById('Jisus')
        inputJeisson = document.getElementById('Jeisson')
        inputJarvey = document.getElementById('Jarvey')
        inputJavier = document.getElementById('Javier')
        inputNosiej = document.getElementById('Nosiej')
        
    })
    
}
//---------------------------Pagina 2------------------------------------
function ingresarUsuario(){
    let passwordUsuario = document.getElementById('passwordUsuario').value;
    let nombreUsuario = document.getElementById('nombreUsuario').value
    if (passwordUsuario == '1225' && nombreUsuario == 'Luna'){
        spanNombreUsuario.innerHTML = nombreUsuario
        identificarUsuario.style.display = 'none'
        seleccionarGuia.style.display='flex'
    } else {
        alert('incorrect password or name, try again')
    }
    
}
function enter(event){
    switch (event.key) {
        case 'Enter':
            ingresarUsuario()
            break
        default:
            break
    }
}
//---------------------------Pagina 3------------------------------------
function verificarPersonaje(){
    if (inputJisus.checked == false && inputJeisson.checked == false && inputJarvey.checked == false && inputJavier.checked == false && inputNosiej.checked == false){
        alert("Select a guide")
    }else {
        selecionarPersonaje()
    }
}
function selecionarPersonaje(){

    fichas.forEach((ficha) =>{
        opcionFicha = `
        <div id='${ficha.idFicha}' class="cajaGuia">
        <h1 class="tituloGuia">${ficha.nombreFicha}</h1>
            <div id="paginaGuia" class="guias">
                <div class="left">
                    <div class="leftUp">
                        <img src="${ficha.fotoLuna}" alt="${ficha.nombreFicha}">
                    </div>
                    <div class="leftDw">
                        ${ficha.descripcion}
                    </div>
                </div>
                <div class="center">
                    <div class="centerUp">
                        <img src="${ficha.fotoLogo}" alt="${ficha.nombreFicha}">
                        <audio controls>
                            <source src="${ficha.audio}" type="audio/mp3">
                        </audio>
                    </div>
                    <div class="centerDw">
                    <img src="${ficha.fotoSolo}" alt="${ficha.nombreFicha}">
                    </div>
                </div>
                <div class="right">
                    ${ficha.letraCancion}
                </div>
            </div>
        </div>
        `
        contenedorGuia.innerHTML += opcionFicha
    })
    
    mostrarGuia()    
}
function mostrarGuia(){
    idFichaJisus = document.getElementById('fichaJisus')
    idFichaJeisson = document.getElementById('fichaJeisson')
    idFichaJarvey = document.getElementById('fichaJarvey')
    idFichaJavier = document.getElementById('fichaJavier')
    idFichaNosiej = document.getElementById('fichaNosiej')

    if (inputJisus.checked == false && inputJeisson.checked == false && inputJarvey.checked == false && inputJavier.checked == false && inputNosiej.checked == false){
        alert("Select a guide")
    }else {
        presentacionGuia.style.display='flex'
        seleccionarGuia.style.display='none'
        
        idFichaJisus.style.display='none'
        idFichaJeisson.style.display='none'
        idFichaJarvey.style.display='none'
        idFichaJavier.style.display='none'
        idFichaNosiej.style.display='none'

        if (inputJisus.checked){
            idFichaJisus.style.display='flex'
            guiaLuna = inputJisus.id
        } else if (inputJeisson.checked){
            idFichaJeisson.style.display='flex'
            guiaLuna = inputJeisson.id
        } else if (inputJarvey.checked){
            idFichaJarvey.style.display='flex'
            guiaLuna = inputJarvey.id
        } else if (inputJavier.checked){
            idFichaJavier.style.display='flex'
            guiaLuna = inputJavier.id
        } else if (inputNosiej.checked){
            idFichaNosiej.style.display='flex'
            guiaLuna = inputNosiej.id
        } else {
            alert('no seleccionó guia')
        }
    }
}
function mostrarMapa(){
    idFichaJisus.style.display='none'
    idFichaJeisson.style.display='none'
    idFichaJarvey.style.display='none'
    idFichaJavier.style.display='none'
    idFichaNosiej.style.display='none'
    botonContinuarGuia.style.display='none'

    sectionVerMapa.style.display='flex'
    iniciarMapa()
    
}
function pintarCanvas(){
    guiaLunaDef.x =    guiaLunaDef.x +    guiaLunaDef.velocidadX
    guiaLunaDef.y =    guiaLunaDef.y +    guiaLunaDef.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    guiaLunaDef.pintarGuia()
    alan.pintarPersonaje()
    eric.pintarPersonaje()
    sikki.pintarPersonaje()
    michael.pintarPersonaje()
    tobias.pintarPersonaje()
    tilo.pintarPersonaje()
    if(guiaLunaDef.velocidadX !== 0 ||
        guiaLunaDef.velocidadY !== 0){
            revisarColision(alan)
            revisarColision(eric)
            revisarColision(sikki)
            revisarColision(michael)
            revisarColision(tobias)
            revisarColision(tilo)
        }
}
function moverDerecha(){
    guiaLunaDef.velocidadX = 5
}
function moverIzquierda(){
    guiaLunaDef.velocidadX = -5
}
function moverArriba(){
    guiaLunaDef.velocidadY = -5 
}
function moverAbajo(){
    guiaLunaDef.velocidadY = 5
}
function detenerMovimiento(){
    guiaLunaDef.velocidadX = 0
    guiaLunaDef.velocidadY = 0
}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}
function iniciarMapa(){
    mapa.width = 400
    mapa.height = 300
    guiaLunaDef = obtenerpersonajeJ()
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)
    
}
function obtenerpersonajeJ(){
    for(let i = 0; i < personalidadesJisus.length; i++){
        if(guiaLuna == personalidadesJisus[i].nombre){
            return personalidadesJisus[i]
        }
    }
}
function revisarColision(personaje){
    const arribaPersonaje = personaje.y + 20
    const abajoPersonaje = personaje.y + personaje.alto - 20
    const izquierdaPersonaje = personaje.x + 20
    const derechaPersonaje = personaje.x + personaje.ancho - 20

    const arribaGuia = guiaLunaDef.y + 20
    const abajoGuia = guiaLunaDef.y + guiaLunaDef.alto -20 
    const izquierdaGuia = guiaLunaDef.x + 20
    const derechaGuia = guiaLunaDef.x + guiaLunaDef.ancho -20

    if(
        abajoGuia < arribaPersonaje ||
        arribaGuia > abajoPersonaje ||
        derechaGuia < izquierdaPersonaje ||
        izquierdaGuia > derechaPersonaje
    ){
        return;
    }
        detenerMovimiento()
        bienvenida()
        idBienAlan = document.getElementById('bienAlan')
     idBienEric = document.getElementById('bienEric')
     idBienSikki = document.getElementById('bienSikki')
     idBienMichael = document.getElementById('bienMichael')
     idBienTobias = document.getElementById('bienTobias')
     idBienTilo = document.getElementById('bienTilo')

    idBienAlan.style.display='none'
    idBienEric.style.display='none'
    idBienSikki.style.display='none'
    idBienMichael.style.display='none'
    idBienTobias.style.display='none'
    idBienTilo.style.display='none'

    //alert('se ecogió a ' + personaje.nombre)

    if (personaje.nombre == 'Alan'){
        idBienAlan.style.display='flex'
        personajeLuna = personaje.nombre
    } else if (personaje.nombre == 'Eric'){
        idBienEric.style.display='flex'
        personajeLuna = personaje.nombre
    } else if (personaje.nombre == 'Sikki'){
        idBienSikki.style.display='flex'
        personajeLuna = personaje.nombre
    } else if (personaje.nombre == 'Michael'){
        idBienMichael.style.display='flex'
        personajeLuna = personaje.nombre
    } else if (personaje.nombre == 'Papa Emeritus IV'){
        idBienTobias.style.display='flex'
        personajeLuna = personaje.nombre
    } else if (personaje.nombre == 'Tilo'){
        idBienTilo.style.display='flex'
        personajeLuna = personaje.nombre
    } else {
        alert('no se encontró bienvenida')
    }
    resetGuia()
    
}
function resetGuia(){
    alan.x = 0
    alan.y = 0
    eric.x = 0
    eric.y = 0
    sikki.x = 0
    sikki.y = 0
    michael.x = 0
    michael.y = 0
    tobias.x = 0
    tobias.y = 0
    tilo.x = 0
    tilo.y = 0
}

//---------------------------bienvenida-------------------------------------
function bienvenida(){
    sectionVerMapa.style.display = 'none'
    bienvenidaPersonaje.style.display='flex'

    bienvenidas.forEach((bienvenida) =>{
        opcionBienvenida = `
        <div id='${bienvenida.bienvenidaId}' class="bienvenidaPersonaje">
            <h1 class="tituloBienvenida"> Hi! I am your friend ${bienvenida.nombre}, Welcome to my planet</h1>
            <img src="${bienvenida.imagen}" alt="${bienvenida.nombre}">
        </div>
        `
        contenedorBienvenida.innerHTML += opcionBienvenida
    })
     
}

//---------------------------Pagina 4------------------------------------
function mostrarPersonaje(){
    bienvenidaPersonaje.style.display='none'
    presentacionPersonaje.style.display='flex'

    fichasLuna.forEach((ficha) =>{
        opcionFichaPersonaje = `
        <div id='${ficha.idFicha}' class="cajaPersonaje">
        <h1 class="tituloPersonaje">${ficha.nombreFicha}</h1>
            <div id="paginaPersonaje" class="personajes">
                <div class="left">
                    <div class="leftUp">
                        <img src="${ficha.fotoMapa}" alt="${ficha.nombreFicha}">
                    </div>
                    <div class="leftDw">
                        ${ficha.descripcion}
                    </div>
                </div>
                <div class="center">
                    <div class="centerUpP">
                        <img src="${ficha.disgustos}" alt="${ficha.nombreFicha}">
                        <audio controls>
                            <source src="${ficha.audio}" type="audio/mp3">
                        </audio>
                    </div>
                    <div class="centerDwP">
                        <img src="${ficha.fotoLunaGuia}" alt="${ficha.fotoLunaGuia}">
                        <img src="${guiaLunaDef.fotoCruce}" alt="${guiaLunaDef.fotoCruce}">
                    </div>
                </div>
                <div class="right">
                    ${ficha.letraCancion}
                </div>
            </div>
        </div>
        `
        
        contenedorPersonajes.innerHTML += opcionFichaPersonaje
    }
    )
        idFichaAlan = document.getElementById('fichaAlan')
        idFichaEric = document.getElementById('fichaEric')
        idFichaSikki = document.getElementById('fichaSikki')
        idFichaMichael = document.getElementById('fichaMichael')
        idFichaTobias = document.getElementById('fichaTobias')
        idFichaTilo = document.getElementById('fichaTilo') 

    idFichaAlan.style.display='none'
    idFichaEric.style.display='none'
    idFichaSikki.style.display='none'
    idFichaMichael.style.display='none'
    idFichaTobias.style.display='none'
    idFichaTilo.style.display='none'

    if (personajeLuna == 'Alan'){
        idFichaAlan.style.display='flex'
    } else if (personajeLuna == 'Eric'){
        idFichaEric.style.display='flex'
    } else if (personajeLuna == 'Sikki'){
        idFichaSikki.style.display='flex'
    } else if (personajeLuna == 'Michael'){
        idFichaMichael.style.display='flex'
    } else if (personajeLuna == 'Papa Emeritus IV'){
        idFichaTobias.style.display='flex'
    } else if (personajeLuna == 'Tilo'){
        idFichaTilo.style.display='flex'
    } else {
        alert('no seleccionó guia')
    }   
    
}
//---------------------------Pagina 5------------------------------------


function generarFrase(){
    frases.forEach((frase) =>{
        opcionFrase = `
        <div id='${frase.fraseId}' class="frasePersonaje">
        <h1 class="tituloFrase">${frase.nombre}</h1>
            <div id="paginaFrase" class="frases">
                ${frase.frase}
            </div>
            <img src="${frase.fotoSolo}" alt="${frase.nombre}">
        </div>
        `
        let contenedorFrase = document.getElementById('contenedorFrase')
        contenedorFrase.innerHTML += opcionFrase
        idAlanFrase = document.getElementById('fraseAlan')
        idEricFrase = document.getElementById('fraseEric')
        idSikkiFrase = document.getElementById('fraseSikki')
        idMichaelFrase = document.getElementById('fraseMichael')
        idTobiasFrase = document.getElementById('fraseTobias')
        idTiloFrase = document.getElementById('fraseTilo')
        frasePersonaje.style.display='flex'
        presentacionPersonaje.style.display='none'
        
    })
    
        idAlanFrase.style.display='none'
        idEricFrase.style.display='none'
        idSikkiFrase.style.display='none'
        idMichaelFrase.style.display='none'
        idTobiasFrase.style.display='none'
        idTiloFrase.style.display='none'

    if (personajeLuna == 'Alan'){
        idAlanFrase.style.display='flex'
    } else if (personajeLuna == 'Eric'){
        idEricFrase.style.display='flex'
    } else if (personajeLuna == 'Sikki'){
        idSikkiFrase.style.display='flex'
    } else if (personajeLuna == 'Michael'){
        idMichaelFrase.style.display='flex'
    } else if (personajeLuna == 'Papa Emeritus IV'){
        idTobiasFrase.style.display='flex'
    } else if (personajeLuna == 'Tilo'){
        idTiloFrase.style.display='flex'
    } else {
        alert('no seleccionó guia')
    }
}
function reiniciarJuego() {
    location.reload()
}
//---------------------------Pagina 6------------------------------------
window.addEventListener('load',iniciarviaje)