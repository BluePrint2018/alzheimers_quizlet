// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "php",
			img: "https://uploads.wornontv.net/2013/09/glorias-blue-flower-statement-necklace.jpg",
			id: 1,
		},
		{
			name: "css3",
			img: "https://i.pinimg.com/736x/e9/d9/f2/e9d9f21c7e2dd7c36854a7826183727e--modern-philosophy-modern-family-funny.jpg",
			id: 2
		},
		{
			name: "html5",
			img: "https://www.picsofcelebrities.com/celebrity/julie-claire/pictures/large/julie-claire-movies.jpg",
			id: 3
		},
		{
			name: "jquery",
			img: "https://78.media.tumblr.com/a779a0374b17a82a9ac28f5e6083e29e/tumblr_okvzwbk1Rg1w3hvjlo3_400.png",
			id: 4
		}, 
		{
			name: "javascript",
			img: "https://vignette.wikia.nocookie.net/modernfamily/images/a/a2/Luke-port.jpg/revision/latest?cb=20150310161950",
			id: 5
		},
		{
			name: "node",
			img: "http://www.680news.com/wp-content/blogs.dir/sites/2/2011/05/de846e824349bc37f765b1f44353.jpeg",
			id: 6
		},
		{
			name: "photoshop",
			img: "https://vignette.wikia.nocookie.net/modernfamily/images/d/d9/Alex-port.jpg/revision/latest?cb=20150310161934",
			id: 7
		},
		{
			name: "python",
			img: "https://www.emmys.com/sites/default/files/styles/bio_pics_detail/public/Jesse-Tyler-Ferguson-450x600.jpg?itok=WB_BYoNI",
			id: 8
		},
		{
			name: "rails",
			img: "https://vignette.wikia.nocookie.net/modernfamily/images/0/04/Lily-port.jpg/revision/latest?cb=20150310162029",
			id: 9
		},
		{
			name: "sass",
			img: "https://vignette.wikia.nocookie.net/modernfamily/images/0/04/Lily-port.jpg/revision/latest?cb=20150310162029",
			id: 10
		},
		{
			name: "sublime",
			img: "https://vignette.wikia.nocookie.net/modernfamily/images/d/d8/Jeremy_maguire.jpg/revision/latest?cb=20150921004307",
			id: 11
		},
		{
			name: "wordpress",
			img: "https://thenypost.files.wordpress.com/2013/08/02-1t777-stellac-ta-300x300.jpg?quality=90&strip=all&w=300",
			id: 12
		},
	];
    
	Memory.init(cards);


})();