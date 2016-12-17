import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {

	//me thinks we can leverage this class with ajax call here
	createDb(){
		//this variable becomes global in scope...is assigned to this.heroes in heroes.component.ts
		let heroes = [

    {
        "id": "1",
        "Name": "El Shaddai",
        "Description": "Our father in Heaven - The Creator, The King of Glory and Righteousness, The Most High, He WHO: { IS, ALWAYS WAS, and always WILL BE }, The Lord of Lords, The Host of Hosts, he who sits on the highest throne in existence...",
        "Image": "the_most_high_god",
        "ImgText": "Seek ye the Lord and he will reveal himself to you when you come to him with clean hands and a pure heart.",
        "Rank": "1"
    },
    {
        "id": "2",
        "Name": "Lord Saviour",
        "Description": "The Messiah, The Light of my life, The Hands that guide me, My Salvation, The Living Water, The Son of The Father in Heaven, He who died on the cross and bound sin and death to the flesh so that we may have everlasting life through our faith and works...and also through the grace of our father in Heaven, Emmanuel, Jesus Bar Joseph, Jesus Christ!",
        "Image": "lord_saviour",
        "ImgText": "No one can read the Gospels without feeling the actual presence of Jesus.  His personality pulsates in every word.  No myth is filled with such life.",
        "Rank": "2"
    },
    {
        "id": "3",
        "Name": "Moses",
        "Description": "By faith Moses, when he was grown up, refused to be called the son of Pharaoh's daughter, choosing rather to be mistreated with the people of God than to enjoy the fleeting pleasures of sin.",
        "Image": "moses",
        "ImgText": "And the Lord spake unto Moses face to face, as a man speaketh unto his friend.",
        "Rank": "3"
    },
    {
        "id": "4",
        "Name": "Job",
        "Description": "There was a man in the land of Uz, whose name was Job; and that man was perfect and upright, and one that feared God, and eschewed evil.",
        "Image": "job",
        "ImgText": "In Job, we see a man who God allows to be directly attacked by Satan. He is an example of faithfulness as he loses everything important to him yet remains faithful to God.",
        "Rank": "4"
    },
    {
        "id": "5",
        "Name": "King David",
        "Description": "David grew up strong and brave, not afraid of the wild beasts which prowled around and tried to carry away his sheep. More than once he fought with lions, and bears, and killed them, when they seized the lambs of his flock. ",
        "Image": "king_david",
        "ImgText": "And young as he was, David thought of God, and talked with God, and God talked with David, and showed to David His will.",
        "Rank": "5"
    },
    {
        "id": "6",
        "Name": "King Solomon The Wise",
        "Description": "He asked God to help him be a good king. God was happy Solomon wanted to be righteous. God wanted to bless Solomon. God asked Solomon what blessing he would like. Solomon wanted to be wise. God was glad Solomon chose to be wise. He told Solomon to obey his commandments. Then Solomon would be wise.",
        "Image": "king_solomon_the_wise",
        "ImgText": "Solomon became the wisest man on earth. People came from other lands to ask him questions. He gave them wise answers.",
        "Rank": "6"
    },
    {
        "id": "7",
        "Name": "Mother Theresa",
        "Description": "On 10 September 1946, on a train journey from Calcutta to Darjeeling, Mother Teresa received what she termed the \"call within a call,\" which was to give rise to the Missionaries of Charity family of Sisters, Brothers, Fathers, and Co-Workers. The content of this inspiration is revealed in the aim and mission she would give to her new institute: \"to quench the infinite thirst of Jesus on the cross for love and souls\" by \"labouring at the salvation and sanctification of the poorest of the poor.\"",
        "Image": "remembering_mother_theresa",
        "ImgText": "Be faithful in small things because it is in them that your strength lies.",
        "Rank": "7"
    },
    {
        "id": "8",
        "Name": "Elizabeth Warren",
        "Description": "A fearless consumer advocate who has made her life's work the fight for middle class families, was elected to the United States Senate on November 6, 2012, by the people of Massachusetts.\r\n\r\nShe is widely credited for the original thinking, political courage, and relentless persistence that led to the creation of the Consumer Financial Protection Bureau.",
        "Image": "elizabeth_warren",
        "ImgText": "https:\/\/www.warren.senate.gov\/?p=biography",
        "Rank": "8"
    },
    {
        "id": "9",
        "Name": "Russell Wilson",
        "Description": "\"I had a dream that my dad passed away and that Jesus came into the room and he was basically knocking on my door, saying, 'Hey, you need to find out more about me.' So that Sunday morning I ended up going to church, and that's when I got saved.\"",
        "Image": "russell_wilson",
        "ImgText": null,
        "Rank": "9"
    },
    {
        "id": "10",
        "Name": " Batman",
        "Description": "Batman embodies his own childhood fear and unleashes it on the criminals of Gotham.\r\n\r\nHe is just one man (without superpowers) who vowed to make a difference and acted upon it.",
        "Image": "batman",
        "ImgText": "He is the semblance of an Angel of The Lord's Vengeance at the evil, greed and corruption of mankind.",
        "Rank": "10"
    }
		];

		return {heroes};
	}




}