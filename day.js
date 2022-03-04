var icon = document.getElementById("icon")

		icon.onclick = function() {
			document.body.classList.toggle("dark-theme")
			if (document.body.classList.contains("dark-theme")) {
				icon.src ="https://img.icons8.com/ios/60/ffffff/sun.png"
			}else{
				icon.src = "https://img.icons8.com/ios-glyphs/60/000000/moon-symbol.png"
			}
		}