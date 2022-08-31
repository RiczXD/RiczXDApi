const dictionary = {
	"iso_639_1": {
		"en": "en",
		"id": "id",
		"jv": "jv"
	},
	"document_anime": {
		"en": "Anime Documentation",
		"id": "Anime Dokumentasi",
		"jv": "Dokumentasi Anime"
	}
}

var langs = ['en', 'id', 'jv'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = async function(lang) {
	current_lang = lang
	translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
					$(this).html(dictionary[key][current_lang] || "N/A");
    });
}

const bcookie = localStorage.getItem("bahasa");
if(!bcookie) {
	change_lang('en')
} else {
	change_lang(bcookie)
}

translate();
