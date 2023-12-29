$(document).ready(function() {
    $("button").click(function() {
        var loveScore = Math.floor(Math.random() * 100 + 1);
        var name1 = $(".input1").val();
        var name2 = $(".input2").val();
        if (name1 === '' || name2 === '') {
            alert("Enter Both Names.")
        } else if (loveScore > 70) {
            $("h1").html(name1 + ' <span class="heart" style="font-size: 5rem;">&hearts;</span> ' + name2);
            $("p").html("<h2>" + loveScore + "%" + "</h2>");
            $(".para-2").text("Your loves each other is like kanye loves kanye");
        } else if (loveScore > 35 && loveScore <= 70) {
            $("h1").html(name1 + ' <span class="heart" style="font-size: 5rem;">&hearts;</span> ' + name2);
            $("p").html("<h2>" + loveScore + "%" + "</h2>");
            $(".para-2").text("Your love is in a good place, growing steadily like a well-tended garden.");
        } else if (loveScore <= 35) {
            $("h1").html(name1 + ' <span class="heart" style="font-size: 5rem;">&hearts;</span> ' + name2);
            $("p").html("<h2>" + loveScore + "%" + "</h2>");
            $(".para-2").text("They go like oil and water");
        }
    });
});

