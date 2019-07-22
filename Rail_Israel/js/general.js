

// Menu
mainTitles = [
	"היתרונות שבשינוי",
	"שינויים בפורמט מהירויות",
	"שינויים בתחנה ובשלוחותיה",
	"שינויים במיקום התחנות ובמרחקים ביניהם",
	"בחן את עצמך"
];

// Gate firstPage
/* s0_movieFileName = "video/rakevet-logo.mp4"; */
s0_subtitle="מה ניתן לעשות במקרה של נעילת גלגלים?";
s0_textRight = "אחד או יותר מגלגלי הרכבת יכולים להיבלם בזמן נסיעה וכתוצאה מכך עלולים להופיע גצים או ניצוצות, רעש חריקה, ריח שרוף ועשן.<br /><br /> \
במקרים אלו עליכם לעצור רכבתו באופן מידי, לבדוק את הנסיבות ולדווח על הממצאים.";
s0_textLeft = "מערכת החול בקטרים מיועדת להגדיל את מקדם החיכוך בין הגלגלים לפס המסילה וכך להתגבר על החלקה/נעילת גלגלים.<br /> \
חובה להשתמש במערכת החול בכל קטר המצויד במערכת.";
s0_LinkDocText = "קישור לספר";
s0_LinkDocUrl = "http://google.com";

// Section 1
s1_movieFileName = "video/Indian Railways ALCO Sanding Action.mp4";
s1_1_Text = "<strong>אופן הפעלת המערכת</strong><br /><br /> \
פיזור החול מתבצע לעבר נקודת ההשקה של זוג הגלגלים בסרן הקדמי.<br /> \
הצד הפעיל של מערכת החול נקבע על-ידי כיוון ההופכן.";

s1_2_Text = "<strong>כיצד המערכת מופעלת אוטומאטית</strong><br /><br /> \
המערכת תופעל אוטומטי בעת: \
<ol> \
    <li>זיהוי החלקת גלגלים </li> \
    <li>הפעלת בלימת חירום</li> \
</ol> \
עם הפעלת המערכת נורית ביקורת הפעלת החול בקטר תידלק ווסת העומס ינתק חלק מכוח הסחיבה.<br /><br /> \
הפעולה מבוקרת על-ידי מחשב הקטר בקטרים מסוג EURO-4000 ו-JT-42.";
s1_2_ImageFieName = "images/Img_2_1.png";

s1_3_Text = "<strong>כיצד ניתן להפעיל את המערכת ידנית?</strong><br /><br /> \
לחצו על לחצן פיזור החול כדי לפזר חול באופן ידני.";
s1_3_ImageFieName = "images/Img_2_2.png";

// Section 2
s2_Text_1="על הנהג לבצע בדיקת מילוי חול ותקינות מערכת בקטר בתחילת סידור העבודה:";
s2_TextTriple_1 = "לוודא כי ארגזי החול בקטר מלאים";
s2_TextTriple_2 = "לבצע בדיקת תקינות המערכת: \
<ol> \
<li><strong>הנהג</strong> יעביר את ההופכן לכיוון הנסיעה ויפעיל את מערכת החול באופן ידני.</li> \
<li><strong>עוזר הנהג/הפקח</strong> יבדוק תקינות התזת החול.</li> \
<li>לדווח על תקלות למרכז האחזקה הנייד.</li> \
</ol> ";
s2_TextTriple_3 = "לדווח על תקלות למרכז האחזקה הנייד";

// Section 3
s3_Text_1="חל איסור לפזר חול באופן ידני בעת מעבר על פני מסוטים.";
s3_LinkDocText = "ראו בסעיף 5.35 בחלק א' של ספר הוראות<br /> \
 הפעלת הרכבת להרחבה.";
s3_LinkDocUrl = "http://google.com";
s3_ImageFieName = "images/Img_4_1.png";

// Section 4
var correctSelections = [1,1,1,0];
var s4_feedbackText = "הנהג ידווח למרכז האחזקה הנייד במקרים בהם:<br /><br />";
var s4_title = "בלי פאניקה! תפעול תקלות";
var s4_questionText = "באילו מהמקרים הבאים עליכם לדווח למרכז האחזקה הנייד?<br />\
	<strong>בחרו את כל התשובות הנכונות.</strong>";
var s4_iconText_1 = "מידע כולל על מסילות מבוקרות ובלתי מבוקרות";
var s4_iconText_2 = "כל המידע התפעולי והנתונים בפורמט אחד, אחיד וידידותי";
var s4_iconText_3 = "לא צריך לעדכן ולהתעדכן באופן כפול";
var s4_iconText_4 = "מידע מקיף על מתחמים תפעוליים בצורה מרוכזת";
var s4_iconText_5 = "פורמט פרק מהירויות נגיש וברור יותר";


var selection = 0;
var answers = [0,0,0];
var passed = [0,0,0];

