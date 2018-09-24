function setup() {
	// define artboard size
	createCanvas(700,700);
	// Set here the values that are not changing all over the sketch

	ellipseMode(CENTER)

}

function draw() {
	background(0,0,230);

	fill(0,21,128);
	noStroke();
	rect(350,600,700,210);

	fill(0,13,77);
	noStroke();
	ellipse(mouseX,mouseY/2+530,200,60);

	noStroke();

	//ANTENNA
		rectMode(CORNER)
		//ombra antenna
			stroke(107,107,107);
			line(423,300,463,150);
		//antenna
			stroke(212,212,212);
			strokeWeight(4);
			line(420,300,460,150);
		//pallino antenna
			//ombra pallino
			noStroke();
			fill(230,153,0);
			ellipse(461,150,20);
			//pallino
			fill(255,179,25);
			ellipse(459,148,20);

			noFill();
			stroke(255,255,255);
			strokeWeight(5);
			arc(460,151,20,20,PI+QUARTER_PI+PI/9,PI+HALF_PI-PI/15);

			noStroke();

	//BRACCIO DESTRA
		rectMode(CENTER)
		//ombra braccio destro
		fill(107,107,107);
		rect(500,363,150,15);
		rect(572,290,9,130);
		//braccio
		fill(212,212,212);
		rect(500,360,150,15);
		rect(570,290,9,130);
		//gomito
		fill(107,107,107);
		ellipse(571,361,30);
		fill(189,189,189);
		ellipse(569,359,30);

		//dettagli braccio destro
		stroke(189,189,189);
		strokeWeight(3);
		strokeCap(SQUARE);
		line(500,352,500,367);
		line(510,352,510,367);
		line(520,352,520,367);
		line(530,352,530,367);
		line(540,352,540,367);
		line(550,352,550,367);

		line(565,240,574,240);
		line(565,250,574,250);
		line(565,260,574,260);
		line(565,270,574,270);
		line(565,280,574,280);
		line(565,290,574,290);
		line(565,300,574,300);
		line(565,310,574,310);
		line(565,320,574,320);
		line(565,330,574,330);
		line(565,340,574,340);

		noStroke();

	//BRACCIO SINISTRA
		//ombra braccio sinistro
		fill(107,107,107);
		rect(200,363,150,15);
		rect(132,290,9,130);
		//braccio
		fill(212,212,212);
		rect(200,360,150,15);
		rect(130,290,9,130);
		//gomito
		fill(107,107,107);
		ellipse(131,361,30);
		fill(189,189,189);
		ellipse(129,359,30);

		//dettagli braccio destro
		stroke(189,189,189);
		strokeWeight(3);
		strokeCap(SQUARE);
		line(150,352,150,367);
		line(160,352,160,367);
		line(170,352,170,367);
		line(180,352,180,367);
		line(190,352,190,367);
		line(200,352,200,367);

		line(125,240,134,240);
		line(125,250,134,250);
		line(125,260,134,260);
		line(125,270,134,270);
		line(125,280,134,280);
		line(125,290,134,290);
		line(125,300,134,300);
		line(125,310,134,310);
		line(125,320,134,320);
		line(125,330,134,330);
		line(125,340,134,340);


		noStroke();

	//ATTACCO BRACCIA
	rectMode(CENTER)
	fill(189,189,189);
	rect(480,360,25,35);

	rectMode(CENTER)
	fill(189,189,189);
	rect(220,360,25,35);

	//MANI DESTRA
		fill(212,212,212);
		arc(591,173,80,80,HALF_PI,HALF_PI+QUARTER_PI);
		arc(532,205,60,60,0,QUARTER_PI);

	//MANI SINISTRA
		fill(212,212,212);
		arc(109,173,80,80,QUARTER_PI,HALF_PI);
		arc(168,205,60,60,HALF_PI+QUARTER_PI,PI);

	//ATTACCO MANI
		//ombra
		fill(107,107,107);
		ellipse(571,221,25);
		ellipse(130,221,25);
		//attacco
		fill(189,189,189);
		ellipse(569,219,25);
		ellipse(129,219,25);

	//CORPO
	fill(255,255,255);
	ellipse(350,350,230);

	fill(245,245,245);
	arc(350,350,230,230,PI+HALF_PI,HALF_PI);

		//Dettagli CORPO
		noFill();
		strokeWeight(20);
		strokeCap(ROUND);

		stroke(230,153,0);
		arc(350,350,210,210,PI,PI+HALF_PI);
		stroke(179,119,0);
		arc(350,350,210,210,PI+HALF_PI,0);


		stroke(74,74,74);
		arc(350,350,180,180,PI,PI+HALF_PI);
		stroke(54,54,54);
		arc(350,350,180,180,PI+HALF_PI,0);

		noStroke();

		//Archi gialli
		fill(255,179,25);
		arc(350, 335, 220, 220, PI+QUARTER_PI, -315, PIE);
		arc(329, 355, 220, 220, HALF_PI-50, PI+QUARTER_PI,PIE);
		//Archi gialli ombre
		fill(230,153,0);
		arc(350, 335, 220, 220, PI+HALF_PI, -315, PIE);
		arc(371, 355, 220, 220, TWO_PI-QUARTER_PI, HALF_PI+50, PIE);

		//lucidature
		noFill();
		stroke(255,255,255);
		strokeWeight(5);
		arc(345,350,220,220,PI-PI/7,PI+QUARTER_PI/3);
		arc(345,350,220,220,HALF_PI+HALF_PI/2,PI-PI/5);
		arc(345,350,220,220,PI+QUARTER_PI+PI/9,PI+HALF_PI-PI/9);

		noStroke();

		//fill(255,255,255);
		//ellipse(275,435,5);

	//OCCHIO
		//ellisse grande
		fill(212,212,212);
		ellipse(350,330,100,140);

		fill(189,189,189);
		arc(350,330,100,140,PI+HALF_PI,HALF_PI);

		//arco occhio
		fill(74,74,74);
		arc(350, 340, 70, 100, PI, 0);
		arc(350, 340, 70, 100, 0, PI);

		fill(54,54,54);
		arc(350, 340, 70, 100, PI+HALF_PI, 0);
		arc(350, 340, 70, 100, 0, HALF_PI);

		//ellisse piccolo
		fill(255,255,255);
		ellipse(350,345,70,80);

		fill(245,245,245);
		arc(350,345,70,80,PI+HALF_PI,HALF_PI);

		//pupilla
		rectMode(CENTER)
		fill(179,179,255);
		ellipse(350,350,45);

		fill(149,128,255);
		arc(350,350,45,45,PI+HALF_PI,HALF_PI);

		fill(0,0,0);
		ellipse(350,350,20);

		fill(255,255,255);
		ellipse(345,345,7);

	//BOCCA
	stroke(0,0,0);
	strokeWeight(3);
	line(350,415,350,450);
	line(340,425,340,440);
	line(360,425,360,440);


}
