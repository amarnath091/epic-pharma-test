﻿function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(document.location);
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?");
var arrURLParams = arrParams[1].split("&");
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=");
var sValue = unescape(sParam[1]);
if( sParam[0] == frameObjectName)
	sTerms = sValue;
if( sParam[0] == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>"); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">");
d.write("<html lang=\"en\">");
d.write("<head>");
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">");
d.write("</head>");
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: transparent;\">");
d.write("<div id=\"wpSearchResults\"></div>");
d.write("<script type=\"text/javascript\">");
d.write("var wordMap = new Array(\" epic pharma began operations mid-2008 purchasing sandoz facility located laurelton dedicated developing manufacturing generic prescription drugs variety therapeutic categories tablet capsule powder forms addition internal drug development manufacture also offer contract services with emphasis quality customer satisfaction cost have proven track record largest manufacturer united states large pharmaceutical company welcome operations epic operates square foot approximately employees fully functional approved utilize state machinery technology techniques bring customers high products time every ability diverse portfolio including controlled learn more about develops manufactures markets broad array pharmaceuticals that improving life people around world encourage explore product catalog learn more about visit individual pages products epic's epics line \",\" search results \",\" epic develops manufactures markets broad array generic pharmaceuticals that improving quality life people around world encourage explore product catalog learn more about products visit individual pages citalopram betaxolol amlodipine besylate view product flavoxate hydrochloride nicardipine meperidine sulindac ursodiol guanfacine sodium polystyrene meclizine proven quality service isradipine \",\" personal relationships high degree responsiveness drive pursuit excellence encourage contact have questions about operations would like more information products epic pharma 227-15 conduit laurelton 11413 sales customer service drug information adverse reactions phone 1-888-374-2791 1-888-epic-rx1 1-718-949-3120 below list contacts provide additional nekela bornell epic-pharma business relations potti vendor supplies gloria guise technology george herman financial inquiries john smith accounts payable gladys romero human resources epic-hr 276-8600 276-1735 quick links people director michael lupo epic-pharma \",\" epic products proven quality service product catalog product name strength number size orange book rating brand reference detail amlodipine besylate tablets 42806-055-09 42806-055-05 42806-055-10 norvasc pfizer 42806-056-09 42806-056-05 42806-056-10 1000 42806-057-09 42806-057-05 42806-057-10 betaxolol 42806-038-01 kerlone sanofi-aventis 42806-039-01 citalopram 42806-019-01 42806-019-10 celexa 42806-020-01 42806-020-10 42806-021-01 42806-021-10 flavoxate hydrochloride 42806-058-01 urispas guanfacine 42806-048-01 42806-048-05 tenex 42806-049-01 42806-049-05 isradipine capsules 42806-263-01 42806-263-05 watson 42806-264-01 42806-264-05 meclizine 42806-012-01 antivert 42806-012-10 25mg 42806-014-01 42806-014-10 meperidine 42806-050-01 demerol corp 42806-051-01 nicardipine 42806-501-09 42806-501-01 42806-501-05 cardene therapeutics 42806-502-09 42806-502-01 42806-502-05 sodium polystyrene powder 42806-013-96 kayexalate sulindac 42806-018-01 42806-018-05 clinoril merck 42806-011-01 42806-011-05 ursodiol 42806-503-01 actigall pharma epic pharma copyright 2011 rights reserved pharma's pharmas portfolio continues diversify with launch available varying sizes dosage more information contact customer service 1-888-epic-rx1 read more recent news contact phone 276-8600 276-1735 customer human resources epic-hr epic-pharma food drug administration generic pharmaceutical association fda-resources healthcare professionals consumers fda-pharmaceutical development approval process useful links \",\" copyright 2011 epic pharma rights reserved operates square foot facility with approximately employees fully functional approved manufacturing utilize state machinery technology techniques bring customers high quality products time every have ability manufacture diverse portfolio including controlled operations equipment technology equipped validated equipment mixers ovens fluid dryer blenders granular coater instrumented tablet press capsule filler also supported in-house analytical capabilities hplc automated dissolution systems scanning electron microscope capabilities include controlled drugs regulatory compliance product development expertise sustained release bulk product tableting encapsulation packaging testing distribution \",\" under construction please pardon appearance coming soon \",\" amlodipine besylate strength brand name norvasc pfizer orange book rating therapeutic class anti-hypertensive color white off-white shape round sizes tablets bottle ndc# strength size 42806-055-09 42806-055-05 42806-055-10 1000 42806-056-09 42806-056-05 42806-056-10 42806-057-09 42806-057-05 42806-057-10 \",\" betaxolol strength brand name kerlone sanofi-aventis orange book rating therapeutic class anti-hypertensive color white shape round sizes tablets bottle ndc# size 42806-038-01 42806-039-01 \",\" citalopram strength brand name celexa forest orange book rating therapeutic class anti-depressant color oval shape round sizes 1000 tablets bottle ndc# size 42806-019-01 42806-019-10 42806-020-01 42806-020-10 42806-021-01 42806-021-10 \",\" epiflur sodium fluoride strength brand name luride colgate orange book rating grand father therapeutic class cariostatic color white shape round sizes 1000 tablets bottle ndc# size 42806-037-12 42806-060-12 42806-073-12 \",\" strength brand name klor-con upsher-smith orange book rating grand father therapeutic class potassium supplement color orange-flavored powder shape pouch sizes packets ndc# size 42806-098-30 42806-098-01 42806-099-30 42806-099-01 epiklor chloride \",\" strength brand name uripas orange book rating therapeutic class urinary antispasmodic color white shape round sizes tablets bottle ndc# size 42806-058-01 flavoxate hydrochloride \",\" strength brand name demerol sanofi-aventis orange book rating therapeutic class opioid analgesic color white shape round sizes tablets bottle ndc# size 42806-050-01 42806-051-01 meperidine hydrochloride \",\" strength brand name cardene therapeutics orange book rating therapeutic class anti-hypertensive color light blue opaque white shape oblong sizes tablets bottle ndc# size 42806-501-09 42806-501-01 42806-501-05 42806-502-09 42806-502-01 42806-502-05 nicardipine hydrochloride \",\" strength brand name clinoril merck orange book rating therapeutic class anti-inflammatory color yellow shape oval sizes tablets bottle ndc# size 42806-018-01 42806-018-05 42806-011-01 42806-011-05 sulindac \",\" ursodiol strength brand name actigall watson pharma orange book rating therapeutic class blue acid gallstones solubilizing color white pink shape oblong sizes capsule bottle ndc# size 42806-503-01 \",\" guanfacine hydrochloride tablets strength brand name tenex orange book rating therapeutic class anti-hypertensive color white yellow shape round flat-faced sizes bottle ndc# size 42806-048-01 42806-048-05 42806-049-01 42806-049-05 \",\" strength brand name antivert orange book rating therapeutic class antihstamine color blue shape oval sizes 1000 tablets bottle ndc# size 42806-012-01 42806-012-10 42806-014-01 42806-014-10 meclizine hydrochloride \",\" brand name kayexalate orange book rating therapeutic class anti-hypoerkalemic color cream light brown shape powder sizes bottle strength sodium polystyrene ndc# size 42806-013-96 \",\" isradipine strength brand name watson orange book rating therapeutic class anti-hypertensive color white opaque flesh shape capsule sizes bottle ndc# size 42806-263-01 42806-263-05 42806-264-01 42806-264-05 \");");
d.write("var pageMap = new Array(\"Home\",\"Search Results\",\"Products\",\"Contact\",\"Product Catalog\",\"Operations\",\"News\",\"Amlodipine Besylate\",\"Betaxolol\",\"Citalopram\",\"Epiflur (Sodium Fluoride)\",\"Epiklor (Potassium Chloride)\",\"Flavoxate Hydrochloride\",\"Meperidine Hydrochloride\",\"Nicardipine Hydrochloride\",\"Sulindac\",\"Ursodiol\",\"Guanfacine\",\"Meclizine Hydrochloride\",\"Sodium Polystyrene\",\"Isradipine\");");
d.write("var linkMap = new Array(\"index.html\",\"page2.html\",\"page3.html\",\"page4.html\",\"page5.html\",\"page6.html\",\"page7.html\",\"page8.html\",\"page9.html\",\"page10.html\",\"page11.html\",\"page12.html\",\"page13.html\",\"page14.html\",\"page15.html\",\"page16.html\",\"page17.html\",\"page18.html\",\"page19.html\",\"page20.html\",\"page21.html\");");
d.write("var preMap = new Array(\"EPIC PHARMA began operations in mid-2008 by purchasing the Sandoz facility located in Laurelton  NY  We are dedicated to developing and manufacturing generic prescription drugs in a variety of therape\",\"Search Results \",\"Epic develops  manufactures and markets a broad array of generic pharmaceuticals that are improving the quality of life of people around the world   We encourage you to explore our product catalog to \",\"Personal relationships and a high degree of responsiveness drive our pursuit of excellence  We encourage you to contact us if you have any questions about our operations or would like to get more info\",\"Epic Products E P I C P H A R M A   L L C  Proven Quality and Service  PRODUCT CATALOG Product Name Strength NDC Number Size Orange  Book Rating Brand Reference Detail Amlodipine Besylate  Tablets 2 5\",\"Copyright 2011 Epic Pharma  L L C  All Rights Reserved Epic operates a 110 000 square foot facility  with approximately 200 employees  Our facility is a fully functional FDA approved manufacturing fac\",\"Under Construction Please Pardon Our Appearance COMING SOON \",\"Amlodipine Besylate Strength  2 5 mg   5 mg   10 mg Brand Name  Norvasc  Pfizer  Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Anti-hypertensive Color  White to Off-White Shape  Round Sizes  90\",\"Betaxolol Strength  10 mg   20 mg Brand Name  Kerlone  Sanofi-Aventis  Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Anti-hypertensive Color  White Shape  Round Sizes  100 Tablets  Bottle      \",\"Citalopram Strength  10 mg   20 mg   40 mg Brand Name  Celexa  Forest  Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Anti-depressant Color  Oval Shape  Round Sizes  100 - 500 - 1000 Tablets  Bo\",\"Epiflur  Sodium Fluoride  Strength  0 25 mg   0 5 mg  Brand Name  Luride  Colgate  Orange Book Rating  Grand Father OTC Rx  Rx Therapeutic Class  Cariostatic Color  White  Shape  Round Sizes  120 - 10\",\"Strength  20 mEq   25 mEq Brand Name  Klor-Con  Upsher-Smith  Orange Book Rating  Grand Father OTC Rx  Rx Therapeutic Class  Potassium Supplement Color  Orange-Flavored Powder Shape  Pouch Sizes  30 -\",\"Strength  100 mg Brand Name  Uripas Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Urinary Antispasmodic Color  White Shape  Round Sizes  100 Tablets  Bottle                   NDC# Strength Size\",\"Strength  50 mg   100 mg Brand Name  Demerol  Sanofi-Aventis  Orange Book Rating  AA OTC Rx  Rx Therapeutic Class  Opioid Analgesic Color  White Shape  Round Sizes  100 Tablets  Bottle                \",\"Strength  20 mg   30 mg Brand Name  Cardene  EKR Therapeutics  Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Anti-hypertensive Color  Light Blue Opaque  White Opaque Shape  Oblong Sizes  90 - 1\",\"Strength  150 mg - 200 mg Brand Name  Clinoril  Merck  Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Anti-inflammatory Color  Yellow Shape  Oval Sizes  100 - 500 Tablets  Bottle                \",\"Ursodiol Strength  300 mg Brand Name  Actigall  Watson Pharma  Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Blue Acid or Gallstones Solubilizing Color  White   Pink Shape  Oblong Sizes  90 - 5\",\"Guanfacine Hydrochloride Tablets Strength  1 mg   2 mg Brand Name  Tenex Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Anti-hypertensive Color  White   Yellow Shape  Round  flat-faced Sizes  10\",\"Strength  12 5mg mg   25 mg Brand Name  Antivert Orange Book Rating  AA OTC Rx  Rx Therapeutic Class  Antihstamine Color  Blue Shape  Oval Sizes  100   1000 Tablets  Bottle                    NDC# Str\",\"Brand Name  Kayexalate Orange Book Rating  AA OTC Rx  Rx Therapeutic Class  Anti-hypoerkalemic Color  Cream to Light Brown Shape  Powder Sizes  1lb  bottle Strength  453 6 gm  bottle                  \",\"Isradipine  Strength  2 5 mg   5 mg Brand Name  Watson Orange Book Rating  AB OTC Rx  Rx Therapeutic Class  Anti-hypertensive Color  White Opaque   Flesh Opaque Shape  Capsule Sizes  100 - 500 Capsule\");");
d.write("function doNav(ind)");
d.write("{");
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\");");
else
d.write("		 parent.window.location.href=linkMap[ind];");
d.write("}");
d.write("function wpDoSearch(searchTerms){");
d.write("var terms = searchTerms.split(\" \");");
d.write("if (terms==\"\") return;");
d.write("var results = \"\";");
d.write("var resultscount = 0;");
d.write("for (var i=0; i<wordMap.length; i++)");
d.write("{");
d.write("			var found=true;");
d.write("			for (var j=0; j<terms.length; j++)");
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;");
d.write("			if (found)");
d.write("			{");
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\");\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";");
d.write("				 resultscount++;");
d.write("			}");
d.write("}");
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;");
d.write("}");
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","");
};
d.write("wpDoSearch(\""+sTerms+"\");");
d.write("</script>");
d.write("</body></html>");
d.close();
}