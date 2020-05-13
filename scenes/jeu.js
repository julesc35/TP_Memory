   class jeu extends Phaser.Scene{

constructor(){
    super("jeu")

    function Carte(id, image){
        this. id = 0;
        this. image = this.load.image('carte', 'assets/carteDos.png');
    }

        function CarteImp1(id, image){
        this. id = 1;
        this. image = this.load.image('carte', 'assets/1.png');
    
        function CarteImp2(id, image){
        this. id = 2;
        this. image = this.load.image('carte', 'assets/2.png');
    
        function CarteImp3(id, image){
        this. id = 3;
        this. image = this.load.image('carte', 'assets/3.png');
    
        function CarteImp4(id, image){
        this. id = 4;
        this. image = this.load.image('carte', 'assets/4.png');
    
        function CarteImp5(id, image){
        this. id = 5;
        this. image = this.load.image('carte', 'assets/5.png');
    
        function CarteImp6(id, image){
        this. id = 6;
        this. image = this.load.image('carte', 'assets/6.png');
    }
}

    preload(){
    var id;
    var image;
    var carte;
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
        Carte.prototype = new Carte;

        }

    update(){

    }
}