// Settings for questions in section 5
var correctAnswers = [2,4];

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['header','firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#menu',
		slidesNavigation: true,
		scrollOverflow:true,
		css3:true,
		afterLoad: function(anchorLink, index){
			if(index > 1){				
				$('#menu').slideDown(200);
			}
			else {
				$('#menu').slideUp(200);
			}
			if(index==3){
				$('#text-triple_1').css("margin-top","4vw");		
				$('#text-triple_1').css("opacity","1");
				
				$('#text-triple_2').css("margin-top","4vw");		
				$('#text-triple_2').css("opacity","1");
										
				$('#text-triple_3').css("margin-top","4vw");		
				$('#text-triple_3').css("opacity","1");
			}
		}
	});
	
	// MENU AND MAIN TITLES
	for(var i=1;i<=5;i++){
		$("#menu-text_" + String(i)).html(mainTitles[i-1]);
		$(".main-title_" + String(i)).html(mainTitles[i-1]);
	}
	
	// GATE PAGE
/* 	$("#video_1").attr("src",s0_movieFileName);
	$("#video_1").get(0).play(); */
	$("#gate-title").delay(3000).fadeIn(300);
	$("#gate-subtitle").delay(4000).fadeIn(300);
	$("#subtitle-left_1").html(s0_subtitle);
	$("#text-left_1").html(s0_textLeft);
	$("#text-right_1").html(s0_textRight);
	$("#link-doc_1").html(s0_LinkDocText);
	$("#link-doc_1").attr("href",s0_LinkDocUrl);
	
	$('#content-right_1').css("margin-right","0vw");
	$('#content-left_1').css("margin-left","0vw");
	
	// SECTION 1
	$('#video_2_1').attr("src",s1_movieFileName);	
	$("#s1-1-text").html(s1_1_Text);
	$("#s1-2-text").html(s1_2_Text);
	$('#s1-2-image').attr("src",s1_2_ImageFieName);
	$("#s1-3-text").html(s1_3_Text);
	$('#s1-3-image').attr("src",s1_3_ImageFieName);
	
	
	// SECTION 2		
	$("#text_3_1").html(s2_Text_1);
	$("#s2-text-2").html(s2_TextTriple_1);
	$("#s2-text-3").html(s2_TextTriple_2);
	$("#s2-text-4").html(s2_TextTriple_3);
	
	// SECTION 3
	$("#s3-text_1").html(s3_Text_1);
	$("#link-doc_2").html(s3_LinkDocText);
	$("#link-doc_2").attr("href",s3_LinkDocUrl);
	$('#s1-3-image').attr("src",s3_ImageFieName);
	
	// SECTION 5
	// $("text_5_1").html(s4_questionText);#
	$("#sel-text_5_1").html(s4_iconText_1);
	$("#sel-text_5_2").html(s4_iconText_2);
	$("#sel-text_5_3").html(s4_iconText_3);
	$("#sel-text_5_4").html(s4_iconText_4);
	$("#sel-text_5_5").html(s4_iconText_5);
	
	$('#menu').hover(function(e){
		$('#menu-extension').fadeIn(300);
	},
	function(e){
		$('#menu-extension').fadeOut(200);
	});
	
	$('.icon-in-circle').click(function(e){		
		var selNum= parseInt(e.target.id.split("_")[2]);
		
		selection = selNum;
				 
		$(e.target).toggleClass('icon-selected_5_' + String(selection));
	});
	
	$('#check-btn_5').click(function(e){		
		$("#text_5_1").html(s4_feedbackText);
		
		for(var i=1;i<=4;i++){
			$("#icon_5_" + String(i)).removeClass('icon-selected_5_' + String(i));
						
			if(correctSelections[i-1] == 1){
				$("#icon_5_" + String(i)).addClass('icon-correct_5_' + String(i));
			}
			else {
				$("#icon_5_" + String(i)).addClass('icon_5_' + String(i));
				$("#btn_5_" + String(i)).css("opacity","0.3");
			}
		}
		
		$(e.target).fadeOut(300);
	});
	
	$('.answer-option').click(function(e){		
		var ansPrefix = "#" + e.target.id.split("_",3).join("_");
		var slideNum= parseInt(e.target.id.split("_")[2]);
		var ansNum= parseInt(e.target.id.split("_")[3]);
		
		if(passed[slideNum-1]==0){
			answers[slideNum-1] = ansNum;
			
			for(var i=1;i<=4;i++){
				$(ansPrefix + "_" + String(i)).removeClass('ans-selected');
			}
					 
			$(e.target).addClass('ans-selected');
		}
	});
	
	$('#check-btn_6_1').click(function(e){		
		$("#answer-option_6_1_" + String(correctAnswers[0])).addClass('ans-correct');
		
		if(answers[0]!=correctAnswers[0]) { 
			$("#answer-option_6_1_" + String(answers[0])).addClass('ans-wrong'); 
		}
		
		$(e.target).fadeOut(300);
		
		passed[0] = 1;
	});
	
	$('#check-btn_6_2').click(function(e){		
		$("#answer-option_6_2_" + String(correctAnswers[1])).addClass('ans-correct');
		
		if(answers[1]!=correctAnswers[1]) { 
			$("#answer-option_6_2_" + String(answers[1])).addClass('ans-wrong'); 
		}
		
		$(e.target).fadeOut(300);
		
		passed[1] = 1;
	});
	
});