var tStart = 30 // Start transition 100px from top
    , tEnd = 500   // End at 500px
    , cStart = [30, 30, 30]
    , cEnd = [255, 255, 255]
    , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];
	
$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $(".background-full").css('background-color', 'rgb(' + cBg.join(',') +')');
        var tShadowX = "3px 3px 0 rgb(" + cBg.join(',') +")";
        var tShadowY = "-3px 3px 0 rgb(" + cBg.join(',') +")";
        var tShadowBlur = "-3px -3px 0 rgb(" + cBg.join(',') +")";
        var tShadowColor = "3px -3px rgb(" + cBg.join(',') +")";
        var tShadow = tShadowX + ", " + tShadowY + ", " + tShadowBlur+ ", " + tShadowColor;
        $(".pretty-underline").css('text-shadow', tShadow);
    });
});
			
var tStart2 = 30 // Start transition 100px from top
    , tEnd2 = 500   // End at 500px
    , cStart2 = [255, 255, 255]
    , cEnd2 = [0, 0, 0]
    , cDiff2 = [cEnd2[0] - cStart2[0], cEnd2[1] - cStart2[1], cEnd2[1] - cStart2[0]];
	
$(document).scroll(function() {
    var p = ($(this).scrollTop() - tStart2) / (tEnd2 - tStart2); // % of transition
    p2 = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
    var cBg2 = [Math.round(cStart2[0] + cDiff2[0] * p2), Math.round(cStart2[1] + cDiff2[1] * p2), Math.round(cStart2[2] + cDiff2[2] * p2)];
$(".font_color").css('color', 'rgb(' + cBg2.join(',') +')');
});
			
var p = ($(this).scrollTop() - tStart2) / (tEnd2 - tStart2); // % of transition
p2 = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
var cBg2 = [Math.round(cStart2[0] + cDiff2[0] * p2), Math.round(cStart2[1] + cDiff2[1] * p2), Math.round(cStart2[2] + cDiff2[2] * p2)];
$(".font_color").css('color', 'rgb(' + cBg2.join(',') +')');
