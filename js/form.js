window.cat = "Товары > ";
window.lin = "Товары > ";
window.change = "";
window.last = "";
window.result = "";

$(document).ready(function() {
	$(".click").on("click", function() {
		$(".opt-left").find("p").removeClass("pop");
		$(".opt-left").find("li").css({"display":"none"});
		$(this).parent().find("p").addClass("pop");
		$(this).parent().find("li").css({"display":"flex"});
		window.change = $(this);
		window.cat = $(lin).text() + ' > ' + $(change).text() + ' > ';
	})
})

$(document).ready(function() {
	$(".next-step").on("click", function() {
		$(".start-list").css({"display":"none"});
		$(".scale").css({"display":"none"});
		$(".scale_2").css({"display":"flex"});
		$(".mid-list").css({"display":"flex"});
	})
})

$(document).ready(function() {
	$(".back").on("click", function() {
		$(".mid-list").css({"display":"none"});
		$(".start-list").css({"display":"flex"});
		$(".scale_2").css({"display":"none"});
		$(".scale").css({"display":"flex"});
		
	})
})

$(document).ready(function() {
	$(".links").find("a").on("click", function() {
		$(".links").find("a").removeClass("active-links");
		$(this).addClass("active-links");
		window.lin = $(this);
		window.cat = $(lin).text() + ' > ';
	})
})

$(document).ready(function() {
	$(".with-option").find("li").on("click", function() {
		$(".with-option").find("li").removeClass("active-li");
		$(this).addClass("active-li");
		window.last = $(this);
		window.result = window.cat + $(last).text();
	})
})

$(document).ready(function() {
	$("#prev-step").on("click", function() {
		$(".check-list").css({"display":"none"});
		$(".overlay").css({"display":"none"});
		$(".mid-list").css({"display":"flex"});
		$(".scale_2").css({"display":"flex"});
	})
})

$(document).ready(function() {
	$("#prev-step").on("click", function() {
		$(".check-list").css({"display":"none"});
		$(".overlay").css({"display":"none"});
	})
})

$(document).ready(function() {
	
	$("#valid").on("click", function() {
		var name = $("#name").val();
		var about = $("#about").val();
		var mail = $("#mail").val();
		var phone = $("#phone").val();
		var adress = $("#adress").val();
		var tariff = $(".owl-item.center").find("h3").text();

		$(".mid-list").css({"display":"none"});
		$(".scale_2").css({"display":"none"});
		$(".overlay").css({"display":"flex"});
		$(".check-list").css({"display":"flex"});
		$(".cat").text(result);
		$(".shop").text(name);
		$(".info").text(about);
		$(".loc").text(adress);
		$(".myPhone").text(phone);
		$(".myMail").text(mail);
		$(".tariff").text(tariff);
		
	})
})
