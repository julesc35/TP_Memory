   class jeu extends Phaser.Scene{

constructor(){
    super("jeu")

    function Carte(id, image){
        this. id = 0;
        this. image = this.load.image('carte', 'assets/carteDos.png');
    }

        function CarteImp1(id, image){
        this. id = 1;
        this. image = this.load.image('1', 'assets/1.png');
    }

        function CarteImp2(id, image){
        this. id = 2;
        this. image = this.load.image('2', 'assets/2.png');
    }

        function CarteImp3(id, image){
        this. id = 3;
        this. image = this.load.image('3', 'assets/3.png');
    }

        function CarteImp4(id, image){
        this. id = 4;
        this. image = this.load.image('4', 'assets/4.png');
    }

        function CarteImp5(id, image){
        this. id = 5;
        this. image = this.load.image('5', 'assets/5.png');
    }

        function CarteImp6(id, image){
        this. id = 6;
        this. image = this.load.image('6', 'assets/6.png');
    }

}

    preload(){
    var cursors;
    var id;
    var image;
    var Carte;
    var carte1;
    var cartesHidd;
    var cartesRetourn;

    this.load.image('carte', 'assets/carteDos.png');
    this.load.image('1', 'assets/1.png');
    this.load.image('2', 'assets/2.png');
    this.load.image('3', 'assets/3.png');
    this.load.image('4', 'assets/4.png');
    this.load.image('5', 'assets/5.png');
    this.load.image('6', 'assets/6.png');
}

    create(){

        carte1.prototype = object.create(Carte.prototype);
        carte1.prototype.constructor = carte1;

        var carte2 = new Carte(1, '2');

        var carte3 = new Carte(1, '3');

        var carte4 = new Carte(1, '4');

        var carte5 = new Carte(1, '5');

        var carte6 = new Carte(1, '6');
        }

    update(){

    }
}