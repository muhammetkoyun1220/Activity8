$('#birthday').datepicker();

	var programs = [
				"Php", 
				"Java", 
				"Pyton",
				"Sql",
				"C#" 
				];

	$("#language").autocomplete({
source: programs 
});
